import React from "react";
import Head from "next/head";
import { actions, getSearchStore } from "../data/search";
import { useStoreState } from "../data/reducer";

import styles from '../styles/Observer.module.css';

const searchStore = getSearchStore();
const { dispatch } = searchStore;

export default function ObserverPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Observer</title>
      </Head>
      <h1>Observer</h1>
      <div className={styles.searchDemo}>
        <SearchRawInput />
        <SearchControls />
        <SearchLogger />
      </div>
    </React.Fragment>
  );
}

function SearchRawInput() {
  const { searchTerm } = useStoreState(searchStore);

  const updateSearchTerm = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(actions.setSearchTerm(e.target.value));
    },
    []
  );
  return (
    <div>
      <p>Raw search updates</p>
      <input onChange={updateSearchTerm} value={searchTerm} />
    </div>
  );
}

function SearchControls() {
  const { searchTerm } = useStoreState(searchStore);

  const capitialize = React.useCallback(() => {
    dispatch(actions.capitalizeSearchTerm());
  }, []);
  const clearStore = React.useCallback(() => {
    dispatch(actions.clearSearchTerm());
  }, []);

  return (
    <div>
      <p>Controls</p>
      <button onClick={capitialize}>Capitalize</button>
      <button onClick={clearStore}>Clear store</button>

      <h2>
        <code>{searchTerm}</code>
      </h2>
    </div>
  );
}

function SearchLogger() {
  React.useEffect(() => {
    const unsubscribe = searchStore.subscribe((state) => {
      console.log("Search store changed", state);
    });
    return unsubscribe;
  }, []);
  return (
    <div>
      <p>Logger: see console for state changes</p>
    </div>
  );
}