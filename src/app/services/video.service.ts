import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  // https://developers.google.com/youtube/v3
  // https://developers.google.com/youtube/v3/docs/search/list?hl=es#javascript

  constructor(private http: HttpClient) {}

  private static urlLastVideos(): string {
    return `https://www.googleapis.com/youtube/v3/search?key=${environment.YOUTUBE_CONF.API_KEY}&channelId=${environment.YOUTUBE_CONF.CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;
  }

  private static urlYoutubeList(listName: string): string {
    // QUÉ LISTAS SALEN AQUÍ ???
    return `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${listName}&key=${environment.YOUTUBE_CONF.API_KEY}`;
  }

  public getLastVideos(): Observable<any> {
    return this.http.get(VideoService.urlLastVideos());
  }

  public getYoutubeList(YTlist: string): Observable<any> {
    // return this.http.get(VideoService.urlYoutubeList(YTlist));
    return new Observable((subs) => {
      subs.next({
        items: [
          {
            kind: 'youtube#playlistItem',
            etag: 'cYUAqhXrlvSGmPR2RfW3ezK3uFs',
            id: 'UExUN2dVcG1ZaUNsNnhoNFJSSGpaR2V6RV9PNFN4WDhCNy5EQUE1NTFDRjcwMDg0NEMz',
            snippet: {
              publishedAt: '2021-06-02T12:39:32Z',
              channelId: 'UCAnEUW12DYwZ8kgET9HXDKw',
              title: 'Hot lap Pinto Karting 56,591',
              description:
                'Karting Pinto, Madrid [17/04/21] [Hot lap] [onboard] [Pinto Karting]\nHotlap: 56,591\n\nIntro: 0:00\nHotlap: 0:18\nEnding: 01:19\n\nPablo García, racing driver of MRT Mancos Racing Team\nKart: Dino\nCamera: GoPro Session [1080p] [60fps]\n\nI started in the karting world in September 2017. I am uploading these videos to analyse and correct my mistakes. If we have driven together will be a pleasure to hear your feedback :)',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/t61C56vTAnY/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/t61C56vTAnY/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/t61C56vTAnY/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: 'https://i.ytimg.com/vi/t61C56vTAnY/sddefault.jpg',
                  width: 640,
                  height: 480,
                },
              },
              channelTitle: 'Pablo García',
              playlistId: 'PLT7gUpmYiCl6xh4RRHjZGezE_O4SxX8B7',
              position: 0,
              resourceId: { kind: 'youtube#video', videoId: 't61C56vTAnY' },
              videoOwnerChannelTitle: 'Pablo García',
              videoOwnerChannelId: 'UCAnEUW12DYwZ8kgET9HXDKw',
            },
          },
          {
            kind: 'youtube#playlistItem',
            etag: 'WbA9t7w67Duln5Yu4KQNzDTNL2w',
            id: 'UExUN2dVcG1ZaUNsNnhoNFJSSGpaR2V6RV9PNFN4WDhCNy41Mzk2QTAxMTkzNDk4MDhF',
            snippet: {
              publishedAt: '2021-05-05T23:01:08Z',
              channelId: 'UCAnEUW12DYwZ8kgET9HXDKw',
              title: 'Hot lap Pinto Karting 56,920',
              description:
                'Karting Pinto, Madrid [17/04/21] [Hot lap] [onboard] [Pinto Karting]\nHotlap: 56,920\n\nIntro: 0:00\nHotlap: 0:18\nEnding: 01:34\n\nPablo García, racing driver of MRT Mancos Racing Team\nKart: Dino\nCamera: GoPro Session [1080p] [60fps]\n\nI started in the karting world in September 2017. I am uploading these videos to analyse and correct my mistakes. If we have driven together will be a pleasure to hear your feedback :)',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/yTaDXUdq4AU/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/yTaDXUdq4AU/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/yTaDXUdq4AU/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: 'https://i.ytimg.com/vi/yTaDXUdq4AU/sddefault.jpg',
                  width: 640,
                  height: 480,
                },
              },
              channelTitle: 'Pablo García',
              playlistId: 'PLT7gUpmYiCl6xh4RRHjZGezE_O4SxX8B7',
              position: 1,
              resourceId: { kind: 'youtube#video', videoId: 'yTaDXUdq4AU' },
              videoOwnerChannelTitle: 'Pablo García',
              videoOwnerChannelId: 'UCAnEUW12DYwZ8kgET9HXDKw',
            },
          },
          {
            kind: 'youtube#playlistItem',
            etag: 'KTu7-UBm86EfTCiKC13A7D31gZ4',
            id: 'UExUN2dVcG1ZaUNsNnhoNFJSSGpaR2V6RV9PNFN4WDhCNy4zMDg5MkQ5MEVDMEM1NTg2',
            snippet: {
              publishedAt: '2020-09-19T11:29:57Z',
              channelId: 'UCAnEUW12DYwZ8kgET9HXDKw',
              title: 'Hot lap Henakart Karting 36,607',
              description:
                'Karting Henakart, Madrid [16/09/20] [Hot lap] [onboard] [Circuito Henakart]\nHotlap: 36,607\n\nIntro: 0:00\nHot lap: 0:18\nEnding: 1:02\n\nPablo García, racing driver of MRT Mancos Racing Team\nKart: Sodi GT5-GX 390. 15 hp, 390 cc, max speed 90 km/h\nCamera: GoPro Session [1080p] [60fps]\n\nI started in the karting world in September 2017. I am uploading these videos to analyse and correct my mistakes. If we have driven together will be a pleasure to hear your feedback :)',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/YuFveQmm1VA/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/YuFveQmm1VA/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/YuFveQmm1VA/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: 'https://i.ytimg.com/vi/YuFveQmm1VA/sddefault.jpg',
                  width: 640,
                  height: 480,
                },
              },
              channelTitle: 'Pablo García',
              playlistId: 'PLT7gUpmYiCl6xh4RRHjZGezE_O4SxX8B7',
              position: 2,
              resourceId: { kind: 'youtube#video', videoId: 'YuFveQmm1VA' },
              videoOwnerChannelTitle: 'Pablo García',
              videoOwnerChannelId: 'UCAnEUW12DYwZ8kgET9HXDKw',
            },
          },
          {
            kind: 'youtube#playlistItem',
            etag: 'YEVf3udiX585_Fii4LTK5jr5eDM',
            id: 'UExUN2dVcG1ZaUNsNnhoNFJSSGpaR2V6RV9PNFN4WDhCNy45ODRDNTg0QjA4NkFBNkQy',
            snippet: {
              publishedAt: '2020-08-27T15:34:55Z',
              channelId: 'UCAnEUW12DYwZ8kgET9HXDKw',
              title: 'Hot lap Henakart Karting 36,788',
              description:
                'First time in Karting Henakart, Madrid [22/08/20] [Hot lap] [onboard] [Circuito Henakart]\nHot lap: 36,788 \n\nIntro: 0:00\nHot lap: 0:18\nEnding: 1:02\n\nPablo García, racing driver of MRT Mancos Racing Team\nKart: Sodi GT5-GX 390. 15 hp, 390 cc, max speed 90 km/h\nCamera: GoPro Session [1080p] [60fps]\n\nI started in the karting world in September 2017. I am uploading these videos to analyse and correct my mistakes. If we have driven together will be a pleasure to hear your feedback :)',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/JDULxa6gFo4/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/JDULxa6gFo4/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/JDULxa6gFo4/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: 'https://i.ytimg.com/vi/JDULxa6gFo4/sddefault.jpg',
                  width: 640,
                  height: 480,
                },
              },
              channelTitle: 'Pablo García',
              playlistId: 'PLT7gUpmYiCl6xh4RRHjZGezE_O4SxX8B7',
              position: 3,
              resourceId: { kind: 'youtube#video', videoId: 'JDULxa6gFo4' },
              videoOwnerChannelTitle: 'Pablo García',
              videoOwnerChannelId: 'UCAnEUW12DYwZ8kgET9HXDKw',
            },
          },
          {
            kind: 'youtube#playlistItem',
            etag: 'Ubcedb1wLPwpmyO_BM9d-ZIdqos',
            id: 'UExUN2dVcG1ZaUNsNnhoNFJSSGpaR2V6RV9PNFN4WDhCNy40NzZCMERDMjVEN0RFRThB',
            snippet: {
              publishedAt: '2020-08-21T18:35:51Z',
              channelId: 'UCAnEUW12DYwZ8kgET9HXDKw',
              title: 'Hot lap Karting Mahón Menorca 25,090',
              description:
                'First time in Karting Mahon, Menorca, Balearic Islands [17/08/20] [Hot lap] [Onboard]\n\nIntro: 0:00\nHot lap: 0:18\nEnding: 00:56\n\nHot lap: 25 , 090 \n\nPablo García, racing driver of MRT Mancos Racing Team\nKart: Sodi RT8 390. 15 hp, 390 cc, max speed 90 km/h\nCamera: GoPro Session [1080p] [60fps]\n\nI started in the karting world in September 2017. I am uploading these videos to analyse and correct my mistakes. If we have driven together will be a pleasure to hear your feedback :)',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/PyY7nUG0PEo/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/PyY7nUG0PEo/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/PyY7nUG0PEo/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: 'https://i.ytimg.com/vi/PyY7nUG0PEo/sddefault.jpg',
                  width: 640,
                  height: 480,
                },
              },
              channelTitle: 'Pablo García',
              playlistId: 'PLT7gUpmYiCl6xh4RRHjZGezE_O4SxX8B7',
              position: 4,
              resourceId: { kind: 'youtube#video', videoId: 'PyY7nUG0PEo' },
              videoOwnerChannelTitle: 'Pablo García',
              videoOwnerChannelId: 'UCAnEUW12DYwZ8kgET9HXDKw',
            },
          },
        ],
      });
    });
  }

  //public getHotLapVideos(): Observable<any> { return this.http.get(VideoService.urlYoutubeList()); }
}
