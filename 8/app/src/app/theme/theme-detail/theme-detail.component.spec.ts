import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDetailComponent } from './theme-detail.component';

describe('ThemeDetailComponent', () => {
  let component: ThemeDetailComponent;
  let fixture: ComponentFixture<ThemeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
