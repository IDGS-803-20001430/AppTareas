import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ITarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private _endpoint: string = environment.endPoint;
  private _apiurl: string = this._endpoint + "Tareas/";
  constructor(private httpClient: HttpClient) { }

  //Método para invocar al endpoint de ListarTareas
  getList(): Observable<ITarea>{
    return this.httpClient.get<ITarea>(`${this._apiurl}ListarTareas`);
  }

  //Método para invocar al endpoint de AgregarTareas
  add(request_: ITarea): Observable<ITarea>{
    return this.httpClient.post<ITarea>(`${this._apiurl}AgregarTarea`,request_);
  }

  //Método para invocar al endpoint de EliminarTareas
  delete(idTarea: number): Observable<ITarea>{
    return this.httpClient.delete<ITarea>(`${this._apiurl}EliminarTarea/${idTarea}`);
  }
}
