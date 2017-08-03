import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';


import { TrackService } from './track.service';
import { Track } from './track.model';
import { Response } from '@angular/http';


@Component({
    selector: 'da-article',
    templateUrl: './track.html',
    styleUrls: ['./track.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [TrackService]
})
export class TrackComponent implements OnInit, OnDestroy {
    private track: Track;
    private error: Response;
    private isLoading: boolean = true;
    private releasedTrack: string = moment("2013-03-10T02:00:00Z").format('DD-MM-YYYY');
    private duration: string = moment(345678).format("m:ss");


    constructor(
        private route: ActivatedRoute,
        private trackService: TrackService
        ) {

    }


    ngOnInit(): void {
        let TrackId = this.route.snapshot.params['trackId'];

        this.trackService.getAll().subscribe(
            (data)  => this.track = data[TrackId],
            (error) => this.error = error,
            ()      => this.isLoading = false
            );

    }


    ngOnDestroy(): void {}
}
