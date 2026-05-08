import { Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ListRender } from './components/list-render/list-render';
import { TwoWayDtBinding } from './components/two-way-dt-binding/two-way-dt-binding';
import { ChangeNumber } from './components/change-number/change-number';
import { Directives } from './components/directives/directives';
import { Emitter } from './components/emitter/emitter';
import { Events } from './components/events/events';
import { Home } from './components/home/home';
import { IfCondicionalCpt } from './components/if-condicional-cpt/if-condicional-cpt';
import { ItemDatails } from './components/item-datails/item-datails';
import { ParentData } from './components/parent-data/parent-data';
import { Pipes } from './components/pipes/pipes';

export const routes: Routes = [
    {path: '', component: FirstComponent,},
    {path: 'list', component: ListRender },
    {path: 'twdb', component: TwoWayDtBinding },
    { path: 'change-number', component: ChangeNumber },
    { path: 'directives', component: Directives },
    { path: 'emitter', component: Emitter },
    { path: 'events', component: Events },
    { path: 'home', component: Home },
    { path: 'if-condicional', component: IfCondicionalCpt },
    { path: 'item-details', component: ItemDatails }, // Corrigido o path, mantido o nome da pasta
    { path: 'parent-data', component: ParentData },
    { path: 'pipes', component: Pipes }
];
