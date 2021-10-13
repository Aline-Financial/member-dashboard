import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../models/user-profile.model';
import {UserProfileUpdate} from '../models/user-profile-update.model';
import {BaseHttpService} from './base-http.service';
import {CoreModule} from '@core/core.module';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Avatar} from '../models/avatar.model';
@Injectable({
    providedIn: CoreModule
  })
export class ProfileService extends BaseHttpService {
    constructor(private http: HttpClient) {
      super();
    }
    getUserProfile(): Observable<UserProfile> {
      return this.http.get<UserProfile>(this.getApi('/users/current/profile'));
    }
    putCroppedImage(avatar: Avatar): Observable<Avatar> { 
      return this.http.put<Avatar>(this.getApi('/users/current/avatar'), avatar);
    }
    getAvatar(): Observable<Avatar> {
      return this.http.get<Avatar>(this.getApi('/users/current/avatar'));
    }
   putProfileUpdate(userUpdate: UserProfileUpdate): Observable<UserProfileUpdate> {
      return this.http.put<UserProfileUpdate>(this.getApi('/users/current/profile'), userUpdate);
    }
}
