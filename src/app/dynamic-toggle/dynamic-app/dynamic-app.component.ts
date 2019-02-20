import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DynamicDirective } from '../dynamic.directive';
import { ClientsService } from '../../clients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-app',
  templateUrl: './dynamic-app.component.html',
  styleUrls: ['./dynamic-app.component.scss']
})
export class DynamicAppComponent implements OnInit {
  @ViewChild(DynamicDirective) dynamicHost: DynamicDirective;

  private _subscriptions: Subscription[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private clientsService: ClientsService) {}

  ngOnInit() {
    this._subscriptions.push(
      this.clientsService.selectedClient.subscribe(client => {
        this._subscriptions.push(
          this.clientsService.getComponents(client).subscribe(components => {
            const viewContainerRef = this.dynamicHost.viewContainerRef;
            viewContainerRef.clear();

            components.forEach(component => {
              const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
              viewContainerRef.createComponent(componentFactory);
            });
          })
        );
      })
    );
  }
}
