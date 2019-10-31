import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandResultComponent } from './command-result.component';

describe('CommandResultComponent', () => {
  let component: CommandResultComponent;
  let fixture: ComponentFixture<CommandResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
