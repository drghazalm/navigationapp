import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LocalpersistenceComponent } from './localpersistence/localpersistence.component';
import { RestapiComponent } from './restapi/restapi.component';
import { CalculationComponent } from './calculation/calculation.component';

export const routes: Routes = [
    {path:'', component:MainpageComponent},
    {path:'mainpage', component:MainpageComponent},
    {path:'localpersistence', component:LocalpersistenceComponent},
    {path:'restapi', component:RestapiComponent},
    {path:'calculation', component:CalculationComponent}
];
