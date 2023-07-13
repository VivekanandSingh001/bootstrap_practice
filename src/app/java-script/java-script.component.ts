import { Component } from '@angular/core';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.css']
})
export class JavaScriptComponent {
  abc = ["t", "h", "i", "s"];
  a: any[] = [];
 sum=0;
  yo() {
    for (let i = 0; i < this.abc.length; i++) {
      if (i % 2 === 0) {
        this.a[i] = this.abc[i].toUpperCase();
      } else {
        this.a[i] = this.abc[i].toLowerCase();
      }
      console.log(this.a[i],"ene")
    }
    for(let j=1;j<=10;j++){
this.sum+=j;
    }
    console.log("sum",this.sum);
  }
}
