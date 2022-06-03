import React, { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})`
  color: blue;
  text-decoration-line: underline;
  font-family: monospace;
`;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: auto;
  padding: 30px;
  max-width: 720px;
  background-color: grey;
  margin-top: 2rem;
  border-radius: 40px;
`;

const Label = styled.label`
  margin: 5px;
  color: cyan;
  font-family: cursive;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

const MoviesUpdate = () => {
  const initial = {
    id: useParams().id,
    name: "",
    rating: "",
    time: "",
  };

  const [state, setState] = useState(initial);

  const handleChangeInputName = (event) => {
    const name = event.target.value;
    setState((prevState) => {
      return { ...prevState, name };
    });
  };

  const handleChangeInputRating = async (event) => {
    const rating = event.target.validity.valid
      ? event.target.value
      : state.rating;

    setState((prevState) => {
      return { ...prevState, rating };
    });
  };

  const handleChangeInputTime = async (event) => {
    const time = event.target.value;
    setState((prevState) => {
      return { ...prevState, time };
    });
  };

  const handleUpdateMovie = async () => {
    const { id, name, rating, time } = state;

    const arrayTime = time.split("/");
    const payload = { name, rating, time: arrayTime };

    await api.updateMovieById(id, payload).then((res) => {
      window.alert(`Movie updated successfully`);
      setState({
        name: "",
        rating: "",
        time: "",
      });
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    const { id } = state;

    const movie = await api.getMovieById(id);
    setState({
      id: id,
      name: movie.data.data.name,
      rating: movie.data.data.rating,
      time: movie.data.data.time.join("/"),
    });
  }

  const { name, rating, time } = state;
  return (
    <Wrapper>
      <Title>Create Movie</Title>

      <Label>Name: </Label>
      <InputText type='text' value={name} onChange={handleChangeInputName} />

      <Label>Rating: </Label>
      <InputText
        type='number'
        step='0.1'
        lang='en-US'
        min='0'
        max='10'
        pattern='[0-9]+([,\.][0-9]+)?'
        value={rating}
        onChange={handleChangeInputRating}
      />

      <Label>Time: </Label>
      <InputText type='text' value={time} onChange={handleChangeInputTime} />

      <Button onClick={handleUpdateMovie}>Update Movie</Button>
      <CancelButton href={"/movies/list"}>Cancel</CancelButton>
    </Wrapper>
  );
};

export default MoviesUpdate;
