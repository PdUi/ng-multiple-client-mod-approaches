import { Component } from '@angular/core';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedClient = 'client1';

  constructor(private clientsService: ClientsService) {
    this.updateClient(this.selectedClient);
  }

  updateClient(client: string) {
    this.selectedClient = client;
    this.clientsService.selectClient(client);
  }
}
