import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { VideoModel } from '../../models/VideoModel';
import { VideoService } from '../../services/video.service';
import { PlayerService } from '../../services/player.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit, OnDestroy {

  @Input() public lastVideos: boolean = false;
  @Input() public hotLapVideos: boolean = false;

  public lastVideoData: any | undefined;
  public hotLapVideoData: any | undefined;

  public lastVideoData$: Subscription;
  public hotLapVideoData$: Subscription;


  constructor(
    private videoService: VideoService,
    private playerService: PlayerService) {
      this.lastVideoData$ = new Subscription();
      this.hotLapVideoData$ = new Subscription();
    }

  ngOnInit(): void {

    // COGEMOS los ULTIMOS videos
    if (this.lastVideos) {
      this.lastVideoData$ = this.videoService.getLastVideos().subscribe(
        (res: any) => {
          this.lastVideoData = res.items;
        },
        (error: any) => {
          this.lastVideos = false;
          console.log('ERROR AL TRAER LOS ÚLTIMOS VIDEOS DESDE YOUTUBE', error);
        });
    }

    // COGEMOS los videos HOTLAPs
    if (this.hotLapVideos) {
      this.hotLapVideoData$ = this.videoService.getYoutubeList('PLT7gUpmYiCl6xh4RRHjZGezE_O4SxX8B7').subscribe(
        (res: any) => {
          this.hotLapVideoData = res.items;
          console.log('VIDEO LIST?????', this.hotLapVideoData)
        },
        (error: any) => {
          this.hotLapVideos = false;
          console.log('ERROR AL TRAER LOS VIDEOS HOTLAPS DESDE YOUTUBE', error);
        });
    }

  }

  openVideoPlayer(title: string, src: string) {
    this.playerService.setPlayerState(true);
    this.playerService.setVideoData(title, src);
  }



  ngOnDestroy() {
    this.lastVideoData$.unsubscribe();
    this.hotLapVideoData$.unsubscribe();
  }

}
