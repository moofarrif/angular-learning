import { Component, OnInit } from '@angular/core';
import { orders } from './orders';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrls: ['./delivery-page.component.css'],
})
export class DeliveryPageComponent implements OnInit {
  public orders = orders;
  public statusWithCounts: { status: string; count: number }[] = [];
  public progress = [
    { id: 1, name: 'in progress', selected: true },
    { id: 2, name: 'pickup', selected: false },
    { id: 3, name: 'pending', selected: false },
    { id: 4, name: 'shipped', selected: false },
    { id: 5, name: 'delivered', selected: false },
  ];
  public dataStatus = [
    { name: 'shipped', status: 'De camino a ser entregado' },
    { name: 'delivered', status: 'Entregado' },
    { name: 'in progress', status: 'En preparación' },
    { name: 'pickup', status: 'Listo para pick-up' },
    { name: 'pending', status: 'Listo para enviarse' },
  ];

  constructor() {
    this.statusWithCounts = this.dataStatus.map((status) => {
      return {
        status: status.status,
        count: this.getCountForStatus(status.name),
      };
    });
  }

  ngOnInit() {}

  getStatusMessage(taskName: string): string {
    const statusEntry = this.dataStatus.find(
      (status) => status.name === taskName
    );
    return statusEntry ? statusEntry.status : 'Estado desconocido';
  }

  getCountForStatus(statusName: string): number {
    return this.orders.filter(
      (order) => order.orderStatusDelivery === statusName
    ).length;
  }


}
