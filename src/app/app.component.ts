import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  constructor() {
    const config = {
      apiKey: "AIzaSyD8VoC3wsiasA-xyKajyqwKQ4Odo12anK0",
      authDomain: "my-library-d0b2f.firebaseapp.com",
      databaseURL: "https://my-library-d0b2f.firebaseio.com",
      projectId: "my-library-d0b2f",
      storageBucket: "my-library-d0b2f.appspot.com",
      messagingSenderId: "1026026473105",
      appId: "1:1026026473105:web:918ae9835bfdba90812130"
    };
  
    firebase.initializeApp(config);
  }

}
