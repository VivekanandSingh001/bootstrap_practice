import { Component } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  userItems=[{id:1,Uid:"Home"},
  {id:2,Uid:"About Us"},
  {id:3,Uid:"Contact Us"},
  {id:4,Uid:"Home"}
  ];
}
