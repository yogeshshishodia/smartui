import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogwelComponent } from './logwel.component';

describe('LogwelComponent', () => {
  let component: LogwelComponent;
  let fixture: ComponentFixture<LogwelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogwelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogwelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
