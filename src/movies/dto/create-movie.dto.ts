import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString() // validation pipe가 검사하고 있는 것
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
