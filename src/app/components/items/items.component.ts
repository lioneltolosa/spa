import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { Items } from './interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Items[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemsService.getItems()
        .subscribe(items => this.items = items);
  }

}
