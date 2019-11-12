import { MenuController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from 'src/app/entities/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Projetos } from 'src/app/entities/projetos';
import { Tarefas } from 'src/app/entities/tarefas';
import { ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';


import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  providers: [DBService]
})
export class TabsPage {

  lista: Projetos[];
  listaTarefas: Tarefas[];
  loading: any;

  constructor(private dbService: DBService, private router: Router, public loadingController: LoadingController, public toastController: ToastController) {
    this.inicializarDados();
    this.lista = [];
    this.listaTarefas= [];
  } 
    async inicializarDados() {
      this.lista = await this.dbService.listWithUIDs<Projetos>('projeto');
      this.listaTarefas = await this.dbService.listWithUIDs<Tarefas>('tarefas');
     
    }
  
  cadastrar(){
    this.router.navigate(['cadastros']);
}
}
