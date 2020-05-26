import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-browser-tabs';
  routes: Route[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.config.forEach(r => {
      const route: Route = {
        path: '',
        label: ''
      };

      route.label = r.path;
      route.path = `/${r.path}`;
      this.routes.push(route);
    })
  }

}

export class Route {
  path: string;
  label: string;
}
