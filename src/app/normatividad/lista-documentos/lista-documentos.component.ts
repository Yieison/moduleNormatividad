// lista-documentos.component.ts
import { Component, OnInit } from '@angular/core';
import { DocumentosService } from '../documentos.service';
import { Documento } from '../documento.model'; // modelo para documentos normativos

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent implements OnInit {
  documentos: Documento[] = [];

  constructor(private documentosService: DocumentosService) {}

  ngOnInit(): void {
    this.documentosService.getDocumentos().subscribe(data => {
      this.documentos = data;
    });
  }

  // Acción para ir al componente de gestión
  irAGestionar(documento: Documento) {
    // Lógica para redirigir al componente de gestión
  }
}
