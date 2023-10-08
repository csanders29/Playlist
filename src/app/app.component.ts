import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content:any;
  logIn=false;//defin
  //logIn=true;
  
  constructor(private apiService:ApiService) {}

  ngOnInit() {
    this.getDate()
  }
  postData(newSong:any){
    console.log('postData_' +newSong);
    this.apiService.post(newSong);
    this.content.push(newSong);
  }

  getDate() {
    this.apiService.get()
      .subscribe(data => {
        console.log(data)
        this.content=this.tokenize(data);
      })      
  }
  tokenize(input:any)
  { let output=[{}];
    for(let i=0; i<input.length;i++)
    {   output[i]={
        number:input[i].id,
        name:input[i].songName,
        singer:input[i].artistName
      }
    }
    return  output;

  }

  valueUser(input: boolean)
  {
    if(input)
    { this.getDate();
      this.logIn=input;
    }
  }
}
