import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcGridFilter from '@grapecity/wijmo.grid.filter';

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  source: any;
  private _filterRows: any[];

  constructor() {
    this.source = this.getData(100);
  }

  onFilterApplied(s, e) {
    this._filterRows = [];
    const view = this.source;
    view.sourceCollection.forEach(item => {
      if(view.filter && view.filter(item)) {
        this._filterRows.push(item);
      }
    });

  }

  onClick() {
    console.log(this._filterRows);
  }

  getData(count: number) {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','), data = [];
    for (var i = 0; i < count; i++) {
      data.push({
        id: i,
        country: countries[i % countries.length],
        date: new Date(2014, i % 12, i % 28),
        amount: Math.random() * 10000,
        active: i % 4 == 0
      });
    }
    return new wjcCore.CollectionView(data, {
      pageSize: 10
    });
  }
}