import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Output() pageChanged = new EventEmitter<number>();

  totalPages: number = 0;
  currentPage: number = 1;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems']) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    }
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }
}
