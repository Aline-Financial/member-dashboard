import {UserRole} from '@core/models/user.role.model';

export type ChatUser = {
  username: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  role: UserRole;
};

export type ChatMessageType = 'MESSAGE' | 'JOIN' | 'LEAVE' | 'READ' | 'SENT' | 'DELIVERED' | 'TYPING';

export type ChatMessage = {
  sender: ChatUser;
  message?: string;
  type: ChatMessageType;
  sent: Date;
};
