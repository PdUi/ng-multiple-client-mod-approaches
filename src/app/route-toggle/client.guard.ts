import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClientsService } from '../clients.service';

@Injectable({ providedIn: 'root' })
export class ClientGuard implements CanActivate {
  constructor(private clientsService: ClientsService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.clientsService.selectedClient.pipe(map(client => {
      if (state.url === '/route' || state.url.endsWith(client)) {
        console.log(state.url);
        return true;
      }

      this.router.navigate(['/route']);
      return false;
    }));
  }
}
