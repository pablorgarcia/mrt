import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { YOUTUBE_CONF } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class VideoService {

  // https://developers.google.com/youtube/v3
  // https://developers.google.com/youtube/v3/docs/search/list?hl=es#javascript

  constructor(private http: HttpClient) {}

  private static urlLastVideos(): string {
    return `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_CONF.API_KEY}&channelId=${YOUTUBE_CONF.CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;
  }

  private static urlYoutubeList(listName: string): string {
    // QUÉ LISTAS SALEN AQUÍ ???
    return `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${listName}&key=${YOUTUBE_CONF.API_KEY}`;
  }

  public getLastVideos(): Observable<any> { return this.http.get(VideoService.urlLastVideos()); }

  public getYoutubeList(YTlist: string): Observable<any> { return this.http.get(VideoService.urlYoutubeList(YTlist)); }

  //public getHotLapVideos(): Observable<any> { return this.http.get(VideoService.urlYoutubeList()); }

}
