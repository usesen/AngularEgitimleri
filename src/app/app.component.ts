import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularDersleri';
  constructor(private router: Router) {}

  navigateTo(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const link = target.getAttribute('routerLink');
    if (link) {
      this.router.navigate([link]);
    }
  }
}
