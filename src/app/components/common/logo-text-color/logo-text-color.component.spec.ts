import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTextColorComponent } from './logo-text-color.component';

describe('LogoTextColorComponent', () => {
  let component: LogoTextColorComponent;
  let fixture: ComponentFixture<LogoTextColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoTextColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoTextColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
