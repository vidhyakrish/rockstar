import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';


import { TrackService } from './track.service';
import { Track } from './track.model';
import { Response } from '@angular/http';


@Component({
    selector: 'da-article',
    templateUrl: './track.html',
    styleUrls: ['../styles/track.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [TrackService]
})
export class TrackComponent implements OnInit, OnDestroy {
    private track: Track;
    private randomTracks:Track[];
    private error: Response;
    private isLoading: boolean = true;
    private duration: any;
    private releasedDate : string ;

    constructor(
        private route: ActivatedRoute,
        private trackService: TrackService
        ) {

    }

    public chooseRandomTracks(){

        this.trackService.getRandomTracks().subscribe(
            (data)  => this.randomTracks = data,
            (error) => this.error = error,
            ()      => this.isLoading = false
            );
    }

    public getDuration(){
        return moment(this.track.trackTimeMillis).format("mm:ss");
    }


    public getReleaseDate(){
        return moment(this.track.releaseDate).format("DD-MM-YYYY");
    }

    ngOnInit(): void {
        let TrackId = this.route.snapshot.params['trackId'];

        this.trackService.get(TrackId).subscribe(
            (data)  => this.track = data,
            (error) => this.error = error,
            () => {  this.duration = this.getDuration(),
                this.releasedDate = this.getReleaseDate(),
                this.isLoading =false},
                
                );

        this.chooseRandomTracks();

    }
    ngOnDestroy(): void {}
}
