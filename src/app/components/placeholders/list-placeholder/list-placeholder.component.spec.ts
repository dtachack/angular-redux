import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlaceholderComponent } from './list-placeholder.component';

describe('ListPlaceholderComponent', () => {
  let component: ListPlaceholderComponent;
  let fixture: ComponentFixture<ListPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
