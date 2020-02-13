import { Injectable } from "@angular/core";
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Order,OrderItem} from './order.model'
import {MEAT_API} from '../app.api'


@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, 
        private http: HttpClient){}

    itemsValue():number{
        return this.cartService.total();
    }

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }
    
    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    checkOrder(order: Order): Observable<string>{
        return this.http.post<string>(`${MEAT_API}/orders`, order)
    }

    clear(){
        this.cartService.clear()
    }
}
