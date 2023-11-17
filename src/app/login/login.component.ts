import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
uname :string='';
password :string='';
// msg :string='';
constructor(private router:Router){
}
checkDetails(){
  if(this.uname=='abi' && this.password=='123' ){
    alert('Username & Password matched');
  // this.msg="Username and Password matched";
  this.router.navigate(['/home']);

}
else{
alert('username and password not matched');
  // this.msg="Username and password not matched";
}
}

}
  // gotoHome(){

    // this.router.navigate(['/home']);
  // }
