import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.page.html',
  styleUrls: ['./admin-interface.page.scss'],
})
export class AdminInterfacePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 
}
