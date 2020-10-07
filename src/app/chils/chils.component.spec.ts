import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilsComponent } from './chils.component';

describe('ChilsComponent', () => {
  let component: ChilsComponent;
  let fixture: ComponentFixture<ChilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
