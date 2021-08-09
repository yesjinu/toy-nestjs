import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private DB: Movie[] = [];

  getAll(): Movie[] {
    return this.DB;
  }

  getOne(id: string): Movie {
    const movie = this.DB.find((movie) => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException(`Movie not found with id : ${id}`);
    }
    return movie;
  }

  addOne(data: CreateMovieDto) {
    this.DB.push({
      id: this.DB.length + 1,
      ...data,
    });
    return true;
  }

  delete(id: string) {
    this.getOne(id);
    this.DB.filter((movie) => movie.id !== parseInt(id));
  }

  update(id: string, updatedData: CreateMovieDto) {
    const movie = this.getOne(id);
    this.delete(id);
    this.DB.push({
      ...movie,
      ...updatedData,
    });

    return true;
  }
}
