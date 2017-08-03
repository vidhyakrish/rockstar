import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { Route } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

import { Track } from '../../../src/app/track/track.model';
import { TrackService } from '../../../src/app/track/track.service';
import { TrackComponent } from '../../../src/app/track/track.component';
import { TrackListComponent } from '../../../src/app/track/track-list.component';

const exampleTrackList: Track[] = [
    {
      wrapperType: "track",
      kind: "song",
      artistId: 1883858,
      collectionId: 279812117,
      trackId: 279812225,
      artistName: "Shinedown",
      collectionName: "The Sound of Madness (Deluxe Version)",
      trackName: "Second Chance",
      collectionCensoredName: "The Sound of Madness (Deluxe Version)",
      trackCensoredName: "Second Chance",
      artistViewUrl: "https://itunes.apple.com/us/artist/shinedown/id1883858?uo=4",
      collectionViewUrl: "https://itunes.apple.com/us/album/second-chance/id279812117?i=279812225&uo=4",
      trackViewUrl: "https://itunes.apple.com/us/album/second-chance/id279812117?i=279812225&uo=4",
      previewUrl: "http://a387.phobos.apple.com/us/r30/Music/3c/3c/28/mzm.lnyulxcl.aac.p.m4a",
      artworkUrl30: "http://is1.mzstatic.com/image/thumb/Music/v4/80/81/20/808120a5-3b1c-c97e-773c-da793a521bc5/source/30x30bb.jpg",
      artworkUrl60: "http://is1.mzstatic.com/image/thumb/Music/v4/80/81/20/808120a5-3b1c-c97e-773c-da793a521bc5/source/60x60bb.jpg",
      artworkUrl100: "http://is1.mzstatic.com/image/thumb/Music/v4/80/81/20/808120a5-3b1c-c97e-773c-da793a521bc5/source/100x100bb.jpg",
      collectionPrice: 12.99,
      trackPrice: 1.29,
      releaseDate: "2008-06-23T07:00:00Z",
      collectionExplicitness: "explicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 3,
      trackTimeMillis: 220370,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true
    }
    {
      wrapperType: "track",
      kind: "song",
      artistId: 1883859,
      collectionId: 279812118,
      trackId: 279812226,
      artistName: "Shinedown",
      collectionName: "The Sound of Madness (Deluxe Version)",
      trackName: "Second Chance",
      collectionCensoredName: "The Sound of Madness (Deluxe Version)",
      trackCensoredName: "Second Chance",
      artistViewUrl: "https://itunes.apple.com/us/artist/shinedown/id1883858?uo=4",
      collectionViewUrl: "https://itunes.apple.com/us/album/second-chance/id279812117?i=279812225&uo=4",
      trackViewUrl: "https://itunes.apple.com/us/album/second-chance/id279812117?i=279812225&uo=4",
      previewUrl: "http://a387.phobos.apple.com/us/r30/Music/3c/3c/28/mzm.lnyulxcl.aac.p.m4a",
      artworkUrl30: "http://is1.mzstatic.com/image/thumb/Music/v4/80/81/20/808120a5-3b1c-c97e-773c-da793a521bc5/source/30x30bb.jpg",
      artworkUrl60: "http://is1.mzstatic.com/image/thumb/Music/v4/80/81/20/808120a5-3b1c-c97e-773c-da793a521bc5/source/60x60bb.jpg",
      artworkUrl100: "http://is1.mzstatic.com/image/thumb/Music/v4/80/81/20/808120a5-3b1c-c97e-773c-da793a521bc5/source/100x100bb.jpg",
      collectionPrice: 12.99,
      trackPrice: 1.29,
      releaseDate: "2008-06-23T07:00:00Z",
      collectionExplicitness: "explicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 3,
      trackTimeMillis: 220370,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Rock",
      isStreamable: true
    }
];

/**
 * An example of component testing.
 */
describe('TrackList Component', () => {
    let routerConfig: Route[] = [
        { path: 'tracks/:trackId', component: TrackComponent }
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                RouterTestingModule.withRoutes(routerConfig)
            ],
            providers: [TrackService],
            declarations: [TrackListComponent, TrackComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        this.fixture = TestBed.createComponent(TrackListComponent);
        this.comp = this.fixture.componentInstance;
        this.trackService = this.fixture.debugElement.injector.get(TrackService);
        this.getAllTracksSpy = spyOn(this.trackService, 'getAll').and.returnValue(Observable.of(exampleTrackList));
        this.el = this.fixture.debugElement.nativeElement;
    });

    it('should get tracks from service', fakeAsync(() => {
        expect(this.getAllTracksSpy).toHaveBeenCalledTimes(0);
        this.fixture.detectChanges();
        expect(this.getAllTracksSpy).toHaveBeenCalledTimes(1);
        tick();
        this.fixture.detectChanges();
        expect(this.comp.tracks).toEqual(exampleTrackList);
    }));
});
