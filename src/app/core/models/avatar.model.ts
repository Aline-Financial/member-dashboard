import { ImageCroppedEvent } from "ngx-image-cropper";

export type Avatar = {
    pic: ImageCroppedEvent["base64"];
  }