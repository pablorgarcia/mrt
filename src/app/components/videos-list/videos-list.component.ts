import { Component, OnInit, Input } from '@angular/core';
import { VideoModel } from '../../models/VideoModel';
import { VideoService } from '../../services/video.service';


@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {

  @Input() public lastVideos: boolean = false;
  public lastVideoData: any | undefined;

  @Input() public hotLapVideos: boolean = false;
  public hotLapVideoData: any | undefined;


  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    console.log('hey false? ', this.lastVideos)

    if (this.lastVideos) {
      this.videoService.getLastVideos().subscribe((res: any) => {
        this.lastVideoData = res.items;
        console.log('items', this.lastVideoData)
      });
    }

    if (this.hotLapVideos) {
      console.log('cargamos los videos de HOTLAPs')
    }

  }

}
