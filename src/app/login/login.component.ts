import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstname="";
  password="";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  itemclick(){
    if (this.firstname == "aaa@qq.com" && this.password == "123"){
        this.router.navigateByUrl('/account/' + this.firstname)
    }
    else if (this.firstname == "bbb@qq.com" && this.password == "123"){
      this.router.navigateByUrl('/account/' + this.firstname)
  }
    else if(this.firstname == "ccc@qq.com" && this.password == "123"){
     this.router.navigateByUrl('/account/' + this.firstname)
}
  else{
    alert("this password or username is not rigtht")
  }
  }
}
