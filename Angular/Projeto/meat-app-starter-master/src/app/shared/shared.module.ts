import {NgModule,ModuleWithProviders} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {LoginService} from '../security/login/login.service'
import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'
import {LoggedinInGuard} from '../security/loggedin.guard'
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import {OrderService} from '../order/order.service'
import {RestaurantsService} from '../restaurants/restaurants.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component'
import {LeaveOrderGuard} from '../order/leave-order.guard'
import {NotificationService} from './messages/notification.service';
import {AuthInterceptor} from '../security/auth.interceptor'


@NgModule({
    declarations: [InputComponent, RatingComponent, RadioComponent, SnackbarComponent],
    imports: [CommonModule,FormsModule,ReactiveFormsModule],
    exports: [InputComponent, RatingComponent, RadioComponent,SnackbarComponent,
              CommonModule,FormsModule,ReactiveFormsModule] 
})
 

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers:[ShoppingCartService,
                       RestaurantsService,
                       OrderService,
                       NotificationService,
                       LoggedinInGuard,
                       LeaveOrderGuard,
                       {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
                       LoginService]
        }
    }
}