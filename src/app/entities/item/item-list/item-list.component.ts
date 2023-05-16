import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../service/item.service';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{

  categoryId?: number;
  title: string = "";
  items: Item[] = [];

  constructor(
    private route:ActivatedRoute,
    private itemService: ItemService
    ){}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get("categoryId")){
      this.categoryId = +this.route.snapshot.paramMap.get("categoryId")!;
      this.title = "Articulos de la categoria " + this.categoryId;
      this.getAllItemsInCategory(this.categoryId)
    } else {
      this.title = "Lista de articulos";
      this.getAllItems();
    }
  }

  private getAllItems(): void {
    this.itemService.getAllItems().subscribe({
      next: (itemsRequest) => {this.items = itemsRequest; },
      error: (err) => {this.handleError(err); }
    })
  }

  private getAllItemsInCategory(categoryId: number): void {
    this.itemService.getAllItemsByCategoryId(categoryId).subscribe({
      next: (itemsRequest) => {this.items = itemsRequest; },
      error: (err) => {this.handleError(err); }
    })
  }

  private handleError(error: any): void {
    //mensaje error
  }
}
