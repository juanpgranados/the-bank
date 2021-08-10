import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    console.log(this.loginForm)
  }
  

  onLogin() {
    if(this.loginForm.valid){
      if(this.authService.loginUser(this.loginForm.value.username, this.loginForm.value.password)){
        this.authService.setLogged(true);
        this.router.navigate(['/home']);
      }else{
        this.error = "Invalid credentials";
      }
      
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
