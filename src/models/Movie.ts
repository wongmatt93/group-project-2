export default interface Movie {
  id: number;
  title: string;
  adult: boolean;
  overview: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  genre_id: number[];
}
