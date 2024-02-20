import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Feature1pageComponent } from './feature1page/feature1page.component';

export const routes: Routes = [
    {path:'', component:MainpageComponent},
    {path:'mainpage', component:MainpageComponent},
    {path:'feature1page', component:Feature1pageComponent}
];
