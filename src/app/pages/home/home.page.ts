
import { MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from 'src/app/entities/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Projetos } from 'src/app/entities/projetos';

import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [DBService]
})
export class HomePage implements OnInit {

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
  telaProj() {
    this.router.navigate(['projetocadastro']);
  }
  telaNotic() {
    this.router.navigate(['noticiacadastro']);
  }
  telaTarefa() {
    this.router.navigate(['tarefacadastro']);
  }
  async deletar(key: string) {
    await this.dbService.remove('projeto', key);

    alert('Usuário removido com sucesso!');

    this.inicializarDados();
  }

  edit(usuario) {
    usuario.isEditing = true;
  }
  cadastrar() {
    this.router.navigate(['cadastros']);
  }
  async navegar(){
    await this.presentLoading();

    this.router.navigate(['projeto']);
    
    await this.hideLoading();
  }
  ngOnInit() {
  }
}


