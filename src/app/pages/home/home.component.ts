import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lastVideoData: any[] = [];
  public hotLapVideoData: any[] = [];

  constructor(
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.loadLastVideos();
    this.loadHotLap();
  }

  public loadLastVideos(load?: boolean) {
    this.videoService.getLastVideos().subscribe(
      (res: any) => {
        if(load) {
          this.lastVideoData = [...this.hotLapVideoData, ...res.items];
        } else {
          this.lastVideoData = res.items;
        }
      },
      (error: any) => {
        console.log('ERROR AL TRAER LOS ÚLTIMOS VIDEOS DESDE YOUTUBE', error);
      });
  }

  public loadHotLap(load?: boolean) {
    this.videoService.getYoutubeList().subscribe(
      (res: any) => {
        console.log(res);
        if(load) {
          this.hotLapVideoData = [...this.hotLapVideoData, ...res.hotLapId];
        } else {
          this.hotLapVideoData = res.hotLapId;
        }
      },
      (error: any) => {
        console.log('ERROR AL TRAER LOS VIDEOS HOTLAPS DESDE YOUTUBE', error);
      });
  }

}
