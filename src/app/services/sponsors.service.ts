import { Injectable } from '@angular/core';
import { SPONSORS } from './constant/sponsors.constant';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  public static getSponsors(): any { return SPONSORS; }

}
