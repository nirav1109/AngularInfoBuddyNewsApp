import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from 'src/app/services/newsservice.service';


@Component({
  selector: 'app-top-headings',
  templateUrl: './top-headings.component.html',
  styleUrls: ['./top-headings.component.css']
})
export class TopHeadingsComponent implements OnInit {
  topHeadLines:any=[];
  constructor( private newService:NewsserviceService) { }
  ngOnInit(): void {
    this.newService.topHeading().subscribe((res=>{
      this.topHeadLines = res.articles;
    }))
  }

}
