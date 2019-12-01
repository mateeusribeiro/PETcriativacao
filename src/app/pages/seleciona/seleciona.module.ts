import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelecionaPage } from './seleciona.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelecionaPage],
  exports: [SelecionaPage]
})
export class SelecionaPageModule {}
