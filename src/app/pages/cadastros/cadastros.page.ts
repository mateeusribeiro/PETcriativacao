  
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { MenuController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';
import {LoginPage} from '../login/login.page';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
  providers: [DBService]
})
export class CadastrosPage {

  newUser: User;

  lista: User[];
  loading: any;

  constructor(private dbService: DBService, private router: Router,public loadingController: LoadingController, public alertController: AlertController ) { 
    this.lista= [];
    this.newUser= new User();
    this.inicializarUsuarios();
  }

  async inicializarUsuarios() {
    await this.presentLoading();

    this.lista = await this.dbService.listWithUIDs<User>('usuarios');

    await this.hideLoading();
  }
  async hideLoading() {
    this.loading.dismiss();
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();

  }
    async adicionarUsuario() {
      await this.dbService.insertInList('usuarios', this.newUser);
      
      alert('Notícia cadastrada com sucesso!');
      this.newUser = new User();
    }

    async presentAlert(msg: string) {
      const alert = await this.alertController.create({
        header: 'Login',
        message: msg,
        buttons: ['OK']
      });
      await alert.present();
  }
    slidemenu(){
      this.router.navigate(['app.component']);
    }
    voltar(){
      this.router.navigate(['login']);
    }


  }