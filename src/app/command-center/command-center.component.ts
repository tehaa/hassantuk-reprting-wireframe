import { Component, OnInit } from '@angular/core';


interface Device {
  id: string;
  macAdress: string;
  tagNumber: string;
}

const DEVICES: Device[] = [
  {
    id: '10001',
    macAdress: '123456',
    tagNumber: 'AJM-123456-7-8910',
  },
  {
    id: '10001',
    macAdress: '123456',
    tagNumber: 'AJM-123456-7-8910',
  },
  {
    id: '10001',
    macAdress: '123456',
    tagNumber: 'AJM-123456-7-8910',
  },
  {
    id: '10001',
    macAdress: '123456',
    tagNumber: 'AJM-123456-7-8910',
  }
];


@Component({
  selector: 'app-command-center',
  templateUrl: './command-center.component.html',
  styleUrls: ['./command-center.component.css']
})
export class CommandCenterComponent implements OnInit {

  vendor: 'nnnn';
  constructor() { }

  ngOnInit() {
  }
  selectVendor() {
    console.log('select vendor ....... ');
  }
  devices = DEVICES;

}
