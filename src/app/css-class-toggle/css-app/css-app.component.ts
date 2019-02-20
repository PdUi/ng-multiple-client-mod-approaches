import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-css-app',
  templateUrl: './css-app.component.html',
  styleUrls: ['./css-app.component.scss']
})
export class CssAppComponent implements OnInit, OnDestroy {
  @HostBinding('class') cssAppClass;

  private _subscriptions: Subscription[] = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this._subscriptions.push(
      this.clientsService.selectedClient.subscribe(client => this.cssAppClass = client)
    );
  }

  ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }
}
