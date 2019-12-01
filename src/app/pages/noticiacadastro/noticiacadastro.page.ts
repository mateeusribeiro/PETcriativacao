import { Component, OnInit } from '@angular/core';
import { Projetos } from 'src/app/entities/projetos';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
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

  newProjetos: Projetos;

  constructor(private dbService: DBService, private router: Router, private modalController: ModalController) { 
    this.newProjetos= new Projetos();
  }
  
    async adicionarProj() {
  
     await this.dbService.insertInList('projeto', this.newProjetos);

     alert('Notícia cadastrada com sucesso!');
  
      this.newProjetos = new Projetos();
    }
    voltar(){
      this.modalController.dismiss();
    }
  
  }