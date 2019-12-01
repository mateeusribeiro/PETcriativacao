import { Component, OnInit } from '@angular/core';
import { Projetos} from 'src/app/entities/projetos';
import { User} from 'src/app/entities/user';
import { LoadingController, NavController } from '@ionic/angular';
import { DBService } from 'src/app/services/db.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-telaproj',
  templateUrl: './telaproj.page.html',
  styleUrls: ['./telaproj.page.scss'],
  providers: [DBService]
})
export class TelaprojPage implements OnInit {
  
  lista: Projetos[];
  listaUser: User[];
    loading: any;

  constructor(private dbService: DBService, private router: Router,public loadingController: LoadingController,private nvCtrl: NavController,) {
    this.lista = [];
    this.listaUser=[];
    this.inicializarDados();
   }
   async inicializarDados() {
    await this.presentLoading();

    this.lista = await this.dbService.listWithUIDs<Projetos>('projeto');

    await this.hideLoading();

  }
  async inicializarUser() {
    await this.presentLoading();

    this.listaUser = await this.dbService.listWithUIDs<User>('usuarios');

    await this.hideLoading();

  }
  back() {
    this.nvCtrl.navigateBack;
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();

  }
  async hideLoading() {
    this.loading.dismiss();
  }

  ngOnInit() {
  }

}
