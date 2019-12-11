
import { AlertController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from 'src/app/entities/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Projetos } from 'src/app/entities/projetos';
import { Tarefas } from 'src/app/entities/tarefas';
import { ModalController, ActionSheetController} from '@ionic/angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';
import { ProjetocadastroPage } from '../projetocadastro/projetocadastro.page';
import { SelecionaPage } from '../seleciona/seleciona.page';


@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.page.html',
  styleUrls: ['./projeto.page.scss'],
})
export class ProjetoPage implements OnInit {

  lista: Projetos[];
  loading: any;
  newProjetos: Projetos;
  public projetos = new Array<Projetos>();


  constructor(private dbService: DBService,
    private router: Router,
    public loadingController: LoadingController,
    private modalController: ModalController,
    private actionController: ActionSheetController,
    public alertController: AlertController
  ) {
    this.lista = [];
    this.newProjetos = new Projetos();
    this.inicializarDados();
  }

  async inicializarDados() {
    await this.presentLoading();

    this.lista = await this.dbService.listWithUIDs<Projetos>('projeto');

    await this.hideLoading();

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();

  }
  async hideLoading() {

    this.loading.dismiss();
  }

  async adicionarProj() {

    await this.dbService.insertInList('projeto', this.newProjetos);

    this.inicializarDados();

    this.presentAlert('Projeto criado!')

    this.newProjetos = new Projetos();


  }
  async deletar(key: string) {

    await this.dbService.remove('projeto', key);

    this.presentAlert('Projeto removido!.')

    this.inicializarDados();

    this.hideLoading();
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentActionSheet() {
    this.router.navigate(['edit-projeto']);
  }


  async editar() {
    const modal = await this.modalController.create({
      component: SelecionaPage
    });
    modal.present();
  }
  cadastrar() {
    this.router.navigate(['cadastros']);
  }

  navegar() {
    this.router.navigate(['telaproj']);
  }
  ngOnInit() {
  }
  async add() {
    const modal = await this.modalController.create({
      component: ProjetocadastroPage,
      componentProps: {
        'up': (lista) => {
          this.lista = lista
        }
      }
    });

    modal.onDidDismiss().then((data) => {
      this.inicializarDados()
    });

    modal.present();
  }
}
