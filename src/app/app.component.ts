import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.auth.authenticationState.subscribe(state => {
        if(state) {
          this.router.navigate(['tabs']);
        } else {
          console.log(state);
          this.router.navigate(['login']);
        }
      })

        this.auth.registerState.subscribe(state => {
        if(state) {
          this.router.navigate(['macros-calculator']);
        } else {
          this.router.navigate(['register']);
        }
      })
      
      this.storage.get('firstTime').then(value => {
        if(value) {
          console.log(value)
        }
        else {
          console.log('out');
          this.storage.set('firstTime', 'true');
          this.router.navigate(['sliders']);
        }
      })
    });
  }
}
