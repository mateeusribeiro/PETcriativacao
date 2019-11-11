
import { MenuController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from 'src/app/entities/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Projetos } from 'src/app/entities/projetos';
import { Tarefas } from 'src/app/entities/tarefas';

import { AngularFireDatabase } from '@angular/fire/database';


import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';

 
@Component({
 selector: 'app-home',
 templateUrl: './home.page.html',
 styleUrls: ['./home.page.scss'],
 providers: [DBService]
})
export class HomePage implements OnInit{

  lista: Projetos[];
  listaTarefas: Tarefas[];
  loading: any;

constructor(private dbService: DBService, private router: Router, public loadingController: LoadingController) {
  this.inicializarDados();
  this.lista = [];
  this.listaTarefas= [];
 

}
async inicializarDados() {
  this.lista = await this.dbService.listWithUIDs<Projetos>('projeto');
  this.listaTarefas = await this.dbService.listWithUIDs<Tarefas>('tarefas');
 
}
telaProj(){
  this.router.navigate(['projetocadastro']);
}
telaNotic(){
  this.router.navigate(['noticiacadastro']);
}
telaTarefa(){
  this.router.navigate(['tarefacadastro']);
}
 async deletar(key: string) {
    await this.dbService.remove('projeto', key);

    alert('Usuário removido com sucesso!');

    this.inicializarDados();
  }
  async deletarTarefas(key: string) {
    await this.dbService.remove('tarefas', key);

    alert('Tarefa removida com sucesso!');

    this.inicializarDados();
  }
  async presentLoading(){
    this.loading = await this.loadingController.create({ message:'Carregando...'});
    await this.loading.present();
  }

  edit(usuario) {
    usuario.isEditing = true;
  }
ngOnInit() {
}
}

