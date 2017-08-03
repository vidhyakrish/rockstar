import { TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Track } from '../../../src/app/track/track.model';
import { TrackService } from '../../../src/app/track/track.service';

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
];

/**
 * An example of service testing with HTTP response mocking.
 */
describe('Track Service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TrackService,
                BaseRequestOptions,
                MockBackend,
                {
                    provide: Http,
                    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions)
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });
    });

      

    it('should fetch multiple tracks', inject([TrackService, MockBackend], (trackService: TrackService, backend: MockBackend) => {
        const baseResponse = new Response(new ResponseOptions({
            body: JSON.stringify(exampleTrackList)
        }));

        backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));

        trackService.getAll().subscribe((data) => {
            expect(data).toEqual(exampleTrackList);
        });
    }));
});
