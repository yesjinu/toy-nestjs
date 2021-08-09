import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  // DB와의 쿼리를 다룰 것이다.
  private DB: Movie[] = [
    {
      id: 1,
      title: 'Tenet',
      year: 2020,
      genres: ['Brain', 'exciting'],
    },
    {
      id: 2,
      title: '과속스캔들',
      year: 2008,
      genres: ['Funny'],
    },
  ];

  getAll(): Movie[] {
    return this.DB;
  }

  getOne(id: string): Movie {
    return this.DB.find((movie) => movie.id === parseInt(id));
  }

  addOne(data: Movie) {
    this.DB.push({ ...data });
    return true;
  }

  delete(id: string): boolean {
    this.DB.filter((movie) => movie.id !== parseInt(id));
    return true;
  }

  update(id: string, data: Omit<Movie, 'id'>): boolean {
    this.DB.push({
      id: parseInt(id),
      ...data,
    });

    return true;
  }
}
