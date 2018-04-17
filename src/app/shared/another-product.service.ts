import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {
  constructor(public logger:LoggerService) { }
  
    getProduct(): Product {
        this.logger.log("这是anotherProductService打出的日志");
        return new Product(1,'iphone9',9999,"最好看的苹果手机");
    }


}
