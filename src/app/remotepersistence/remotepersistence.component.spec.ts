import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotepersistenceComponent } from './remotepersistence.component';

describe('RemotepersistenceComponent', () => {
  let component: RemotepersistenceComponent;
  let fixture: ComponentFixture<RemotepersistenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemotepersistenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemotepersistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
