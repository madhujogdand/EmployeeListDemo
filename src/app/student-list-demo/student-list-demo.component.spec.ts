import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListDemoComponent } from './student-list-demo.component';

describe('StudentListDemoComponent', () => {
  let component: StudentListDemoComponent;
  let fixture: ComponentFixture<StudentListDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
