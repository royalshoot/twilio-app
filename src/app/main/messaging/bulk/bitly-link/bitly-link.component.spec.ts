import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitlyLinkComponent } from './bitly-link.component';

describe('BitlyLinkComponent', () => {
  let component: BitlyLinkComponent;
  let fixture: ComponentFixture<BitlyLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitlyLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitlyLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
