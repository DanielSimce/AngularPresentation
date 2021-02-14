import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaListComponent } from './nba-list.component';

describe('NbaListComponent', () => {
  let component: NbaListComponent;
  let fixture: ComponentFixture<NbaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
