import { AfterViewInit, Component } from '@angular/core';

/**
 * App component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-landing-page-demo-2';

  constructor() { }

  ngAfterViewInit(): void {
    this.loadScript('assets/js/main.js');
  }

  // eslint-disable-next-line class-methods-use-this
  loadScript(src: string): void {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = src;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
