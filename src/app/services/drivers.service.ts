import { Injectable } from '@angular/core';
import { DRIVERS } from './constant/drivers.constant';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor() {}

  public static getDrivers(): any {
    return DRIVERS;
  }
}