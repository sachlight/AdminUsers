import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excercise';
 
  
 
  //For Users....
  
  us:Array<String>=[];
  pushUsers(data:any){
    this.us.push(data);
  }
  onremoveUsers(item: number){
    this.us.splice(item, 1)
  }

  //For Admins...

  admins:Array<String>=[];
  pushAdmins(ysh:any){
    this.admins.push(ysh);
  }
  onremoveAdmins(item: number){
    this.admins.splice(item, 1)
  }
}
