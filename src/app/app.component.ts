import { Component, OnInit } from '@angular/core';
import { DatastorageService } from './shared/datastorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  constructor(private dataStorageService: DatastorageService){

  }

  ngOnInit(){
    this.dataStorageService.getDataFromFirebase()
  }

}
