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
     public drawn :number[]=[];
     private trackId: number;

     constructor(private http: Http) {


     }

     public get(trackId: number) {
         this.trackId = trackId;
         return this.http
         .get(API_ENDPOINT)
         .map(this.extractSingleTrack,this);
     }

     private extractSingleTrack(res: Response) {
         let body = res.json();
         let singleTrack = body.results[this.trackId];

         return singleTrack;
     }

     public getRandomTracks(): Observable<Track[]> {
         this.generateRandomNumbers();
         return this.http
         .get(API_ENDPOINT)
         .map(this.extractRandomTracks,this);
     }



     public extractRandomTracks(res: Response) {
         let body = res.json();     
         let randomTrack = [];

         for(var i=0;i<this.drawn.length; i++){
             randomTrack.push(body.results[this.drawn[i]]);
         }

         return randomTrack;
     }


     private generateRandomNumbers(){
         var available = [];
         
         for (var i = 1; i<= 55; i++) {
             available.push(i);
         }

         for (var i = 0; i <3; i++) {
             var random = Math.floor((Math.random() * available.length));
             this.drawn.push(available[random]);
             available.splice(random, 1);
         }

         return this.drawn;
     }

     public getAll(): Observable<Track[]> {
         return this.http
         .get(API_ENDPOINT)
         .map(this.extractData);
     }

     private extractData(res: Response) {
         let body = res.json();
         let listOfTracks = body.results;

         return listOfTracks  ;
     }


 }
