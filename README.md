## search-observer-app

I implemented the specification for the test app here, used Next.js for rolling a React app with zero config.

## Search
- For the search part of the app I used my podcast search API to get a list of podcasts for the search term.
- The endpoint is https://data.podcst.io/search, it accepts a query parameter `term` and returns a list of podcasts.
- The podcasts are then displayed in the search results.
- SWR is utilized to fetch and cache the data.
- It also allows us to the Suspense pattern for loading and error states, but I didn't get around to use it.

## Observer
- For the observer/reducer I first wrote the type signatures for the state, reducer, dispatcher and the store.
- I then implemented a mini-redux like store and a React hook to utilize store states in components.
- It took me slightly longer than 10 minutes with the observer app not for the implementation itself but to come up with a way to showcase the observer in the UI.

> General notes: This is not my preferred way of organizing code but I was keeping the time-constraint in mind and being a bit fast and loose with it.
> A production app would follow a more structured approach and have much better accessibility.