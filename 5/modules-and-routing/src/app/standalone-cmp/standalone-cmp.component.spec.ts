import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneCmpComponent } from './standalone-cmp.component';

describe('StandaloneCmpComponent', () => {
  let component: StandaloneCmpComponent;
  let fixture: ComponentFixture<StandaloneCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
