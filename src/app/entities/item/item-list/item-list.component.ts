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
  page:number = 0;
  size: number = 1;
  sort:string = "name,asc";

  first: boolean = false;
  last: boolean = false;
  totalPages: number = 0;
  totalElements: number = 0;

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
    this.itemService.getAllItems(this.page,this.size,this.sort).subscribe({
      next: (data: any) => {
        this.items = data.content; 
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      error: (err) => {this.handleError(err); }
    })
  }

  public nextPage(): void{
    this.page++;
    this.getAllItems();
  }

  public previousPage(): void{
    this.page--;
    this.getAllItems();
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
