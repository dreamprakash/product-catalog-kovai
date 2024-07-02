import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<{ priceRange: number[] }>();

  priceRange: any[] = [0, 1000];

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter() {
    this.filterChanged.emit({ priceRange: this.priceRange });
  }
}
