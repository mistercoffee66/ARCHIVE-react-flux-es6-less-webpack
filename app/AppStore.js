import { EventEmitter } from "fbemitter";
import dispatcher from "./AppDispatcher";
import { viewport } from './helpers/utils';

class AppStore extends EventEmitter {

  windowResize() {
    this.viewport = viewport();
    this.emit('windowResize');
  }

  handleActions(action) {
    switch (action.type) {
      case 'WINDOW_RESIZE': {
        this.windowResize();
        break;
      }
    }
  }

}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;