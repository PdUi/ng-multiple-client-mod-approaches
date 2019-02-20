import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-route-app',
  templateUrl: './route-app.component.html',
  styleUrls: ['./route-app.component.scss']
})
export class RouteAppComponent implements OnInit {
  constructor(private clientsService: ClientsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.clientsService.selectedClient.subscribe(client => this.router.navigate(['/route', client]));
  }
}
