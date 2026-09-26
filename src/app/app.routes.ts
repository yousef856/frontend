import { Routes } from '@angular/router';
import { Products } from './components/pages/products/products';
import { Home } from './components/pages/home/home';
import { Projects } from './components/pages/projects/projects';
import { Donations } from './components/pages/donations/donations';
import { Reports } from './components/pages/reports/reports';
import { HumanResources } from './components/pages/human-resources/human-resources';
import { Inventory } from './components/pages/inventory/inventory';
import { Finance } from './components/pages/finance/finance';
import { Settings } from './components/pages/settings/settings';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'beneficiaries', component: Products },
  { path: 'projects', component: Projects },
  { path: 'donations', component: Donations },
  { path: 'reports', component: Reports },
  { path: 'human-resources', component: HumanResources },
  { path: 'inventory', component: Inventory },
  { path: 'finance', component: Finance },
  { path: 'settings', component: Settings },
  { path: '**', redirectTo: 'home' },
];