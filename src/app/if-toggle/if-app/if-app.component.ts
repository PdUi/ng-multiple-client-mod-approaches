import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-if-app',
  templateUrl: './if-app.component.html',
  styleUrls: ['./if-app.component.scss']
})
export class IfAppComponent implements OnInit, OnDestroy {
  client: string;
  componentsToDisplay: any[];

  private _subscriptions: Subscription[] = [];

  constructor(private clientsService: ClientsService, router: Router) {
    console.log(router.url);
  }

  ngOnInit() {
    this._subscriptions.push(
      this.clientsService.selectedClient.subscribe(client => {
        this.client = client;
        this._subscriptions.push(
          this.clientsService.getIf(client).subscribe(componentsToDisplay => this.componentsToDisplay = componentsToDisplay)
        );
      })
    );
  }

  shouldShow(componentName: string) {
    return this.componentsToDisplay.find(c => c === componentName) !== undefined;
  }

  ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }
}
