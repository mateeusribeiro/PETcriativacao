import { Component, OnInit } from '@angular/core';
import { Projetos } from 'src/app/entities/projetos';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';
import {LoginPage} from '../login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetocadastro',
  templateUrl: './projetocadastro.page.html',
  styleUrls: ['./projetocadastro.page.scss'],
  providers: [DBService]
})
export class ProjetocadastroPage {

  newProjetos: Projetos;

  constructor(private dbService: DBService, private router: Router) { 
    this.newProjetos= new Projetos();
  }
  
    async adicionarProj() {
  
     await this.dbService.insertInList('projeto', this.newProjetos);

     alert('Projeto cadastrado com sucesso!');
  
      this.newProjetos = new Projetos();
    }
    voltar(){

      this.router.navigate(['home']);

    

    }
  
  }