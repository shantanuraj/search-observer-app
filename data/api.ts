import { IPodcastSearchResult } from "../types";

const API_URL = "https://data.podcst.app";

export const Api = {
  request: <T>(url: URL): Promise<T | Error> =>
    fetch(url as any).then((res) => res.json()),

  search: (term: string) => {
    const url = new URL(API_URL);
    url.pathname = "/search";
    url.searchParams.set("term", term);
    return Api.request<IPodcastSearchResult[]>(url);
  },
};
