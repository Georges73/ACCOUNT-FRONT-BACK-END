import { Injectable } from '@angular/core';
import { Account } from './account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

// his marks the class as one that participates in the dependency injection system.


interface GetResponse {
  _embedded: {
    accounts: Account[];
    _links: {self: {href: string}};
  };
}

const httpOptions: { headers: HttpHeaders } = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {



  // public API = '//localhost:8080';
  // public PRODUCT_API = this.API + '/api';
  // public SEARCH_API = this.PRODUCT_API + '/search';
  // public SEARCH_FULL_API = this.PRODUCT_API + '/searchfull';

  private heroesUrl = 'http://localhost:8080/api';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  constructor(
    private http: HttpClient,
    private messageService: MessageService) {

  }


  searchHeroes(term: string): Observable<Account[]> {

    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Account[]>(`${this.heroesUrl + '/findByFName'}/?firstname=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Account[]>('searchHeroes', []))
    );
  }


// *********************************************************************
getHero(id: number): Observable<Account> {

  const url = `${this.heroesUrl}/findById/?id=${id}`;
  return this.http.get<Account>(url).pipe(
    tap(_ => this.log(`fetched account id=${id}`)),
    catchError(this.handleError<Account>(`getHero id=${id}`))
  );
}

// HeroService.getHeroes() must have an asynchronous signature of some kind.
// this is the main entry point for the DATA to this app
// To catch errors, you "pipe" the observable result from http.get() through an RxJS catchError() operator.
// The HeroService methods will tap into the flow of observable values and send a message, via the log() method,
// to the message area at the bottom of the page.
getHeroes(): Observable<Account[]> {
  return this.http.get<Account[]>(this.heroesUrl + '/findAll')
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Account[]>('getHeroes', []))
    );
}



  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // The heroes web API expects a special header in HTTP save requests.
  // That header is in the httpOptions constant defined in the HeroService.
  updateHero(account: Account): Observable<any> {
    const url = `${this.heroesUrl}/${account.id}`;
    return this.http.put(url, account, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${account.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

/** POST: add a new hero to the server */
addHero(account: Account): Observable<Account> {
  return this.http.post<Account>(this.heroesUrl, account, this.httpOptions).pipe(
    tap((newHero: Account) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Account>('addHero'))
  );
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** DELETE: delete the hero from the server */
deleteHero(account: Account | number): Observable<Account> {
  const id = typeof account === 'number' ? account : account.id;
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Account>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted account id=${id}`)),
    catchError(this.handleError<Account>('deleteHero'))
  );
}


}
