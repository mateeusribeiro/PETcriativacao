import { Component, OnInit } from '@angular/core';
import { Projetos } from 'src/app/entities/projetos';
import { DBService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
import { MenuController, LoadingController, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-seleciona',
  templateUrl: './seleciona.page.html',
  styleUrls: ['./seleciona.page.scss'],
  providers: [DBService]
})
export class SelecionaPage implements OnInit {
  lista: Projetos[];
  loading: any;
  
  constructor(private dbService: DBService, private router: Router, public loadingController: LoadingController,private modalController: ModalController) {
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
  ngOnInit() {
  }

}
