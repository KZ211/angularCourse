import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3ComponentComponent } from './task3-component.component';

describe('Task3ComponentComponent', () => {
  let component: Task3ComponentComponent;
  let fixture: ComponentFixture<Task3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Task3ComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Task3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
