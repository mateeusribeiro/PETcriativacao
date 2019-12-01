import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ProjetocadastroPage } from './projetocadastro.page';
import { ProjetoPage } from '../projeto/projeto.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetocadastroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], 
  declarations: [ProjetocadastroPage],
  exports: [ProjetocadastroPage]
})
export class ProjetocadastroPageModule {}
