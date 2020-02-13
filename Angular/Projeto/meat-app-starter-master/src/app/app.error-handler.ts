import {HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';
import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core'
import {NotificationService} from './shared/messages/notification.service'
import {LoginService} from './security/login/login.service'

@Injectable()
export class AplicationErrorHandler extends ErrorHandler {

    constructor(private ns: NotificationService, private injector: Injector, private zone: NgZone){
        super()
    }

    handleError(errorResponse: HttpErrorResponse | any){
        const message = errorResponse.error.message
        if(errorResponse instanceof HttpErrorResponse){
            this.zone.run(() =>{
                switch(errorResponse.status){
                    case 401:
                        this.injector.get(LoginService).handleLogin()
                    break;
                    case 403:
                        this.ns.notify(message || 'Não outorizado')
                    break;
                    case 404:
                        this.ns.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhe')
                    break;
                }
            })                     
        }
        super.handleError(errorResponse)
    }
}