import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CharacterResponse } from 'src/app/interfaces/response.type';
import { map } from 'rxjs/operators';
import { Character } from '../models/character.model';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  API_BASE_URL = 'https://rickandmortyapi.com/api';
  private characterSubject = new BehaviorSubject<Character[]>([]);
  characters$ = this.characterSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getCharacters(name: string = '', page: string = '1'): void {
    const params = {
      name,
      page
    };
    this.httpClient.get<CharacterResponse>(this.API_BASE_URL + '/character/', { params })
      .subscribe(res => {
        this.characterSubject.next(res.results);
      });
  }
}
