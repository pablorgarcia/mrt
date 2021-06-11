import { Injectable } from '@angular/core';
import { DRIVERS } from './constant/drivers.constant';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor() {
    console.log('constructor DRIVER SERVICE')
  }

  public static getDrivers(): any {
    console.log('getDrivers() DRIVER SERVICE')
    return DRIVERS;
  }
}
