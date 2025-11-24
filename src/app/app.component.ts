import { Component } from '@angular/core';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mini Catálogo de Productos';
  products: Product[] = [];

  onProductCreated(product: Product): void {
    this.products.push(product);
  }

  onProductDeleted(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }

  getTotalPrice(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}