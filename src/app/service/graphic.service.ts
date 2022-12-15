import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CommentCard, CommentsList } from '../model/comment-card.model';
import { Graphic, GraphicList } from '../model/graphic.model';

const baseUrl= 'http://localhost:3000/api/cards'

@Injectable({
  providedIn: 'root'
})
export class GraphicService {

  constructor(private httpClient: HttpClient) { }
  getAll(params?:any): Observable<GraphicList> {
    let options = {}
    if(params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || '')
          .set('pageSize', params.pageSize || '')
      }
    }
    return this.httpClient.get(baseUrl, options).pipe(map((data:any)=> {
      return new GraphicList(data)
    }))
  }

  getId(id:number,params?:any): Observable<CommentsList> {
    let options = {}
    if(params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
      }
    }
    return this.httpClient.get(`${baseUrl}/${id}/comments`,options).pipe(map((data:any)=> {
      return new CommentsList(data)
    }))
  }

  postComment(input: CommentCard):Observable<CommentCard> {
    return this.httpClient.post(`${baseUrl}/${input.cards}/comments`,input).pipe(map((data:any) => {
      return new CommentCard(data)
    }))
  }

  putGrade(id:number, card: Graphic): Observable<Graphic> {
    return this.httpClient.put(`${baseUrl}/${id}`,card).pipe(map((data:any)=> {
      return new Graphic(data)
    }))
  }
}
