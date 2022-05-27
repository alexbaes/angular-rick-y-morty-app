import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character');
  }

  getCharacterById(id: string | null): Observable<Character> {
    return this.http.get<Character>(
      'https://rickandmortyapi.com/api/character/' + id
    );
  }
}
