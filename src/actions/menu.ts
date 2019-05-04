import { getTopicList } from './topiclist';

export function showDrawer() {
  return dispatch => {
    dispatch({ type: 'SHOW_DRAWER' })
  }
}

export function hideDrawer() {
  return dispatch => {
    dispatch({ type: 'HIDE_DRAWER' })
  }
}

export function changeCata(cata) {
  return dispatch => {
    dispatch({ type: 'CHANGE_CATA', currentCata: cata })
    dispatch(getTopicList({ page: 1, tab: cata.key }, true))
  }
}