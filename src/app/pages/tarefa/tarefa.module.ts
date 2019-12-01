import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TarefacadastroPage } from '../tarefacadastro/tarefacadastro.page';

import { TarefaPage } from './tarefa.page';
import { SelecionaPage } from '../seleciona/seleciona.page';

const routes: Routes = [
  {
    path: '',
    component: TarefaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TarefaPage, TarefacadastroPage, SelecionaPage],
  entryComponents: [TarefacadastroPage, SelecionaPage]
})
export class TarefaPageModule {}
