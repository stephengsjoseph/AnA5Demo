import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedtableComponent } from './paginatedtable.component';

describe('PaginatedtableComponent', () => {
  let component: PaginatedtableComponent;
  let fixture: ComponentFixture<PaginatedtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatedtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
