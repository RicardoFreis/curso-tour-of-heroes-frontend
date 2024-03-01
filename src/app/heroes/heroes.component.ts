import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  //   this.heroService.getHeroes().subscribe({
  //     next(x) {
  //       console.log('got value ' + JSON.stringify(x, null, 2));
  //     },
  //     error(err) {
  //       console.error('something wrong occurred: ' + err);
  //     },
  //     complete() {
  //       console.log('done Minhas Anotações: Executa qdo teve sucesso a requisição');
  //     },
  //   });
  // }

  // Com Função
  // getHeroes(): void {
  //   // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  //   this.heroService.getHeroes().subscribe(
  //     function (value) {
  //       console.log(value);
  //     },
  //     function (err) {
  //       console.log(err);
  //     },
  //     function () {
  //       console.log('agora foi normalmente concluído');
  //     }
  //   );
  // }

  // Com Aero Function
  // getHeroes(): void {
  //   // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  //   this.heroService.getHeroes().subscribe(
  //     (value) => {
  //       console.log(value);
  //     },
  //     (err) => {
  //       console.log(err);
  //     },
  //     () => {
  //       console.log('agora foi normalmente concluído');
  //     }
  //   );
  // }

  // Com Aero Function mais enxuto.
  // getHeroes(): void {
  //   // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  //   this.heroService.getHeroes().subscribe(
  //     (value) => console.log(value),
  //     (err) => console.log(err),
  //     () => console.log('agora foi normalmente concluído')
  //   );
  // }

  // // Com Aero Function mais enxuto aribuindo alguns valores 1, 2, 3.
  // getHeroes(): void {
  //   const observable = new Observable((subscriber) => {
  //     subscriber.next(1);
  //     subscriber.next(2);
  //     subscriber.next(3);
  //     setTimeout(() => {
  //       subscriber.next(4);
  //       subscriber.complete();
  //     }, 1000);
  //   });

  //   console.log('just before subscribe');
  //   observable.subscribe({
  //     next(x) {
  //       console.log('got value ' + x);
  //     },
  //     error(err) {
  //       console.error('something wrong occurred: ' + err);
  //     },
  //     complete() {
  //       console.log('done');
  //     },
  //   });
  //   console.log('just after subscribe');
  // }

  // Com Aero Function mais enxuto aribuindo alguns valores 1, 2, 3.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected Hero Id=${ hero.id}`);
  }
}
