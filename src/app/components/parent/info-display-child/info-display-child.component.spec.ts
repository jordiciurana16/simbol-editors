import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDisplayChildComponent } from './info-display-child.component';

describe('InfoDisplayChildComponent', () => {
  let component: InfoDisplayChildComponent;
  let fixture: ComponentFixture<InfoDisplayChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDisplayChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDisplayChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
