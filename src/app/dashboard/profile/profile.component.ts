import {HttpClient} from '@angular/common/http';
import {Component, DoCheck, OnInit} from '@angular/core';
import {Avatar} from '@app/core/models/avatar.model';
import {UserProfile} from '@app/core/models/user-profile.model';
import {ProfileService} from '@app/core/services/profile.service';
import {ImageCroppedEvent} from 'ngx-image-cropper';
@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit, DoCheck {
  user!: UserProfile;
  avatar!: Avatar;
  croppedImage: ImageCroppedEvent['base64'];
  constructor(private http: HttpClient, private service: ProfileService) {
  }
  ngOnInit(): void {
    this.service.getUserProfile().subscribe((temp: UserProfile) => this.user = temp);
    this.service.getAvatar().subscribe((temp: Avatar) => this.avatar = temp);
    if (this.avatar != undefined) {
      this.croppedImage = this.avatar.pic;
    }
  }
  ngDoCheck(): void {
    if (this.avatar != undefined) {
      this.croppedImage = this.avatar.pic;
    }
    console.log('some');
  }
}
