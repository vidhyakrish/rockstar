import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { TrackService } from './track.service';
import { Track } from './track.model';
import { Response } from '@angular/http';

/**
 * A simple component, which fetches all tracks from HTTP API and displays them.
 */
@Component({
    selector: 'da-track-list',
    templateUrl: './track-list.html',
    styleUrls: ['./track-list.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [TrackService]
})
export class TrackListComponent implements OnInit, OnDestroy {
    private tracks: Track[];
    private error: Response;
    private isLoading: boolean = true;

    constructor(private trackService: TrackService) {}

    ngOnInit(): void {
        this.trackService.getAll().subscribe(
            (data)  => this.tracks = data,
            (error) => this.error = error,
            ()      => this.isLoading = false
        );
    }

    ngOnDestroy(): void {}
}
