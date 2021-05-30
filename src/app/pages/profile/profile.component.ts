import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { DriversService } from '../../services/drivers.service';
import { DriverModel } from '../../models/driverModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // PORQUE ESTAS VARIABLES NO SON CONST O LET ???
  public currentDriver: any;
  // public selectedDriver: DriverModel | undefined;

  constructor(
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {

    const drivers: DriverModel = DriversService.getDrivers();
    console.log('obj drivers', drivers)

    // PORQUE NO FUNCIONA ????
    // const a = drivers.find( drivers.urlProfile === 'PabloGarcia')
    // console.log('ddddddddd', a)

    this.route.params.subscribe((params: Params) => {
      console.log('SUBSCRIPCION desde PROFILE', params)

      // PORQUE NO FUNCIONA ???
      //this.currentDriver = drivers.find( driver => { driver.urlProfile === params.id });
    });
  }

}
