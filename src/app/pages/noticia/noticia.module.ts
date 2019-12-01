import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticiaPage } from './noticia.page';
import { NoticiacadastroPage } from '../noticiacadastro/noticiacadastro.page';


const routes: Routes = [
  {
    path: '',
    component: NoticiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticiaPage, NoticiacadastroPage],
  entryComponents: [NoticiacadastroPage]
})
export class NoticiaPageModule {}
