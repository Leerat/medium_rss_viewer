import { createSelector } from 'reselect'

const getSearch = state => state.search

export const getArticles = createSelector(
  getSearch,
  search => search.result?.item
)

export const isSearching = createSelector(
  getSearch,
  search => search.isFetching
)

export const getChannel = createSelector(
  getSearch,
  search => ({
    title: search.result?.title,
    desc: search.result?.description,
    link: search.result?.link[0],
    image: search.result?.image.url,
  })
)
