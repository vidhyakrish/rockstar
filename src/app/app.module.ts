import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { TrackComponent } from './track/track.component';
import { TrackListComponent } from './track/track-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        TrackListComponent,
        TrackComponent
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {}
