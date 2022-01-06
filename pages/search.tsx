import Head from "next/head";
import React from "react";
import useSWR from "swr";

import { Api } from "../data/api";

import styles from "../styles/Search.module.css";

const DEBOUNCE_INTERVAL = 300;

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, DEBOUNCE_INTERVAL);
  const { data, error, isValidating } = useSWR(debouncedSearchTerm || null, Api.search);
  const updateSearchTerm = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );
  return (
    <React.Fragment>
      <Head>
        <title>Search</title>
      </Head>
      <h1>Search</h1>
      <input
        onChange={updateSearchTerm}
        autoComplete="off"
        aria-label="Search podcasts"
        type="text"
        placeholder="Search podcasts"
      />
      {error && <p>Error getting results</p>}
      {!data && isValidating && <p>Loading...</p>}
      {data && Array.isArray(data) && (
        <ul className={styles.searchResults}>
          {data.map((podcast) => (
            <li key={podcast.id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={podcast.thumbnail}
                alt={`Cover photo for ${podcast.title}`}
                loading="lazy"
                height={75}
                width={75}
              />
              <div>
                <p>{podcast.title}</p>
                <small>{podcast.author}</small>
              </div>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}

function useDebouncedValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
}
