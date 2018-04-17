import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';

@Injectable()
export class AnotherProductService implements ProductService {
    getProduct(): Product {
        return new Product(1,'iphone9',9999,"最好看的苹果手机");
    }

  constructor() { }

}
