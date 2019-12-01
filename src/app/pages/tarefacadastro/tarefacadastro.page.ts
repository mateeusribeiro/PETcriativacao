import { Component, OnInit } from '@angular/core';
import { Projetos } from 'src/app/entities/projetos';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ModalController, AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';
import {LoginPage} from '../login/login.page';
import { Router } from '@angular/router';
import { Tarefas } from 'src/app/entities/tarefas';

@Component({
  selector: 'app-tarefacadastro',
  templateUrl: './tarefacadastro.page.html',
  styleUrls: ['./tarefacadastro.page.scss'],
  providers: [DBService]
})
export class TarefacadastroPage {

  newTarefas: Tarefas;

  constructor(private dbService: DBService, private router: Router, private modalController: ModalController,public alertController: AlertController) { 
    this.newTarefas= new Tarefas();
  }
  
    async adicionarTarefa() {
  
     await this.dbService.insertInList('tarefas', this.newTarefas);

     this.presentAlert('Tarefa cadastrada com sucesso!')
  
      this.newTarefas = new Tarefas();
    }
    voltar(){
      this.modalController.dismiss();
    }
    async presentAlert(msg: string) {
      const alert = await this.alertController.create({
        message: msg,
        buttons: ['OK']
      });
      await alert.present();
    }
  }