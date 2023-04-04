import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Menu } from 'src/app/API/api';
import { CustomapiService } from 'src/app/service/customapi.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data:Menu[]=[]
  constructor(private menudata:CustomapiService) {}

  ngOnInit() {
    this.Search("all")
  }
  Search(val:string){
    if (val=="all"){
      this.data=this.menudata.getvalue()
    }
    else{
      this.data=this.menudata.getvalue().filter((ele)=>{
        return ele.category==val
      })

    }
    return this.data
  }

  
}
