import { Component, OnInit } from '@angular/core';
import { Tarefas } from 'src/app/entities/tarefas';

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

  constructor(private dbService: DBService, private router: Router) { 
    this.listaTarefas= [];
    this.newTarefas= new Tarefas();
    this.inicializarTarefas();
  }

  async inicializarTarefas() {
    this.listaTarefas = await this.dbService.listWithUIDs<Tarefas>('tarefas');
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