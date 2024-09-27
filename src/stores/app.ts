import Cookies from "js-cookie";
import { defineStore } from "pinia";

const store = defineStore({
    id: "app",
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型,如果推断失败可以试下 as xxx
            counter: 0,
            name: 'fanglin',
          }
  
      };

    // 相当于计算属性
    getters: {
      //方法名称参照官网
      //https://pinia.vuejs.org/core-concepts/getters.html#accessing-other-getters
      doubleCount: (store) => {
        return store.counter * 2
        },
    },
    // 相当于vuex的 mutation + action，可以同时写同步和异步的代码
    actions: {
        // 如果是异步
        async fnName(){
            await 
        }
    },
  
});
  
  export default store;