import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalpersistenceComponent } from './localpersistence.component';

describe('LocalpersistenceComponent', () => {
  let component: LocalpersistenceComponent;
  let fixture: ComponentFixture<LocalpersistenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalpersistenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalpersistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
