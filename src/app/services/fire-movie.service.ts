import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireMovieService {
  
  constructor(private fireService: AngularFirestore) { 
    
  }
  getMovies$(): Observable<Movie[]>{
    return this.fireService.collection('movies').valueChanges();
  }
  getMoviesId$(id): Observable<Movie[]>{
    return this.fireService.collection('movies')
  }

  create(movie:Movie): Promise<void> {
    return this.fireService.collection<Movie>('movies').doc(movie.id.toString()).set(movie);
  }
}
