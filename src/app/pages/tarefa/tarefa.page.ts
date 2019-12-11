import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefas } from 'src/app/entities/tarefas';
import { AlertController, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SelecionaPage } from '../seleciona/seleciona.page';

import { DBService } from 'src/app/services/db.service';

import { Router } from '@angular/router';
import { TarefacadastroPage } from '../tarefacadastro/tarefacadastro.page';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.page.html',
  styleUrls: ['./tarefa.page.scss'],
  providers: [DBService]
})
export class TarefaPage {

  newTarefas: Tarefas;
  listaTarefas: Tarefas[];
  loading: any;

  constructor(private dbService: DBService,
    private router: Router,
    public loadingController: LoadingController,
    private modalController: ModalController,
    public alertController: AlertController
  ) {
    this.listaTarefas = [];
    this.newTarefas = new Tarefas();
    this.inicializarTarefas();
  }

  async inicializarTarefas() {
    await this.presentLoading();

    this.listaTarefas = await this.dbService.listWithUIDs<Tarefas>('tarefas');

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

  async adicionarTarefa() {
    await this.dbService.insertInList('tarefas', this.newTarefas);

    this.inicializarTarefas();

    this.presentAlert('Tarefa cadastrada com sucesso!')

    this.newTarefas = new Tarefas();

  }
  async deletar(key: string) {

    await this.dbService.remove('tarefas', key);

    this.presentAlert('Tarefa removida!.')

    this.inicializarTarefas();

    this.hideLoading();

  }
  async voltar() {
    await this.inicializarTarefas();

  }
  async editar() {
    this.router.navigate(['edit-tarefa']);
  }


  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
  }
  async add() {
    const modal = await this.modalController.create({
      component: TarefacadastroPage,
      componentProps: {
        'up': (listaTarefas) => {
          this.listaTarefas = listaTarefas
        }
      }
    });

    modal.onDidDismiss().then((data) => {
      this.inicializarTarefas()
    });

    modal.present();
  }

}