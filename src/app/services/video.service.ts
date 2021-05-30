import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { YOUTUBE_CONF } from '../../config';

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  constructor(
    private http: HttpClient
  ){}

  private static urlGetVideos(): string {
    return `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_CONF.API_KEY}&channelId=${YOUTUBE_CONF.CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;
  }

  public getVideos(): Observable<any> {
    return this.http.get(VideoService.urlGetVideos());
  };

}
