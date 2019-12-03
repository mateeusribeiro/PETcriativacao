import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'cadastros', loadChildren: './pages/cadastros/cadastros.module#CadastrosPageModule' },
  { path: 'projetocadastro', loadChildren: './pages/projetocadastro/projetocadastro.module#ProjetocadastroPageModule' },
  { path: 'noticiacadastro', loadChildren: './pages/noticiacadastro/noticiacadastro.module#NoticiacadastroPageModule' },
  { path: 'tarefacadastro', loadChildren: './pages/tarefacadastro/tarefacadastro.module#TarefacadastroPageModule' },
  { path: 'projeto', loadChildren: './pages/projeto/projeto.module#ProjetoPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'perfis', loadChildren: './pages/perfis/perfis.module#PerfisPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'tarefa', loadChildren: './pages/tarefa/tarefa.module#TarefaPageModule' },
  { path: 'noticia', loadChildren: './pages/noticia/noticia.module#NoticiaPageModule' },
  { path: 'seleciona', loadChildren: './pages/seleciona/seleciona.module#SelecionaPageModule' },
  { path: 'telaproj', loadChildren: './pages/telaproj/telaproj.module#TelaprojPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
