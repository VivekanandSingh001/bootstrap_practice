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
 str="";
 str1="";
 str2="";
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
  
// let n = 5;
// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     string += i+j;
//   }
//   string += "\n";
// }
// console.log(string);
convertToBinary(){
  let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  
  for (let j = 0; j < i; j++) {
   this.str= string += " ";
  }
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    this.str= string += "*";
  }
  this.str= string += "\n";
}
console.log(this.str);
}


convertToBinary1(){
  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    
    for (let j = n; j > i; j--) {
     this.str1= string += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
     this.str1= string += "*";
    }
   this.str1= string += "\n";
  }
  for (let i = 1; i <= n - 1; i++) {
    
    for (let j = 0; j < i; j++) {
     this.str1= string += " ";
    }
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      this.str1=string += "*";
    }
   this.str1= string += "\n";
  }
  console.log(string);
}
convertToBinary2(){
  let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  
  for (let j = 0; j < i; j++) {
   this.str2= string += " ";
  }
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
    this.str2=  string += "*";
  }
  this.str2=string += "\n";
}
for (let i = 2; i <= n; i++) {
  
  for (let j = n; j > i; j--) {
    this.str2= string += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    this.str2=  string += "*";
  }
  this.str2=  string += "\n";
}
console.log(this.str2);
}
// proxy(){
//   let student1 = {
//     age: 24,
//     name: "Felix"
// }

// const handler = {
//     get: function(obj, prop) {
//         return obj[prop] ? obj[prop] : 'property does not exist';
//     }
// }

// const proxy = new Proxy(student1, handler);
// console.log(proxy.name); // Felix
// console.log(proxy.age); // 24
// console.log(proxy.class); // property does not exist
// }
}
