import {Component} from '@angular/core';
import {Avatar} from '@app/core/models/avatar.model';
import {ProfileService} from '@app/core/services/profile.service';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.sass']
})
export class AvatarUploadComponent {
  avatar: Avatar = {
    pic: ''
  }
  imageChangedEvent: any;
  croppedImage: ImageCroppedEvent['base64'];
  constructor(private service: ProfileService) { }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  onSubmit() {
    this.avatar.pic = this.croppedImage;
    this.service.putCroppedImage(this.avatar).subscribe();
  }
}
