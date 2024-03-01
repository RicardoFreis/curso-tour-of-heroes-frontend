import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import {HEROES} from './mock-heroes'
import { Observable, of, throwError } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;

    // Simulação de erro usando codigo do site https://rxjs.dev/guide/observable
    // return throwError(new Error('Ocorreu um problema'));
  }
}  
