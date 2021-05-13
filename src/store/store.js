import Vue from 'vue';
import axios from 'axios'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	strict: true,
	state: {
    users: [],
    filterUsers:[],
    sortOrder:true
	},
	getters: {
    updateHomePage(state){
      return state.filterUsers
    },
	},
	mutations: {
    SET_POSTS(state, dataAPI) {
      let countryState = [];
      let stateUsers = [];

      dataAPI.forEach(element => {
        for(let i = 0; i < element.state.length; i++){
          let users = element.state[i];
          users.country = element.country;
          // Add all country is one array
          countryState.push(users);
        }
      });

      countryState.forEach(element =>{
        for(let i = 0; i < element.users.length;i++){
          var fixTime = element.users[i].registered.replace("T"," ")
          let user = element.users[i]
          user.name = element.name;
          user.country = element.country;
          user.registered = fixTime;
          // Add all users in one array
          stateUsers.push(user)
        }
      });

      state.users = stateUsers;
      state.filterUsers = state.users;
    },
    SORT_BY_NAME(state){
      let order = state.sortOrder;
      state.sortOrder = !order;
      state.filterUsers.sort(function(a,b){
        let nameA = a.fullName.toUpperCase()
        let nameB = b.fullName.toUpperCase()
        if(order){
          if (nameA < nameB) { return -1; } else { return 1 }
        } else {
          if (nameA < nameB) { return 1; } else { return -1 }
        }
      })
    },
    SORT_BY_COUNTRY(state){
      let order = state.sortOrder;
      state.sortOrder = !order;
      state.filterUsers.sort(function(a,b){
        let nameA = a.country.toUpperCase()
        let nameB = b.country.toUpperCase()
        if(order){
          if (nameA < nameB) { return -1; } else { return 1 }
        } else {
          if (nameA < nameB) { return 1; } else { return -1 }
        }
      })
    },
    SORT_BY_CITY(state){
      let order = state.sortOrder;
      state.sortOrder = !order;
      state.filterUsers.sort(function(a,b){
        let nameA = a.name.toUpperCase()
        let nameB = b.name.toUpperCase()
        if(order){
          if (nameA < nameB) { return -1; } else { return 1 }
        } else {
          if (nameA < nameB) { return 1; } else { return -1 }
        }
      })
    },
    SORT_BY_BALANCE(state){
      let order = state.sortOrder;
      state.sortOrder = !order;
      state.filterUsers.sort(function(a,b){
        var balanceA = parseFloat(a.balance.substring(1).replace(",","").replace(".",""))
        var balanceB = parseFloat(b.balance.substring(1).replace(",","").replace(".",""))
        if(order){
          return balanceA - balanceB
        } else {
          return balanceB - balanceA
        }
      });
    },
    SORT_BY_IS_ACTIVE(state){
      let order = state.sortOrder;
      state.sortOrder = !order;
      state.filterUsers.sort(function(x,y){
        if(order){
          return (x.isActive === y.isActive) ? 0 : x.isActive ? 1 : -1;
        } else {
          return (x.isActive === y.isActive) ? 0 : x.isActive ? -1 : 1;
        }
      });
    },
    SORT_BY_DATE(state){
      let order = state.sortOrder;
      state.sortOrder = !order;
      state.filterUsers.sort(function(a,b){
        var registeredA = a.registered; 
        var registeredB = b.registered; 
        if(order){
          return new Date(registeredB) - new Date(registeredA);
        } else {
          return new Date(registeredA) - new Date(registeredB);
        }
      });
    },
    FILTER_BY_ACTIVE(state, payload){
      let byActive;
      // state.filterUsers = state.users;
      if(payload == true){
        byActive = state.users.filter(a => {
          return a.isActive == true
        });
      } else if (payload == false){
        byActive = state.users.filter(a => {
          return a.isActive == false
        });
      } else {
        byActive = state.users;
      }
      state.filterUsers = byActive;
    },
    FILTER_BY_NAME(state,payload){
      if(payload){
        state.filterUsers = state.users
        return state.filterUsers = state.filterUsers.filter(name => {
          return name.fullName.toLowerCase().match(payload)
        })
      } else {
        state.filterUsers = state.users
      } 
    },
    FILTER_BY_COUNTRY(state,payload){
      if(payload){
        state.filterUsers = state.users
        return state.filterUsers = state.filterUsers.filter(item => {
          return item.country.toLowerCase().match(payload)
        })
      } else {
        state.filterUsers = state.users
      } 
    },
    FILTER_BY_STATE(state,payload){
      if(payload){
        state.filterUsers = state.users
        return state.filterUsers = state.filterUsers.filter(item => {
          return item.name.toLowerCase().match(payload)
        })
      } else {
        state.filterUsers = state.users
      } 
    },
    FILTER_BY_REGISTERED(state,payload){
      if(payload){
        state.filterUsers = state.users
        return state.filterUsers = state.filterUsers.filter(item => {
          return item.registered.toLowerCase().match(payload)
        })
      } else {
        state.filterUsers = state.users
      } 
    },
    FILTER_BY_BALANCE(state,payload){
      if(payload){
        state.filterUsers = state.users
        return state.filterUsers = state.filterUsers.filter(item => {
          return item.balance.toLowerCase().match(payload)
        })
      } else {
        state.filterUsers = state.users
      } 
    }
	},
	actions: {
    getPosts({ commit }) {
      axios.get('https://fww-demo.herokuapp.com/')
      .then(response => {
        commit('SET_POSTS', response.data)
      })
    }
	}
});
//axios.get('https://fww-demo.herokuapp.com/').then(response => (this.info = response.data))