import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CriteriaForm.css";

const CriteriaForm = () => {
  const navigate = useNavigate();
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(
      `/discover?${new URLSearchParams({ with_genres: genre, year: year })}`
    );
  };

  return (
    <form className="CriteriaForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="genre">Genre</label>
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
      <label htmlFor="year">Year</label>
      <input
        type="number"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button>Advanced Search</button>
    </form>
  );
};

export default CriteriaForm;
