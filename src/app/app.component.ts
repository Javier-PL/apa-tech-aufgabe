import { ChangeDetectorRef, Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apa-tech-aufgabe';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    //this.mobileQuery.addListener(this._mobileQueryListener);

    this.mobileQuery.addEventListener("change", () => {
      this._mobileQueryListener
    });
  }

  ngOnDestroy(): void {
   //this.mobileQuery.removeListener(this._mobileQueryListener);
    this.mobileQuery.removeEventListener("change", () => {
      this._mobileQueryListener
    });
  }
  
}
