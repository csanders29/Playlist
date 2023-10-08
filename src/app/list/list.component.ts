import { Component, EventEmitter, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() contents:any;
  @Output() newSong = new EventEmitter<any>();
//   contents =[{
//    number:0,
//    name:'mock-name-0',
//    singer:'mock-singer-0' 
//   },
//   {
//     number:1,
//     name:'name-1',
//     singer:'singer-1' 
//    }
// ];
 @ViewChild('inputName') inputName:ElementRef | any;
 @ViewChild('inputSinger') inputSinger:ElementRef | any;
  constructor() { }

  ngOnInit(): void {
  }
  delet(index:number){
    console.log(this.contents[index]);
    if (index !== -1) 
       this.contents.splice(index, 1);
  }
  add(){
    const number=this.contents.length;
    const name = this.inputName.nativeElement.value;
    const singer=this.inputSinger.nativeElement.value;
    if(name && singer){
      console.log(name+"__"+singer+"___"+number);
      const item={number:number,name:name,singer:singer};
      this.newSong.emit(item);
    }
    this.inputName.nativeElement.value = '';
    this.inputSinger.nativeElement.value = '';
  }


}
  