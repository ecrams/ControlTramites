import { Component, OnInit } from '@angular/core';

import { ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';




@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.scss']
})
export class RevisionComponent implements OnInit {



  displayedColumns: string[] = ['nro', 'nroTramite', 'nroInmueble', 'tramite','fechaInicio','etapaTramite','observaciones'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<TramitePendiente>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor() {
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}



export interface Food {
  value: string;
  viewValue: string;
}


export interface TramitePendiente {
  nro: string;
  //nroTramite: number;
  //weight: number;
  nroTramite: string;
  nroInmueble : string;
  tramite: string;
  fechaInicio: string;
  etapaTramite : string;
  observaciones: string;

}

const ELEMENT_DATA: TramitePendiente[] = [
  {nro: '1', nroTramite: '123456', nroInmueble: '1245',tramite: 'ANULACION DE ACCESORIOS LAM',fechaInicio: '25/09/2018 07:39:27 a.m.',etapaTramite:'ACTIVO',observaciones:'ninguna'},
  {nro: '2', nroTramite: '123464', nroInmueble: '11154',tramite: 'ANULACION DE ACCESORIOS LAM',fechaInicio: '25/09/2018 07:39:27 a.m.',etapaTramite:'ACTIVO',observaciones:'ninguna'},
  {nro: '3', nroTramite: '123358', nroInmueble: '10325',tramite: 'ANULACION DE ACCESORIOS LAM',fechaInicio: '25/09/2018 07:39:27 a.m.',etapaTramite:'ACTIVO',observaciones:'ninguna'},
  {nro: '4', nroTramite: '123499', nroInmueble: '16987',tramite: 'ANULACION DE ACCESORIOS LAM',fechaInicio: '25/09/2018 07:39:27 a.m.',etapaTramite:'ACTIVO',observaciones:'ninguna'},
  {nro: '5', nroTramite: '123488', nroInmueble: '3698',tramite: 'ANULACION DE ACCESORIOS LAM',fechaInicio: '25/09/2018 07:39:27 a.m.',etapaTramite:'ACTIVO',observaciones:'ninguna'},
  {nro: '6', nroTramite: '123445', nroInmueble: '4587',tramite: 'ANULACION DE ACCESORIOS LAM',fechaInicio: '25/09/2018 07:39:27 a.m.',etapaTramite:'ACTIVO',observaciones:'ninguna'},
  {nro: '7', nroTramite: '123448', nroInmueble: '100112',tramite: 'ANULACION DE ACCESORIOS LAM',fechaInicio: '25/09/2018 07:39:27 a.m.',etapaTramite:'ACTIVO',observaciones:'ninguna'},
  {nro: '8', nroTramite: '123447', nroInmueble: '101547',tramite: 'ANULACION DE ACCESORIOS LAM',fechaInicio: '25/09/2018 07:39:27 a.m.',etapaTramite:'ACTIVO',observaciones:'ninguna'},
  {nro: '9', nroTramite: '123499', nroInmueble: '101472',tramite: 'ANULACION DE ACCESORIOS LAM',fechaInicio: '25/09/2018 07:39:27 a.m.',etapaTramite:'ACTIVO',observaciones:'ninguna'},
  {nro: '10', nroTramite: '123900', nroInmueble: '22548',tramite: 'ANULACION DE ACCESORIOS LAM',fechaInicio: '25/09/2018 07:39:27 a.m.',etapaTramite:'ACTIVO',observaciones:'ninguna'},
 
];

