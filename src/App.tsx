import React from "react";
import styles from "./App.module.css";
import { Header, Container } from "./pages";
import { useState, useEffect } from "react";
import { JOKE_STATE, Joke } from "./types";

const JOKE_REQUEST = "https://karljoke.herokuapp.com/jokes/random";

function App() {
  const [currentState, setCurrentState] = useState<JOKE_STATE>(
    JOKE_STATE.STATE_LOADING
  );
  const [loadingError, setLoadingError] = useState<boolean>(false);
  const [joke, setJoke] = useState<undefined | Joke>();

  const loadJoke = async () => {
    setCurrentState(JOKE_STATE.STATE_LOADING);
    setLoadingError(false);
    try {
      const response = await fetch(JOKE_REQUEST);
      setJoke(await response.json());
      setCurrentState(JOKE_STATE.STATE_DONE);
    } catch (err) {
      setCurrentState(JOKE_STATE.STATE_DONE);
      setLoadingError(true);
    }
  };

  useEffect(() => {
    loadJoke();
  }, []);
  return (
    <div className={styles.App}>
      <Header
        onGetNewJoke={() => {
          loadJoke();
        }}
      />
      <Container
        joke={joke}
        currentState={currentState}
        errorOccured={loadingError}
      />
    </div>
  );
}

export default App;
