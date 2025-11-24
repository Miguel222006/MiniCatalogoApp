import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Output() productCreated = new EventEmitter<Product>();

  productName: string = '';
  productPrice: number = 0;
  private nextId: number = 1;

  onSubmit(): void {
    if (this.productName.trim() && this.productPrice > 0) {
      const newProduct: Product = {
        id: this.nextId++,
        name: this.productName,
        price: this.productPrice
      };
      
      this.productCreated.emit(newProduct);
      
      // Limpiar formulario
      this.productName = '';
      this.productPrice = 0;
    }
  }
}