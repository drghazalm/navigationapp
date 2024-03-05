import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LocalpersistenceComponent } from './localpersistence/localpersistence.component';
import { RestapiComponent } from './restapi/restapi.component';
import { CalculationComponent } from './calculation/calculation.component';
import { GeolocmapsComponent } from './geolocmaps/geolocmaps.component';
import { RemotepersistenceComponent } from './remotepersistence/remotepersistence.component';

export const routes: Routes = [
    {path:'', component:MainpageComponent},
    {path:'mainpage', component:MainpageComponent},
    {path:'localpersistence', component:LocalpersistenceComponent},
    {path:'restapi', component:RestapiComponent},
    {path:'remotepersistence', component:RemotepersistenceComponent},
    {path:'calculation', component:CalculationComponent},
    {path:'geolocmaps', component:GeolocmapsComponent},
    
];
