import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../models/Filters";
import Genre from "../models/Genre";
import { getGenres } from "../services/TmdbService";
import "./CriteriaForm.css";

const CriteriaForm = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(
      `/discover?${new URLSearchParams({
        with_genres: genre,
        primary_release_year: year,
      })}`
    );
  };

  useEffect(() => {
    getGenres().then((response) => setGenres(response.genres));
  }, []);

  return (
    <form className="CriteriaForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="genre">Genre: </label>
      <select
        id="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">Select</option>
        <option value="27">Horror</option>
        <option value="28">Action</option>
        <option value="18">Drama</option>
      </select>
      <label htmlFor="year" className="year">
        Year:
      </label>
      <input
        type="number"
        id="year"
        value={year}
        min="1880"
        max="2022"
        onChange={(e) => setYear(e.target.value)}
      />
      <button>Advanced Search</button>
    </form>
  );
};

export default CriteriaForm;
