import { SafeResourceUrl } from '@angular/platform-browser';

export class PlayerModel {
  public videoTitle: string; // title="YouTube video player"
  public videoSrc: SafeResourceUrl; // src="https://www.youtube.com/embed/3t3NpgnZ19A"

  constructor(
    videoTitle: string,
    videoSrc: SafeResourceUrl
    ) {
      this.videoTitle = videoTitle;
      this.videoSrc = videoSrc;
    }

}

