import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lookup } from '../types/Lookup.type';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent{
  @Input()  root: Lookup = {label: 'root', value: 'root', children: []};
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onSelectNode: EventEmitter<Lookup> = new EventEmitter();
  @Output() onRemoveNode: EventEmitter<Lookup> = new EventEmitter();
  onSearchChange(ev: any){
    this.onSearch.emit(ev.target.value);
  }
  toggleCheckBox(ev: any, {label, value}: Lookup){
    (ev.checked)? this.onSelectNode.emit({label,value}) : this.onRemoveNode.emit({label,value});
  }
}
