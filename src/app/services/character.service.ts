import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from 'src/app/interfaces/response.type';
import { map } from 'rxjs/operators';
import { Character } from '../models/character.model';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  API_BASE_URL = 'https://rickandmortyapi.com/api';
  constructor(private httpClient: HttpClient) { }
  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<CharacterResponse>(this.API_BASE_URL + '/character/')
      .pipe(map(res => res.results));
  }
}
