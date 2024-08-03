import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getClients().subscribe(data => {
      this.clients = data;
    });
  }
}
