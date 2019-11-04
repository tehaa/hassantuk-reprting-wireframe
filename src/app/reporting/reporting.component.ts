import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


interface Country {
 tagNumber: String;
  macAddress: string;
  commandType: string;
  User: string;
  timeStampSent:string;
  status:string;
  timeStampRecives:string;
}

const COUNTRIES: Country[] = [
  {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',
    timeStampRecives:'25/8/2019'
  },
  {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',
    timeStampRecives:'25/8/2019'
  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',  
      timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',    timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',    timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',    timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',    timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  }, {
    tagNumber: 'AJM-1111-1-123456',
    macAddress: '8523698',
    commandType: 'reboot',
    User: 'test',
    timeStampSent:'25/8/2019',
    status:'success',     timeStampRecives:'25/8/2019'

  },
];
@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  modelFrom: NgbDateStruct;
  modelTo: NgbDateStruct;

  today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) {}


  ngOnInit() {
  }
  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;

  get countries(): Country[] {
    return COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
