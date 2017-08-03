import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackComponent } from './track/track.component';
import { TrackListComponent } from './track/track-list.component';

const appRoutes: Routes = [
    { path: 'track/:trackId', component: TrackComponent },
    { path: '', component: TrackListComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
