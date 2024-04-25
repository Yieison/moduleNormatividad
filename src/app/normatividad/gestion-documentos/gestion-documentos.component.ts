// gestion-documentos.component.ts
import { Component, OnInit } from '@angular/core';
import { DocumentosService } from '../documentos.service';
import { Documento } from '../documento.model';

@Component({
  selector: 'app-gestion-documentos',
  templateUrl: './gestion-documentos.component.html',
  styleUrls: ['./gestion-documentos.component.css']
})
export class GestionDocumentosComponent implements OnInit {
  documento: Documento = { id: 0, nombre: '', contenido: '' }; // Estructura básica del documento

  constructor(private documentosService: DocumentosService) {}

  ngOnInit(): void {
    // Inicializar cualquier dato necesario
  }

  guardarDocumento() {
    // Guardar un nuevo documento o actualizar uno existente
    if (this.documento.id === 0) {
      this.documentosService.createDocumento(this.documento).subscribe();
    } else {
      this.documentosService.updateDocumento(this.documento).subscribe();
    }
  }

  eliminarDocumento() {
    if (this.documento.id > 0) {
      this.documentosService.deleteDocumento(this.documento.id).subscribe();
    }
  }
}
