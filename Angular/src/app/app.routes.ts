import { Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ListRender } from './components/list-render/list-render';
import { TwoWayDtBinding } from './components/two-way-dt-binding/two-way-dt-binding';

export const routes: Routes = [
    {path: '', component: FirstComponent,},
    {path: 'list', component: ListRender },
    {path: 'twdb', component: TwoWayDtBinding }
];
