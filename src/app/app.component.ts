import { Component } from '@angular/core';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Recipe } from './recipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipes book';
  recipes: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.recipes = db.collection('recipes').valueChanges();
  }
}
