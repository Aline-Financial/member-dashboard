import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatComponent} from './chat.component';
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import {environment} from '@environments/environment';
import {FormsModule} from '@angular/forms';

const stompConfig: InjectableRxStompConfig = {
  brokerURL: environment.application.messageBroker
};

@NgModule({
  declarations: [
    ChatComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: stompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ]
})
export class ChatModule { }
