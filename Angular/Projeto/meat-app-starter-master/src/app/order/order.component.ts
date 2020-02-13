import { Component, OnInit } from '@angular/core';
import {OrderService} from './order.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {RadioOption} from '../shared/radio/radio-option.model'
import {Order,OrderItem} from './order.model'
import {Router} from '@angular/router'
import {FormGroup,FormBuilder,Validators,AbstractControl, FormControl} from '@angular/forms'


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  orderForm: FormGroup

  delivery: number = 8

  orderId: string

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      name:this.formBuilder.control('', [Validators.required,Validators.minLength(5)]),
      email:this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      emailConfirm:this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      address:this.formBuilder.control('',[Validators.required,Validators.minLength(5)]),
      number:this.formBuilder.control('',[Validators.required,Validators.pattern(this.numberPattern)]),
      optionAddress:this.formBuilder.control(''),
      paymentOptions:this.formBuilder.control('',[Validators.required])
    }, {validators:OrderComponent.equalsTo, updateOn:'blur'})
  }

  static equalsTo(group: AbstractControl): {[key:string]:boolean}{
    let resp = undefined
    const email = group.get('email')
    const emailConfirm = group.get('emailConfirm')
    if(!email || !emailConfirm){
      resp = undefined
    }else if(email.value !== emailConfirm.value){
      resp = {emailsNotMatch:true}
    }
    return resp
  }

  itemsValue():number{
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }
  
  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
    .map((item:CartItem)=> new OrderItem(item.quantity, item.menuItem.id))

    this.orderService.checkOrder(order)
    .do((orderId: string) => {
      this.orderId = orderId
    })
    .subscribe((orderId:string) => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear();
    })
  }

  isOrderCompleted():boolean{
    return this.orderId !== undefined
  }
}
