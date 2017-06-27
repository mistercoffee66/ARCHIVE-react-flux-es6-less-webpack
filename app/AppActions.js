import dispatcher from "./AppDispatcher";

export function windowResize() {
  dispatcher.dispatch({
    type: 'WINDOW_RESIZE'
  });
}