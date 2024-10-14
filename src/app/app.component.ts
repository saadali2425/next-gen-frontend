import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Writers iBook';

  showWelcomeMessage: boolean = false;
  showLogoutButton: boolean = false;

  constructor(private router: Router,private authService: AuthService) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event:   
   NavigationEnd) => {
      this.showWelcomeMessage   
   = event.url === '/sign-in' || event.url === '/sign-up';
    });
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.showLogoutButton = event.url === '/writing-app';
      }
    });
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/sign-in']);   
  }
}
