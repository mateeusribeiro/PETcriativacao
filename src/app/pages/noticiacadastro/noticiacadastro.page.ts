import { Component, OnInit } from '@angular/core';
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

  constructor(private dbService: DBService, private router: Router) { 
    this.lista= [];
    this.newNoticias= new Noticias();
    this.inicializarNoticias();
  }

  async inicializarNoticias() {
       this.lista = await this.dbService.listWithUIDs<Noticias>('projetos');
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