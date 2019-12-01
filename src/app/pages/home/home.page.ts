
import { MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from 'src/app/entities/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Projetos } from 'src/app/entities/projetos';
import { Tarefas } from 'src/app/entities/tarefas';
import { ModalController } from '@ionic/angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';
import { ProjetocadastroPage } from '../projetocadastro/projetocadastro.page';
import { SelecionaPage } from '../seleciona/seleciona.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  lista: Projetos[];
  loading: any;

  constructor(private dbService: DBService, private router: Router, public loadingController: LoadingController,private modalController: ModalController) {
    this.lista = [];
    this.inicializarDados();


  }
  async inicializarDados() {
    await this.presentLoading();

    this.lista = await this.dbService.listWithUIDs<Projetos>('projeto');

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
  async deletar(key: string) {
    await this.dbService.remove('projeto', key);

    alert('Usuário removido com sucesso!');

    this.inicializarDados();
  }

   async edit() {
    const modal = await this.modalController.create({
    component: SelecionaPage
  });
  modal.present();

  }
  cadastrar() {
    this.router.navigate(['cadastros']);
  }
  ngOnInit() {
  }
   async add() {
    const modal = await this.modalController.create({
      component: SelecionaPage
    });
    modal.present();
  }
}
