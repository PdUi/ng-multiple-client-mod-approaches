import { Component } from '@angular/core';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private clientsService: ClientsService) {
    this.updateClient('client1');
  }

  updateClient(client: string) {
    this.clientsService.selectClient(client);
  }
}
