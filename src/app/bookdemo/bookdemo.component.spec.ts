import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdemoComponent } from './bookdemo.component';

describe('BookdemoComponent', () => {
  let component: BookdemoComponent;
  let fixture: ComponentFixture<BookdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
