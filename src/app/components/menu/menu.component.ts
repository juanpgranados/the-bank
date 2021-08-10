import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  userFullName = this.authService.getUserFullName();

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.setLogged(false);
    this.router.navigate(['/login']);
  }
}
