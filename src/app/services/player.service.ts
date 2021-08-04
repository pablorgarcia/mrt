import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import { PlayerModel } from '../models/playerModel'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public playerState: boolean = false;
  public videoData: PlayerModel = { videoTitle: 'no-data', videoSrc: 'no-data' };

  private playerState$: Subject<boolean>;
  private videoData$: Subject<PlayerModel>;


  constructor(private sanitizer: DomSanitizer) {
    this.playerState$ = new Subject();
    this.videoData$ = new Subject();
  }

  public setPlayerState(state: boolean) {
    // El player está abierto o cerrado
    this.playerState = state;
    this.playerState$.next(this.playerState);
  }

  public setVideoData(title: string, src: string) {
    // seteamos el videoData
    this.videoData = { videoTitle: title, videoSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + src) };
    this.videoData$.next(this.videoData);
  }

  public getPlayerState$(): Observable<boolean> {
    // COGEMOS EL ESTADO DE El PLAYER PARA SABER SI ESTÁ ACTIVO
    return this.playerState$.asObservable();
  }

  public getCurrentVideoData$(): Observable<PlayerModel> {
    // COGEMOS los datos del actual video
    return this.videoData$.asObservable();
  }

}
