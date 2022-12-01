import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMessageComponent } from './welcome-message.component';

describe('WelcomeMessageComponent', () => {
  let component: WelcomeMessageComponent;
  let fixture: ComponentFixture<WelcomeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
