import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasourse';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) { }

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe(o => this.orders = o);
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrders(order).subscribe(or => {
      // tslint:disable-next-line: triple-equals
      this.orders.splice(this.orders.findIndex(o => o.id == order.id), 1, or);
    });
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrders(id).subscribe(or => {
      // tslint:disable-next-line: triple-equals
      this.orders.splice(this.orders.findIndex(o => o.id == id), 1);
    });
  }
}
