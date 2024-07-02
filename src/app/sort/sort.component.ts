import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Output() sortChanged = new EventEmitter<string>();
  sortOrder: string = 'asc'; // Default sort order
  constructor() { }

  ngOnInit(): void {
  }

  onSortChange() {
    this.sortChanged.emit(this.sortOrder);
  }
}
