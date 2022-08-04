import Genre from "./Genre";

export default interface SingleMovieResponse {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  runtime: number;
  release_date: string;
  vote_average: number;
  genres: Genre[];
}
