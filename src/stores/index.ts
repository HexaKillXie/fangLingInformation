import appStore from "./app";


export { appStore };

export default {
  initStore() {
    return {
      appStore: appStore(),
    };
  },
};