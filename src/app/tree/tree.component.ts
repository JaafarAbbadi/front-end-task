import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { Lookup } from '../types/Lookup.type';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input()  root: Lookup = {label: 'root', value: 'root', children: []};
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onSelectNode: EventEmitter<Lookup> = new EventEmitter();
  @Output() onRemoveNode: EventEmitter<Lookup> = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  onSearchChange(ev: any){
    this.onSearch.emit(ev.target.value);
  }
  onSelection(node: Lookup){
    this.onSelectNode.emit(node);
  }
  onRemove(node: Lookup){
    this.onRemoveNode.emit(node);
  }
  toggleCheckBox(ev: any, node: Lookup){
    (ev.checked)? this.onSelectNode.emit(node) : this.onRemoveNode.emit(node);
  }
  
}
