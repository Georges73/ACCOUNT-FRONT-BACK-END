import { Component, OnInit } from '@angular/core';

import { Account } from '../account';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  accounts: Account[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(accounts => this.accounts = accounts);
  }

  add(firstname: string): void {
    firstname = firstname.trim();
    if (!name) { return; }
    this.heroService.addHero({ firstname } as Account)
      .subscribe(account => {
        this.accounts.push(account);
      });
  }

  delete(account: Account): void {
    this.accounts = this.accounts.filter(h => h !== account);
    this.heroService.deleteHero(account).subscribe();
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/