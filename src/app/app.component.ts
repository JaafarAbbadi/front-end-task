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
    console.log({select: lookup});
  }
  removeNode(lookup: Lookup){
    console.log({remove: lookup});
  }
  onSearch(searchTerm: string){
    console.log({search: searchTerm});
  }
}
