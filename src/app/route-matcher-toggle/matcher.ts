// https://medium.com/@lenseg1/loading-different-angular-modules-or-components-on-routes-with-same-path-2bb9ba4b6566
import { UrlSegment, UrlSegmentGroup, Route, UrlMatchResult } from '@angular/router';

import { map } from 'rxjs/internal/operators/map';

import { appInjector } from '../../main';
import { ClientsService } from '../clients.service';

export function clientMatcher(segments: UrlSegment[], group: UrlSegmentGroup, route: Route): UrlMatchResult {
  let matchResult: UrlMatchResult;
  const clientsService =  appInjector.get(ClientsService);
  const subscription = clientsService.selectedClient
                                     .pipe(map(client => matchResult = client === this ? { consumed: segments } : null))
                                     .subscribe();

  while (matchResult === undefined) {}

  subscription.unsubscribe();

  return matchResult;
}
