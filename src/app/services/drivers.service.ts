import { Injectable } from '@angular/core';
import { DRIVERS } from './constant/drivers.constant';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  public static getDrivers(): any {
    return DRIVERS;
    /*return DRIVERS.sort(function (a, b){
      return (b.lastName - a.lastName)
    })*/
  }

}
