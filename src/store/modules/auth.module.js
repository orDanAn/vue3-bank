import axios from 'axios'
import FB_KEY from '../../FB_KEY'
import { error } from '../../utils/error'
const TOKEN_KEY = 'jwt-token'


export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY)
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },

    logout(state) {
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
    }
  },
  actions: {
    // пароль 123456789 логин test@test.ru
    async login({ commit, dispatch }, user) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FB_KEY}`
        const {data} = await axios.post(url, {...user, returnSecureToken: true})
        commit('setToken', data.idToken)
        commit('clearMessage', null, {root: true})
      } catch (e) {
        console.log(error(e.response.data.error.message));
        dispatch('setMessage', {
          value: error(e.response.data.error.message),
          type: 'danger',
        }, {root: true});
        throw new Error();
      }

    },
  },
  getters: {
    token(state) {
      return state.token
    },
    isAuthenticated(state) {
      return !!state.token
    }
  }

}
