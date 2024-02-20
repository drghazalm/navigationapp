import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1pageComponent } from './feature1page.component';

describe('Feature1pageComponent', () => {
  let component: Feature1pageComponent;
  let fixture: ComponentFixture<Feature1pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature1pageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Feature1pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
