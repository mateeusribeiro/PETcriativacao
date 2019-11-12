
import { MenuController, LoadingController, ToastController } from '@ionic/angular';
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
  selector: 'app-projeto',
  templateUrl: './projeto.page.html',
  styleUrls: ['./projeto.page.scss'],
})
export class ProjetoPage implements OnInit {

  lista: Projetos[];
  loading: any;
  constructor(private dbService: DBService, private router: Router, public loadingController: LoadingController) {
    this.lista = [];
    this.inicializarDados();


  }
  async inicializarDados() {
    await this.presentLoading();

    this.lista = await this.dbService.listWithUIDs<Projetos>('projeto');

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
  editar() {
    this.router.navigate(['cadastros']);
  }
  ngOnInit() {
  }

}
