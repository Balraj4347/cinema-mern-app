import React, { useState, useEffect } from "react";
import api from "../api";
import "./MovieList.css";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;
const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

const UpdateMovie = (props) => {
  const updateUser = (event) => {
    event.preventDefault();

    window.location.href = `/movies/update/${props.id}`;
  };
  return (
    <>
      <Update onClick={updateUser}>Update</Update>
    </>
  );
};

const DeleteMovie = (props) => {
  const deleteUser = (event) => {
    event.preventDefault();
    if (
      window.confirm(`Do tou want to delete the movie ${props.id} permanently?`)
    ) {
      api.deleteMovieById(props.id);
      window.location.reload();
    }
  };

  return <Delete onClick={deleteUser}>Delete</Delete>;
};

const MoviesList = (props) => {
  const scheme = {
    movies: [],
    columns: [],
    isLoading: false,
  };
  const [state, setState] = useState(scheme);

  useEffect(() => {
    datafetch();
  }, []);

  async function datafetch() {
    setState((prevState) => {
      return { ...prevState, isLoading: true };
    });
    await api.getAllMovies().then((moviess) => {
      setState((prevState) => {
        return { ...prevState, movies: moviess.data.data, isLoading: false };
      });
    });
  }

  const { movies, isLoading } = state;

  let showTable = true;
  if (movies !== undefined && !movies.length) {
    showTable = false;
  }

  return (
    <Wrapper>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Movie Timing</th>
              <th>Movie Rating</th>
              <th colSpan={2} style={{ marginLeft: "50%" }}>
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((data) => {
              return (
                <tr key={data._id}>
                  <td>{data.name}</td>
                  <td>
                    {data.time.map((element) => {
                      return <span key={element}>| {element} |</span>;
                    })}
                  </td>
                  <td>{data.rating}</td>
                  <td>
                    <DeleteMovie id={data._id} />
                  </td>
                  <td>
                    <UpdateMovie id={data._id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Wrapper>
  );
};
export default MoviesList;
