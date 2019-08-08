import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  firstname=""
  paramsub
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.paramsub = this.router.paramMap.subscribe(params=>{
      this.firstname = params.get('firstname')
    })

  }

}
