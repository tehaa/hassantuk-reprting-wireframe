import { Component, OnInit } from '@angular/core';

interface Response {
  macAdress: string;
  tagNumber: string;
  pointType: string;
  pointNumber: string;
  pointFlag: string;
  state: string;
}

const RESPONSEDATA: Response[] = [
  {
    macAdress: '123456',
    tagNumber: 'AJM-123456-7-8910',
    pointType: 'input',
    pointNumber: '1',
    pointFlag: 'disabled',
    state: 'active',
  },
  {
    macAdress: '123456',
    tagNumber: 'AJM-123456-7-8910',
    pointType: 'status',
    pointNumber: '2',
    pointFlag: 'out-of-service',
    state: 'inactive',
  },
  {
    macAdress: '123456',
    tagNumber: 'AJM-123456-7-8910',
    pointType: 'bms',
    pointNumber: '3',
    pointFlag: 'invert-polarity',
    state: 'inactive',
  },
  {
    macAdress: '123456',
    tagNumber: 'AJM-123456-7-8910',
    pointType: 'input',
    pointNumber: '4',
    pointFlag: 'send-extrainfo',
    state: 'active',
  }
];


@Component({
  selector: 'app-command-details',
  templateUrl: './command-details.component.html',
  styleUrls: ['./command-details.component.css']
})
export class CommandDetailsComponent implements OnInit {

  pointTypes: string[] = ['input', 'status', 'bms'];
  selectedPointType = 'Point Type';

  pointFlags: string[] = ['disabled', 'out-of-service', 'invert-polarity', 'send-extrainfo'];
  selectedPointFlag = 'Point Flag';

  responseData = RESPONSEDATA;
  constructor() { }

  ngOnInit() {
  }

  selectPointType(selectedPointType: string) {
    this.selectedPointType = selectedPointType;
    console.log('selected point type ....... ' + this.selectedPointType);
  }

  selectPointFlag(selectedPointFlag: string) {
    this.selectedPointFlag = selectedPointFlag;
    console.log('selected point flag ....... ' + this.selectedPointFlag);
  }
}
