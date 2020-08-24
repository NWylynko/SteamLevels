import React, { useState, useEffect } from "react";
import Font from "react-font";

import Page from "./components/Page";
import Title from "./components/Title";
import Form from "./components/Form";
import MainBody from "./components/MainBody"
import Error from "./components/Error"
import Links from "./components/Links";

import { handleData } from './utils'

function App() {
  const [details, setDetails] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (details) {
      const { username: user, level } = details;
      fetch(`/id?user=${user}`)
        .then((res) => res.json())
        .then(json => setData(handleData(json, level)))
        .catch(setError);
    }
  }, [details]);

  return (
    <Font family="Exo 2">
      <Page>
        <Title>Steam Level Calculator</Title>
        <Form onSubmit={setDetails} />
        <Error error={error} />
        <MainBody data={data} />
        <Links />
      </Page>
    </Font>
  );
}

export default App;
