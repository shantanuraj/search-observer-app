import { getStore } from "./reducer";

export const actions = {
  setSearchTerm: (searchTerm: string) =>
    ({
      type: "SET_SEARCH_TERM",
      payload: searchTerm,
    } as const),
  clearSearchTerm: () =>
    ({
      type: "CLEAR_SEARCH_TERM",
    } as const),
  capitalizeSearchTerm: () =>
    ({
      type: "CAPITALIZE_SEARCH_TERM",
    } as const),
};

type SearchState = { searchTerm: string };

type SearchActions =
  | ReturnType<typeof actions.setSearchTerm>
  | ReturnType<typeof actions.clearSearchTerm>
  | ReturnType<typeof actions.capitalizeSearchTerm>;

export const getSearchStore = () => getStore<SearchState, SearchActions>(
  {
    searchTerm: "",
  },
  (state, actions) => {
    switch (actions.type) {
      case "SET_SEARCH_TERM":
        return {
          searchTerm: actions.payload,
        };
      case "CLEAR_SEARCH_TERM":
        return {
          searchTerm: "",
        };
      case "CAPITALIZE_SEARCH_TERM":
        return {
          searchTerm: state.searchTerm.toUpperCase(),
        };
    }
  }
);
