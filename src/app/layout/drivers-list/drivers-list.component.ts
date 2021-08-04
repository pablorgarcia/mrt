import { Component, OnInit } from '@angular/core';

import { DriversService } from '../../services/drivers.service';
import { DriverModel } from '../../models/driverModel';


@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {

  driversData: any;

  constructor() {}

  ngOnInit(): void {
    // Cogemos los datos de los pilotos con el Servicio y los guardamos en la Clase
    this.driversData = DriversService.getDrivers().sort(function(a: DriverModel, b: DriverModel) {
      if (a.lastName > b.lastName) { return 1; }
      if (a.lastName < b.lastName) { return -1; }
      return 0; // a must be equal to b
    });
  }

}
