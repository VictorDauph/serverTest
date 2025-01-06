import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentComponent } from './test-component.component';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true', () => {
    expect(true).toBeTrue();
  });

  it('should add two numbers', () => {
    const result = component.
      add(2, 3);
    expect(result).toBe(5);
  });
});
