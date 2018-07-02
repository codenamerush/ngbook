import { 
  Component, 
  EventEmitter,
  Input,
  Output 
} from '@angular/core';
import { Product } from '../product.model';

/**
* @ProductsList: A component for rendering all ProductRows and
* storing the currently selected Product
*/
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
  /**
  * @input productList - the Product[] passed to us
  */
  @Input() productList: Product[];

  /**
  * @output onProductSelected - outputs the current
  * Product whenever a new Product is selected
  */
  @Output() onProductSelected: EventEmitter<Product>;
}
