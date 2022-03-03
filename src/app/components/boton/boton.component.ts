import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  public celda1 = true;
  public celda2 = true;
  public celda3 = true;
  public celda4 = true;
  public celda5 = true;
  public celda6 = true;
  public celda7 = true;
  public celda8 = true;
  public celda9 = true;
  public celdaPush: string;

  constructor() {
    this.celdaPush = '';
  }

  ngOnInit(): void {
  }

  goCelda1(): void {
    this.celda1 = false;
    this.celdaPush = 'celda1';
  }
  goCelda2(): void {
    this.celda2 = false;
    this.celdaPush = 'celda2';
  }
  goCelda3(): void {
    this.celda3 = false;
    this.celdaPush = 'celda3';
  }
  goCelda4(): void {
    this.celda4 = false;
    this.celdaPush = 'celda4';
  }
  goCelda5(): void {
    this.celda5 = false;
    this.celdaPush = 'celda5';
  }
  goCelda6(): void {
    this.celda6 = false;
    this.celdaPush = 'celda6';
  }
  goCelda7(): void {
    this.celda7 = false;
    this.celdaPush = 'celda7';
  }
  goCelda8(): void {
    this.celda8 = false;
    this.celdaPush = 'celda8';
  }
  goCelda9(): void {
    this.celda9 = false;
    this.celdaPush = 'celda9';
  }

}
