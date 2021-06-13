export class VideoModel {
  public kind: string;
  public etag: string;
  public nextPageToken: string;
  public regionCode: string;

  public pageInfo: object; // ???

  public totalResults: number;
  public resultsPerPage: number;
  
  public items: array; // ???

  constructor(
    kind: string,
    etag: string,
    nextPageToken: string,
    regionCode: string,
  ) {
    this.kind = kind;
    this.etag = etag;
    this.nextPageToken = nextPageToken;
    this.regionCode = regionCode;
  }

}

/*
{
  kind: string,
    etag: string,
      nextPageToken: string,
        regionCode: string,
          pageInfo: {
    totalResults: number,
      resultsPerPage: number
  },
  items: [
    {
      kind: string,
      etag: string,
      id: {
        kind: string,
        videoId: string
      },
      snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
          default: {
            url: string,
            width: number,
            height: number
          },
          medium: {
            url: string,
            width: number,
            height: number
          },
          high: {
            url: string,
            width: number,
            height: number
          }
        },
        channelTitle: string,
        liveBroadcastContent: string,
        publishTime: string
      }
    }

  ]
}
*/
