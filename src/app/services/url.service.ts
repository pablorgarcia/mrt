import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private state: RouterState | undefined;
  private root: ActivatedRoute | undefined;
  public currentUrl: string = '';

  constructor(router: Router) {
    this.state = router.routerState;
    this.root = this.state.root;

    console.log('URL SERVICE - this.state', this.state)
    console.log('URL SERVICE - this.root', this.root)
  }

  public static getCurrentUrl(): any {
    console.log('URL SERVICE')
//    console.log('URL SERVICE - state', this.state)
//    console.log('URL SERVICE - root', this.root)
    return 'hola';
  }

}
