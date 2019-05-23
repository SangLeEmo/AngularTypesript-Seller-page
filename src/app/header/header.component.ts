import { Component } from '@angular/core';
import { DatastorageService } from 'app/shared/datastorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

constructor(private dataStorageService: DatastorageService){}

onSaveData(){
  this.dataStorageService.saveDataToFirebase()
}
onFetchData(){
  this.dataStorageService.getDataFromFirebase()
}
}
