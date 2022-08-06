import { Component } from '@angular/core';
import {LOOKUPS} from './mock/lookups.mock';
import { Lookup } from './types/Lookup.type';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  root: Lookup = LOOKUPS[0];
  selectNode(lookup: Lookup){
    this.updateNode(lookup, (node) => node.checked = true);
    this.updateParents(this.root, lookup);
  }

  removeNode(lookup: Lookup){
    this.updateNode(lookup, (node) => node.checked = false);
    this.updateParents(this.root, lookup);
  }

  onSearch(searchTerm: string){
    // find the node that matches the search term
    this.updateVisibiity(this.root, searchTerm);
  }

  updateVisibiity(root: Lookup, searchTerm: string): boolean {
    let match = root.value.toLowerCase().includes(searchTerm) || root.label.toLowerCase().includes(searchTerm);
    // reset root visibility
    root.hidden = true;
    if (match) {
      this.updateNode(root, node => node.hidden = false);
      return true;
    }
    if (!root.children?.length) return false;
    for (let child of root.children) {
      match = this.updateVisibiity(child, searchTerm);
    }
    if (match) root.hidden = false;
    return true;
  }


  /**
   * apply callback for node and its children
   * @param {Lookup} lookup 
   * @param callback 
   */
  updateNode(lookup: Lookup, callback: (lookup: Lookup) => void): void {
    // make sure that we passed a valid callback
    if (!callback || typeof callback !== 'function') throw "Invalid callback";
    if (lookup.children?.length) {
      lookup.children.forEach(child => this.updateNode(child, callback));
    }
    callback(lookup);
  }

  /**
   * find and update the parents of a node after check
   * @param {Lookup} root
   * @param {Lookup} node
   * @return {boolean} is the root a parent of the node
   */
  updateParents(root: Lookup, node: Lookup): boolean {
    if (root == node) return true;
    if (!root.children?.length) return false;
    var isParent = false;
    var checks = 0, indeterminates = 0;
    for (let child of root.children) {
      isParent = isParent || this.updateParents(child, node);
      if (child.checked) checks++;
      if (child.indeterminate) indeterminates++;
    }
    if (!isParent) return false;
    // reset root check and indeterminate
    root.checked = root.indeterminate = false;
    // update check
    if (checks === root.children?.length) root.checked = true;
    else if (checks || indeterminates) root.indeterminate = true;

    return true;
  }
}
