import {Component, OnDestroy, OnInit} from '@angular/core';
import {RxStompService} from '@stomp/ng2-stompjs';
import {AuthService} from '@core/services/auth.service';
import {ChatMessage} from '@chat/models/chat.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit, OnDestroy {

  messageText?: string;
  messages: ChatMessage[] = [];

  messageSubscription?: Subscription;

  constructor(private chatService: RxStompService, private authService: AuthService) { }

  ngOnInit(): void {
    console.log('Chat component initialized...');
    this.messageSubscription = this.chatService.watch({
      destination: '/session/test'
    }).subscribe(messageStr => {
      const message = JSON.parse(messageStr.body);
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    this.messageSubscription?.unsubscribe();
  }

  sendMessage(sessionId: string) {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        const chatMessage: ChatMessage = {
          sender: user,
          message: this.messageText,
          sent: new Date(),
          type: 'MESSAGE'
        };
        this.chatService.publish({
          destination: `/app/chat.sendMessage/${sessionId}`,
          body: JSON.stringify(chatMessage),
          headers: {
            id: sessionId
          }
        });
      }
    });
  }

}
