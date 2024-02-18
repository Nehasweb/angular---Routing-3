import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechdemoComponent } from './techdemo.component';

describe('TechdemoComponent', () => {
  let component: TechdemoComponent;
  let fixture: ComponentFixture<TechdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
