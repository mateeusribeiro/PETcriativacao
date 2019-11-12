import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefas } from 'src/app/entities/tarefas';
import { MenuController, LoadingController, ToastController  } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';
import {LoginPage} from '../login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarefacadastro',
  templateUrl: './tarefacadastro.page.html',
  styleUrls: ['./tarefacadastro.page.scss'],
  providers: [DBService]
})
export class TarefacadastroPage {

  newTarefas: Tarefas;

  listaTarefas: Tarefas[];
  loading: any;

  constructor(private dbService: DBService, private router: Router, public loadingController: LoadingController) { 
    this.listaTarefas= [];
    this.newTarefas= new Tarefas();
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

      alert('Tarefa cadastrada com sucesso!');
      
      this.newTarefas= new Tarefas();

    }
    voltar(){

      this.router.navigate(['home']);
    }
  
  }