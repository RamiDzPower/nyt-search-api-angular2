import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule}  from '@angular/router';

import { NewYorkTimesComponent } from './components/newyorktimes.component';
import { NewYorkTimesViewPostComponent } from './components/newyorktimesviewpost.component';

const appRoutes: Routes = [
    {
        path: '',
        component: NewYorkTimesComponent
    },
    {
        path: 'nyview/:title',
        component: NewYorkTimesViewPostComponent
    }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
