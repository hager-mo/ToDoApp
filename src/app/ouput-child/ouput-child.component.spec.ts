import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuputChildComponent } from './ouput-child.component';

describe('OuputChildComponent', () => {
  let component: OuputChildComponent;
  let fixture: ComponentFixture<OuputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuputChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OuputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
