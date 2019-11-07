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

  devices = DEVICES;
  vendors: string[] = ['ROMTECH'];
  commands: string[] = ['Retrieve Device Information', 'Device Communication',
    'Device Restart request', 'Point Report', 'Point Flags', 'Write Flag'];
  selectedVendor = 'Vendor';
  selectedCommand = 'Command';

  constructor() { }

  ngOnInit() {
  }
  selectVendor(selectedVendor: string) {
    this.selectedVendor = selectedVendor;
    console.log('selected vendor ....... ' + this.selectedVendor);
  }

  selectCommand(selectedCommand: string) {
    this.selectedCommand = selectedCommand;
    console.log('selected command ....... ' + this.selectedCommand);

  }
}
