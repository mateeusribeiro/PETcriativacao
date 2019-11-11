import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'cadastros', loadChildren: './pages/cadastros/cadastros.module#CadastrosPageModule' },
  { path: 'projetocadastro', loadChildren: './pages/projetocadastro/projetocadastro.module#ProjetocadastroPageModule' },
  { path: 'noticiacadastro', loadChildren: './pages/noticiacadastro/noticiacadastro.module#NoticiacadastroPageModule' },
  { path: 'tarefacadastro', loadChildren: './pages/tarefacadastro/tarefacadastro.module#TarefacadastroPageModule' },
  { path: 'projeto', loadChildren: './pages/projeto/projeto.module#ProjetoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
