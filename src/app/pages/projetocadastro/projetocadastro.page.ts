import { Component, OnInit } from '@angular/core';
import { Projetos } from 'src/app/entities/projetos';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NavController, AlertController, ModalController, LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetocadastro',
  templateUrl: './projetocadastro.page.html',
  styleUrls: ['./projetocadastro.page.scss'],
  providers: [DBService]
})
export class ProjetocadastroPage {
  loading: any;
  newProjetos: Projetos;

  constructor(private dbService: DBService,
      private router: Router, 
      public loadingController: LoadingController,
      private modalController: ModalController, 
      public alertController: AlertController,
      private nvCtrl: NavController,) {

    this.newProjetos = new Projetos();
  }
  
  async hideLoading() {
     await this.loading.dismiss();
  }

  async adicionarProj() {

    await this.dbService.insertInList('projeto', this.newProjetos);

    this.presentAlert('Projeto criado!')

    this.newProjetos = new Projetos();

  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();

  }
   async voltar(){
     await this.modalController.dismiss({
        'dismissed': true
      });     
    }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

}