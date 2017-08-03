import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Track } from './track.model';

const API_ENDPOINT = 'https://itunes.apple.com/search?term=rock&media=music';

/**
 * A simple service which fetches data from HTTP API.
 *
 * TODO: Move API endpoint to app config
 */
@Injectable()
export class TrackService {
    constructor(private http: Http) {

    }

    public get(trackId: number) {
        //TODO: Move get single track here
       // console.log(this.listOfTracks);
    }


    public getAll(): Observable<Track[]> {
        return this.http
            .get(API_ENDPOINT)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        let listOfTracks = body.results;
        console.log(listOfTracks);
        return listOfTracks || { };
    }
}
