import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chils',
  templateUrl: './chils.component.html',
  styleUrls: ['./chils.component.css']
})
export class ChilsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input() boxColor: any;
   @Input() pText: any;
  //  @Input() cwt:any;

  @Output() inputEvent = new EventEmitter()

   

   count:number=0;
   onCreate(oP: { value: string | any[]; }){
     if(oP.value.length>0){
      this.count=this.count+1;
     this.inputEvent.emit(oP.value);
     }
     
   }

}
