import { Injectable } from '@angular/core';
import { SPONSORS } from './constant/sponsors.constant';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor() {}

  public static getSponsors(): any {
    console.log('SPONSORS SERVICE')
    return SPONSORS;
  }
}
