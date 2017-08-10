import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }
//   { path: 'lazy', loadChildren: 'lazy/lazy.module#LazyModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(
	routes,
	{
		useHash: true,
		////enableTracing: true
	});