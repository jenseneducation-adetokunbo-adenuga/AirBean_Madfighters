import Vue from 'vue'
import Vuex from 'vuex'
import {getMenu} from '../api/Index.js'; 
import {postOrder} from '../api/Index.js'; 

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cart: [],
    menu: [],
    order: {}, 
    showMenu: false,
    showCart: false 
  },
  mutations: {
    addToMenu: (state, data) => (state.menu = data),
    
    addToOrder: (state, data) => (state.order = data),

    toggleMenu(state) {
      state.showMenu = !state.showMenu
    },

    showCart(state) {
      state.showCart = !state.showCart
    },

    hideCart(state) {
      !state.showCart
    },

    
    addToCart(state, item) {
      
      state.cart.push({
        id: item.id , //getting duplicate error
        price: item.price,
        title: item.title,
        quantity: 1
      });
    },
    removeFromCart(state, id) {
      let index = state.cart.findIndex(item => item.id === id);
      state.cart.splice(index, 1);
    },
<<<<<<< HEAD
    updateItem(state, id) {
      let index = state.cart.findIndex(item => item.id === id);
      console.log( "updateItem ran " . item)
=======
    updateItem(state, item) {
      let index = state.cart.findIndex(i => item === i.id);
>>>>>>> e908296c420160d4ef7e89aa5d884964b66f1096
      state.cart[index].quantity++;
    }
  },

  actions: {

      async getApiMenu({commit}) {
        const data = await getMenu();
        commit("addToMenu", data);
        return true;
      },

      async getApiOrder({commit}) {
        const data = await postOrder();
        commit("addToOrder", data);
        return true;
      },
      
<<<<<<< HEAD
      addItem({commit, state}, item) {
        let index = item.id
        if(state.cart.find(i => i.id === item.id)) {
          commit("updateItem", index);
        }else{
          commit("addToCart", item);
        }
      }
=======
          addItem({commit, state}, item) {
            let index = item.id
            if(state.cart.find(i => i.id === item.id)) {
              commit("updateItem", index);
            }else{
              commit("addToCart", item);
            }
          }
>>>>>>> e908296c420160d4ef7e89aa5d884964b66f1096

 
          // addItem({context, state}, item) {
          //   let index = find(state.cart, ['id', item.id]);
          //   if(index >= 0){
          //   context.commit("updateItem", index);
          // } else {
          //   context.commit("addToCart", item);
          // }
          // } 
          
        },

  getters: {
     cartItemCount: (state) => {
      return state.cart.length;
    },

    total: state => {
        if (state.cart.length > 0) {
          return state.cart
            .map(item => item.price)
            .reduce((total, amount) => total + amount);
        } else {
          return 0;
        }
      }

  },


})