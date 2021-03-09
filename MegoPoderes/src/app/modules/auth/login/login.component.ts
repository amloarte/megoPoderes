import { Respuesta } from './../_models/Respuesta';
import { LoginService } from './../_services/login.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import * as SparkMD5 from 'spark-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  respuesta: Respuesta;
  mensajeError = '';

  // KeenThemes mock, change it to:
  defaultAuth = {
    email: '',
    password: '',
  };
  // defaultAuth: any = {
  //   email: 'admin@demo.com',
  //   password: 'demo',
  // };
  loginForm: FormGroup;
  hasError = false;
  returnUrl: string;
  isLoading$: Observable<boolean>;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private fb: FormBuilder,
    private authService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    localStorage.clear();
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        this.defaultAuth.email,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25)
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  // .pipe(first())
  async submit() {
    this.hasError = false;
    const pass = SparkMD5.hash( this.f.password.value );
    this.authService.login(this.f.email.value, pass)
      .then((resp: any) => {

        this.respuesta = resp;
        this.validarLogin(this.respuesta.codigo, this.respuesta.mensajes);

      }).catch(err => {

        this.hasError = true;
        this.mensajeError = 'Actualmente no puede ingresar al sistema. Intente mas tarde';
        console.log(err);

      });
  }

  validarLogin(codigo: string, mensajes: Array<string>): void {
    let mensajeLogin: string;
    let mensajeCaducaPassword: string;

    switch (codigo) {
      case 'L1': {

        if (mensajes.length > 1) {
          mensajeCaducaPassword = mensajes[0];
          mensajeLogin = mensajes[1];
          alert(mensajeCaducaPassword);
        } else {
          mensajeLogin = mensajes[0];
        }

        const splitLogLogin = mensajeLogin.split('|');
        const mensajeLogLogin = splitLogLogin[0] + '\n\n' + splitLogLogin[1] + '\n' + splitLogLogin[2] + '\n' + splitLogLogin[3];
        alert(mensajeLogLogin);

        this.router.navigate(['/inicio']);
        break;

      }
      case 'L2': {
        alert(mensajes);
        alert('Contraseña Caducada');
        break;
      }
      case 'L3': {

        if (mensajes.length > 1) {
          mensajeCaducaPassword = mensajes[0];
          mensajeLogin = mensajes[1];
          alert(mensajeCaducaPassword);
        } else {
          mensajeLogin = mensajes[0];
        }

        const splitLogLogin = mensajeLogin.split('|');
        const mensajeLogLogin = splitLogLogin[0] + '\n\n' + splitLogLogin[1] + '\n' + splitLogLogin[2] + '\n' + splitLogLogin[3];
        alert(mensajeLogLogin);

        this.router.navigate(['/inicio']);
        break;
      }
      case 'L4': {

        if (mensajes.length > 1) {
          mensajeCaducaPassword = mensajes[0];
          mensajeLogin = mensajes[1];
          alert(mensajeCaducaPassword);
        } else {
          mensajeLogin = mensajes[0];
        }

        const splitLogLogin = mensajeLogin.split('|');
        const log = splitLogLogin[0] + '\n\n' + splitLogLogin[1] + '\n' + splitLogLogin[2] + '\n' + splitLogLogin[3];
        alert(log);

        this.router.navigate(['/perfiles']);
        break;

      }
      case 'L5': {

        this.mensajeError = mensajes[0];
        break;

      }
      case 'L6': {

        this.mensajeError = mensajes[0];
        this.hasError = true;
        break;

      }
      default: {
        break;
      }
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
