import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { Type } from '@angular/core';
import { CircleComponent } from './shared/circle/circle.component';
import { SquareComponent } from './shared/square/square.component';
import { RectangleComponent } from './shared/rectangle/rectangle.component';
import { TriangleComponent } from './shared/triangle/triangle.component';

@Injectable({ providedIn: 'root' })
export class ClientsService {
  private _selectedClientSubject = new BehaviorSubject<string>('');

  public get selectedClient() {
    return this._selectedClientSubject.asObservable();
  }

  public selectClient(client: string) {
    this._selectedClientSubject.next(client);
    console.log(client);
  }

  public getIf(client: string) {
    switch (client) {
      case 'client2':
        return of(['circle', 'square', 'rectangle', 'triangle']);
      case 'client1':
        return of(['square', 'rectangle', 'triangle']);
      case 'client3':
        return of(['circle', 'rectangle']);
    }
  }

  public getComponents(client: string): Observable<Type<any>[]> {
    switch (client) {
      case 'client2':
        return of([CircleComponent, SquareComponent, RectangleComponent, TriangleComponent]);
      case 'client1':
        return of([SquareComponent, RectangleComponent, TriangleComponent]);
      case 'client3':
        return of([CircleComponent, RectangleComponent]);
    }
  }
}
