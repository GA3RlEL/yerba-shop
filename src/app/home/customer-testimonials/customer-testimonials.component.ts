import { Component } from '@angular/core';
import { customers } from '../../data/customers';

@Component({
  selector: 'app-customer-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './customer-testimonials.component.html',
  styleUrl: './customer-testimonials.component.css',
})
export class CustomerTestimonialsComponent {
  customers = customers;
}
