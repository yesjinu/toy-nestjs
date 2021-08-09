import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // @Param의 의미 : 우리는 파라미터에서 'id'라는 값을 원한다.
  // 이 값을 우리는 movieId라는 이름의 아규먼트로 사용할 것이다.
  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  addOne(@Body() movieData) {
    return this.moviesService.addOne(movieData);
  }

  @Delete(':id')
  delete(@Param('id') movieId: string) {
    return this.moviesService.delete(movieId);
  }

  @Patch(':id')
  update(@Param('id') movieId: string, @Body() moviedata) {
    return this.moviesService.update(movieId, moviedata);
  }
}
