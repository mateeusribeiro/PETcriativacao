import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { DBService } from 'src/app/services/db.service';
import {LoginPage} from '../login/login.page';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
  providers: [DBService]
})
export class CadastrosPage {

  newUser: User;

  lista: User[];

  constructor(private dbService: DBService, private router: Router) { 
    this.lista= [];
    this.newUser= new User();
    this.inicializarUsuarios();
  }

  async inicializarUsuarios() {
    this.lista = await this.dbService.listWithUIDs<User>('usuarios');
  }

    adicionarUsuario() {
      alert('Usuário cadastrado com sucesso!');
  
      this.dbService.insertInList('usuarios', this.newUser);
  
      this.newUser = new User();
    }
    slidemenu(){
      this.router.navigate(['app.component']);
    }
    voltar(){
      this.router.navigate(['login']);
    }
  

}

