import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css']
})
export class SoldeComponent implements OnInit {
  clientId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('id');
  }
}
