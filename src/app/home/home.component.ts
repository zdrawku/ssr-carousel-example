import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './data';
import { Title, Meta } from '@angular/platform-browser';

import { IgxDialogComponent, IgxGridComponent, Transaction } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Welcome to Ignite UI for Angular!';
  @ViewChild('gridRowEditTransaction', { static: true, read: IgxGridComponent }) public grid: IgxGridComponent;
  @ViewChild(IgxDialogComponent, { static: true }) public dialog: IgxDialogComponent;
  @ViewChild('dialogGrid', { static: true, read: IgxGridComponent }) public dialogGrid: IgxGridComponent;

  public data: any[];
  public transactionsData: Transaction[] = [];
  private addProductId: number;

  public chartType = 'Auto';

  data2 = [
    { CountryName: 'China', Pop1995: 1216, Pop2005: 1297, },
    { CountryName: 'India', Pop1995: 920, Pop2005: 1090, },
    { CountryName: 'United States', Pop1995: 266, Pop2005: 295, },
    { CountryName: 'Indonesia', Pop1995: 197, Pop2005: 229, },
    { CountryName: 'Brazil', Pop1995: 161, Pop2005: 186, }
  ];

  constructor(private titleService: Title, private metaService: Meta) {
    this.data = data;
    this.addProductId = this.data.length + 1;
  }

  public get transactions() {
    return this.grid.transactions;
  }
  public ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Angular, Universal, Example'},
      {name: 'description', content: 'Angular Universal Example'},
      {name: 'robots', content: 'index, follow'}
    ]);

    this.transactionsData = this.transactions.getAggregatedChanges(true);
    this.transactions.onStateUpdate.subscribe(() => {
        this.transactionsData = this.transactions.getAggregatedChanges(true);
    });
  }

  public addRow() {
    this.grid.addRow({
      CategoryID: this.getRandomInt(1, 10),
      Discontinued: this.getRandomInt(1, 10) % 2 === 0,
      OrderDate: new Date(this.getRandomInt(2000, 2050), this.getRandomInt(0, 11), this.getRandomInt(1, 25))
      .toISOString().slice(0, 10),
      ProductID: this.addProductId++,
      ProductName: 'Product with index ' + this.getRandomInt(0, 20),
      QuantityPerUnit: (this.getRandomInt(1, 10) * 10).toString() + ' pcs.',
      ReorderLevel: this.getRandomInt(10, 20),
      SupplierID: this.getRandomInt(1, 20),
      UnitPrice: this.getRandomInt(10, 1000),
      UnitsInStock: this.getRandomInt(1, 100),
      UnitsOnOrder: this.getRandomInt(1, 20)
    });
  }

  public classFromType(type: string): string {
    return `transaction--${type.toLowerCase()}`;
  }

  public deleteRow(event, rowID) {
    this.grid.deleteRow(rowID);
  }

  public openCommitDialog() {
    this.dialog.open();
    this.dialogGrid.reflow();
  }

  public commit() {
    this.grid.transactions.commit(this.data);
    this.dialog.close();
  }

  public cancel() {
    this.dialog.close();
  }

  public discard() {
    this.grid.transactions.clear();
    this.dialog.close();
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public get hasTransactions(): boolean {
    return this.grid.transactions.getAggregatedChanges(false).length > 0;
  }

  public stateFormatter(value: string) {
    return JSON.stringify(value);
  }

  public typeFormatter(value: string) {
    return value.toUpperCase();
  }

}
