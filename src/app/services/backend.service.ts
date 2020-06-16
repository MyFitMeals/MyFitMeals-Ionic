import { Platform, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { finalize } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BackendService {


  private data;

  constructor(private http: HttpClient, private httpNative: HTTP, private plt: Platform, private loadingCtrl: LoadingController) { }

   getHttp(ApiURL) {
    console.log('calling standard Http')

     return this.http.get(ApiURL).toPromise();
  }

   getHttpNative(ApiURL) {
    console.log('Calling Native Http')

    let nativeCall = this.httpNative.get(ApiURL, {}, {
      'Content-Type': 'application/json'
    });

    return from(nativeCall).pipe(
    ).toPromise();
  }

  async getHelloWorld() {
    console.log('Im here in service !')

    if(this.plt.is('cordova')) {
      await this.getHttpNative('http://myfitmeals.herokuapp.com/').then(data => {
        console.log(data);
        this.data = JSON.parse(data.data);
      })
    }

    else {
      await this.getHttp('http://myfitmeals.herokuapp.com/').then(data => {
        console.log(data);
        this.data = data;
      })
    } 

    console.log(this.data);

    return this.data
  }

  getData() {
    console.log(this.data)
    return this.data;
  }
}
