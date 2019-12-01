import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjetoPage } from './projeto.page';
import { ProjetocadastroPage } from '../projetocadastro/projetocadastro.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ProjetoPage}])
  ],
  declarations: [ProjetoPage, ProjetocadastroPage],
  entryComponents: [ProjetocadastroPage]
})
export class ProjetoPageModule {}
