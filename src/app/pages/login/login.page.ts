import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from 'src/app/entities/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { DBService } from 'src/app/services/db.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [DBService, AuthenticationService]

})
export class LoginPage {

  lista: Login[];
  email: string;
  password: string;
  private loading: any;

  constructor(private dbService: DBService,
    private router: Router,
    private authService: AuthenticationService,
    public alertController: AlertController,
    private loadingCtrl: LoadingController,

    private toastController: ToastController
  ) {
    this.lista = [];
    this.inicializarLogins();
  }
  async inicializarLogins() {
    this.lista = await this.dbService.listWithUIDs<Login>('logins');
  }
  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/tabs']);
      }).catch(error => {
        console.log(error);
        this.presentAlert('E-mail e/ou senha inválido(s).');
      });
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Login',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
  register() {
    this.router.navigate(['cadastros']);
  }
}