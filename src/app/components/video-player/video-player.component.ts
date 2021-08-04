import { Component, OnInit, OnDestroy } from '@angular/core';

import { PlayerService } from '../../services/player.service';
import { PlayerModel } from '../../models/playerModel'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, OnDestroy {

  public playerIsActive: boolean = false;
  public videoData: PlayerModel = { videoTitle: 'no-data', videoSrc: 'no-data' };

  public playerIsActive$: Subscription;
  public videoData$: Subscription;


  constructor(public playerService: PlayerService) {
    this.playerIsActive$ = new Subscription();
    this.videoData$ = new Subscription();
  }

  ngOnInit(): void {
    // ESCUCHAMOS el si el PLAYER está ABIERTO o CERRADO
    this.playerIsActive$ = this.playerService.getPlayerState$().subscribe(playerState => {
      this.playerIsActive = playerState;
    });

    // ESCUCHAMOS si el TITULO y la SRC del video cambian
    this.videoData$ = this.playerService.getCurrentVideoData$().subscribe(videoData => {
      this.videoData = videoData;
      console.log('HEY', this.videoData)
    });

  }

  closeVideoPlayer() {
    this.playerService.setPlayerState(false);
    this.playerService.setVideoData('DATA-DELETED', 'DATA-DELETED');
    this.ngOnDestroy();
  }



  ngOnDestroy() {
    this.playerIsActive$.unsubscribe();
    this.videoData$.unsubscribe();
  }

}
