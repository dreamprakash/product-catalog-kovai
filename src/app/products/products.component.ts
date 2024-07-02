import { Component } from '@angular/core';
import { Product } from '../models/product.interface'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Smartphone', image: 'https://placehold.co/400', price: 10000 },
    { id: 2, name: 'Laptop', image: 'https://placehold.co/400', price: 250000 },
    { id: 3, name: 'Tshirt', image: 'https://placehold.co/400', price: 150 },
    { id: 4, name: 'Pant', image: 'https://placehold.co/400', price: 1000 },
    { id: 5, name: 'Camera', image: 'https://placehold.co/400', price: 50000 },
    { id: 6, name: 'Shoe', image: 'https://placehold.co/400', price: 5000 },
    { id: 7, name: 'DSLR', image: 'https://placehold.co/400', price: 200000 },
    { id: 8, name: 'Spider Cam', image: 'https://placehold.co/400', price: 100000 },
    { id: 9, name: 'Belt', image: 'https://placehold.co/400', price: 600 },
    { id: 10, name: 'Smartwatch', image: 'https://placehold.co/400', price: 52000 },
    { id: 11, name: 'Kurthi', image: 'https://placehold.co/400', price: 3000 },
    { id: 12, name: 'Lehanga', image: 'https://placehold.co/400', price: 1500 },
  ];
  
  filteredProducts: Product[] = [...this.products];
  displayedProducts: Product[] = [];
  noProduct = true;
  itemsPerPage: number = 10;
  
  ngOnInit() {
    this.updateDisplayedProducts(1);
  }
  
  applyFilter(filter: { priceRange: number[] }) {
    this.filteredProducts = this.products.filter(product =>
      product.price >= filter.priceRange[0] && product.price <= filter.priceRange[1]
    );
    
    if(this.filteredProducts.length>0) {
      this.updateDisplayedProducts(1);
      this.noProduct = true;
    }
    else {
      this.noProduct = false;
    }
  }
  

  
  sortProducts(order: string) {
    this.filteredProducts.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    console.log("page")
    this.updateDisplayedProducts(1);
  }
  
  
  updateDisplayedProducts(page: number) {
    console.log(page,"page")
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }
  
}
