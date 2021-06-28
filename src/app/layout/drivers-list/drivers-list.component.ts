import { Component, OnInit } from '@angular/core';

import { DriversService } from '../../services/drivers.service';


@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {

  driversData: any = [];

  constructor() {}

  ngOnInit(): void {
    // Cogemos los datos de los pilotos con el Servicio y los guardamos en la Clase
    this.driversData = DriversService.getDrivers();
    console.log('DRIVER LIST all data', this.driversData)
    this.driversData = this.driversData.sort();
    console.log('SORT', this.driversData)
  }

}
