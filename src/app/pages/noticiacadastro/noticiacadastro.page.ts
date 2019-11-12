import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, LoadingController, ToastController  } from '@ionic/angular';
import { Noticias} from 'src/app/entities/noticias';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';
import {LoginPage} from '../login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticiacadastro',
  templateUrl: './noticiacadastro.page.html',
  styleUrls: ['./noticiacadastro.page.scss'],
  providers: [DBService]
})
export class NoticiacadastroPage {

  newNoticias: Noticias;

  lista: Noticias[];
  loading: any;

  constructor(private dbService: DBService, private router: Router,public loadingController: LoadingController){ 
    this.lista= [];
    this.newNoticias= new Noticias();
    this.inicializarNoticias();
  }

  async inicializarNoticias() {
    await this.presentLoading();

       this.lista = await this.dbService.listWithUIDs<Noticias>('projetos');

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

   async adicionarNotic() {
      alert('Notícia adicionada com sucesso!');
  
      await this.dbService.insertInList('projeto', this.newNoticias);
  
       this.newNoticias = new Noticias();
    }
    voltar(){

      
      this.router.navigate(['home']);
    }
  
  }