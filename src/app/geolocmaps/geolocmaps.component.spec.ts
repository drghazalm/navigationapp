import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocmapsComponent } from './geolocmaps.component';

describe('GeolocmapsComponent', () => {
  let component: GeolocmapsComponent;
  let fixture: ComponentFixture<GeolocmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeolocmapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeolocmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
