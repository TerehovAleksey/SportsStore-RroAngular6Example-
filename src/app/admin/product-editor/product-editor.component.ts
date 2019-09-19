import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent {

  editing = false;
  product: Product;

  constructor(private repository: ProductRepository, private router: Router, activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';
    console.log('isEditing: ' + this.editing);
    if (this.editing) {
      this.product = repository.getProduct(activeRoute.snapshot.params.id);
      console.log('id: ' + activeRoute.snapshot.params.id);
      console.log('prod: ' + this.product);
    } else {
      this.product = new Product();
      console.log('prod: ' + this.product);
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
