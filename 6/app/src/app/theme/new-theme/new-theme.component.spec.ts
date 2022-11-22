import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThemeComponent } from './new-theme.component';

describe('NewThemeComponent', () => {
  let component: NewThemeComponent;
  let fixture: ComponentFixture<NewThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
