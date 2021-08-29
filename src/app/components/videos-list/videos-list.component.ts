import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit, OnDestroy {

  @Input() public videoList: any[] = [];
  @Input() public totalItems: number | undefined = 0;

  @Output() public loadMore = new EventEmitter<boolean>();

  public lastVideoData: any | undefined;
  public hotLapVideoData: any | undefined;

  public lastVideoData$: Subscription;
  public hotLapVideoData$: Subscription;

  private counter = 0;

  constructor(
    private playerService: PlayerService) {
      this.lastVideoData$ = new Subscription();
      this.hotLapVideoData$ = new Subscription();
    }

  ngOnInit(): void { }

  openVideoPlayer(title: string, src: string) {
    this.playerService.setPlayerState(true);
    this.playerService.setVideoData(title, src);
  }



  ngOnDestroy() {
    this.lastVideoData$.unsubscribe();
    this.hotLapVideoData$.unsubscribe();
  }

  nextImg(){
    this.counter++;
    if((this.totalItems || 0) < this.counter) {
      this.loadMore.emit(true);
    }
  }

}
