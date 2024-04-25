// documentos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documento } from './documento.model'; // modelo para documentos normativos

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  private baseUrl = 'https://api-tu-servidor.com/normatividad'; // Cambia esta URL a la dirección de tu backend

  constructor(private http: HttpClient) {}

  // Obtener la lista de documentos
  getDocumentos(): Observable<Documento[]> {
    return this.http.get<Documento[]>(`${this.baseUrl}/documentos`);
  }

  // Crear un nuevo documento
  createDocumento(documento: Documento): Observable<Documento> {
    return this.http.post<Documento>(`${this.baseUrl}/documentos`, documento);
  }

  // Editar un documento existente
  updateDocumento(documento: Documento): Observable<Documento> {
    return this.http.put<Documento>(`${this.baseUrl}/documentos/${documento.id}`, documento);
  }

  // Eliminar un documento
  deleteDocumento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/documentos/${id}`);
  }
}
