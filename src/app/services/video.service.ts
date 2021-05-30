import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VideoService {




  private static getVideos(): string {
    return `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;
  };

}
