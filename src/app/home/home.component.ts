import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {HttpClient} from '@angular/common/http';
import { toArray } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  trendingMovies:any;
  constructor(private auth:AuthService,private router:Router,private http:HttpClient){}
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  goBack(){

  }
  logOut(){
this.router.navigate(['/login']);
  }
  getTrendingMovies(){
   this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(res=>{
    this.trendingMovies=res;
  });
  
  }
}
