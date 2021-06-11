import { Component, OnInit } from '@angular/core';

import { DriversService } from '../../services/drivers.service';

// PROBANDO
import { VideoService } from '../../services/video.service'

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {

  data: any = [];

  // PROBANDO
  json: any = [];

  constructor() {}

  ngOnInit(): void {
    // Cogemos los datos de los pilotos con el Servicio y los guardamos en la Clase
    this.data = DriversService.getDrivers();
    console.log('DRIVER LIST all data', this.data)

    // PROBANDO
    //this.json = VideoService.getVideos();
  }

}
