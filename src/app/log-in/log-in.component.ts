import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  @Input() LogIn:any; 
  @Output() Value = new EventEmitter<boolean>();
  constructor() { }
  user:any[]=[];
  signup:any={
    userName:'',
    emaill:'',
    password:''
  };
  login:any={
    user:'',
    password:''
  };
  ngOnInit(): void {
    const localData=localStorage.getItem('signerUser');
    if(localData){
      this.user=JSON.parse(localData);
    }
  }
  onSignUP(){
    this.user.push(this.signup);
    localStorage.setItem('signerUser', JSON.stringify(this.user) );
    this.signup={};
  }
  onLogIN(){
    const readIN=this.user.find( m => m.userName==this.login.userName && m.password==this.login.password);
    this.login={};
    if(readIN)
      this.Value.emit(true); 
      //alert('i have this user')
    else 
      alert('who are you ?')
      
  }
}
