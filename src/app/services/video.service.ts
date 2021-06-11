import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// PROBANDO
import { YOUTUBE_CONF } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class VideoService {

  constructor(private http: HttpClient) {
    console.log('constructor VIDEO SERVICE')
  }

  private static urlGetVideos(): string {
    console.log('urlGetVideos() VIDEOS SERVICE')
    return `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_CONF.API_KEY}&channelId=${YOUTUBE_CONF.CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;
  }

  public getVideos(): Observable<any> {
    console.log('getVideos() VIDEOS SERVICE')
    return this.http.get(VideoService.urlGetVideos());
  }


}


/* RESULTADO DE LA LLAMADA DE LA API

{
  kind: "youtube#searchListResponse",
    etag: "ygVeVuJt6a7fCdwuWWPrLfTF4I4",
      nextPageToken: "CAUQAA",
        regionCode: "ES",
          pageInfo: {
    totalResults: 101,
      resultsPerPage: 5
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "DQrIq_1i2ggRpditk56sJ8OxGzU",
      id: {
        kind: "youtube#video",
        videoId: "t61C56vTAnY"
      },
      snippet: {
        publishedAt: "2021-06-06T07:00:12Z",
        channelId: "UCAnEUW12DYwZ8kgET9HXDKw",
        title: "Hot lap Pinto Karting 56,591",
        description: "Karting Pinto, Madrid [17/04/21] [Hot lap] [onboard] [Pinto Karting] Hotlap: 56591 Intro: 0:00 Hotlap: 0:18 Ending: 01:19 Pablo García, racing driver of MRT ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/t61C56vTAnY/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/t61C56vTAnY/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/t61C56vTAnY/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "Pablo García",
        liveBroadcastContent: "none",
        publishTime: "2021-06-06T07:00:12Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "aXajHu3eKhAJddvQwzJpRf14KlU",
      id: {
        kind: "youtube#video",
        videoId: "u9e6b-1NXME"
      },
      snippet: {
        publishedAt: "2021-06-05T07:00:12Z",
        channelId: "UCAnEUW12DYwZ8kgET9HXDKw",
        title: "GP3 Endurance Pinto Karting with Dino kart [Karting race]",
        description: "GP3 1h Dinos championship Karting Pinto: 80kg [29/05/21] [onboard] [Karting race] Hot lap: 56591 - Karting Pinto Intro: 0:00 Race: 0:16 Ending: 57:42 Pablo ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/u9e6b-1NXME/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/u9e6b-1NXME/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/u9e6b-1NXME/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "Pablo García",
        liveBroadcastContent: "none",
        publishTime: "2021-06-05T07:00:12Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "_l3rh_eCCb8xKPxDwyWoSuoGiow",
      id: {
        kind: "youtube#video",
        videoId: "SR_VhcoYjQ0"
      },
      snippet: {
        publishedAt: "2021-05-09T07:00:07Z",
        channelId: "UCAnEUW12DYwZ8kgET9HXDKw",
        title: "GP2 Endurance Pinto Karting with Dino kart [Karting race]",
        description: "GP2 1h Dinos championship Karting Pinto: 90kg [17/04/21] [onboard] [Karting race] Hotlap: 56920 - Karting Pinto Intro: 0:00 Race: 0:16 Ending: 56:20 Pablo ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/SR_VhcoYjQ0/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/SR_VhcoYjQ0/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/SR_VhcoYjQ0/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "Pablo García",
        liveBroadcastContent: "none",
        publishTime: "2021-05-09T07:00:07Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "UI8YwEOvEzjV74e-blkR-AYYOY0",
      id: {
        kind: "youtube#video",
        videoId: "yTaDXUdq4AU"
      },
      snippet: {
        publishedAt: "2021-05-08T07:00:15Z",
        channelId: "UCAnEUW12DYwZ8kgET9HXDKw",
        title: "Hot lap Pinto Karting 56,920",
        description: "Karting Pinto, Madrid [17/04/21] [Hot lap] [onboard] [Pinto Karting] Hotlap: 56920 Intro: 0:00 Hotlap: 0:18 Ending: 01:34 Pablo García, racing driver of MRT ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/yTaDXUdq4AU/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/yTaDXUdq4AU/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/yTaDXUdq4AU/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "Pablo García",
        liveBroadcastContent: "none",
        publishTime: "2021-05-08T07:00:15Z"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "ryGdY0G-WvBSsl97lyWvE3W3z9Q",
      id: {
        kind: "youtube#video",
        videoId: "m-4CcKKMaA8"
      },
      snippet: {
        publishedAt: "2020-12-20T08:30:06Z",
        channelId: "UCAnEUW12DYwZ8kgET9HXDKw",
        title: "Karting DR7 [Track day]",
        description: "First time in the Circuito DR7, Tarancon, Cuenca, Spain [Track day] [26/06/19] [onboard] Circuito Daniel Rivas 7 Intro: 0:00 Track day: 0:18 Ending: 04:47 Pablo ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/m-4CcKKMaA8/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/m-4CcKKMaA8/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/m-4CcKKMaA8/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "Pablo García",
        liveBroadcastContent: "none",
        publishTime: "2020-12-20T08:30:06Z"
      }
    }
  ]
}
*/
