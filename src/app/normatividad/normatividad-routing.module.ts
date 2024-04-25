import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';
import { GestionDocumentosComponent } from './gestion-documentos/gestion-documentos.component';

const routes: Routes = [
  { path: 'lista', component: ListaDocumentosComponent },
  { path: 'gestion', component: GestionDocumentosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormatividadRoutingModule { }