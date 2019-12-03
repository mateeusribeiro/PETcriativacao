import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DBService } from 'src/app/services/db.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [DBService, AuthenticationService]

})
export class LoginPage {

  email: string;
  password: string;
  private loading: any;

  constructor(private dbService: DBService,
    private router: Router,
    private authService: AuthenticationService,
    public alertController: AlertController,
    private loadingCtrl: LoadingController,
    private toastCrtl: ToastController) {
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
  registrar() {
    this.router.navigate(['cadatros']);
  }

}