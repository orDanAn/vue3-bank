import axios from '../../axios/request'
import store from '../index'


export default {
  namespaced: true,
  state() {
    return {
      requests: []
    }
  },
  mutations: {
    setRequest(state, requests) {
      state.requests = requests;
    },
    addRequest(state, request) {
      state.requests.push(request);
    },
  },
  actions: {
    async create({commit, dispatch}, payload) {
      const token = store.getters['auth/token'];
      try {
        const {data} = await axios.post(`/requests.json?auth=${token}`, payload);
        commit('addRequest', {...payload, id: data.name})
        dispatch('setMessage', {value: 'Заявка успешно создана', type: 'primary'}, {root: true})
      } catch (e) {
        dispatch('setMessage', {value: e.message, type: 'danger'}, {root: true})

      }
    }

  },
  getters: {
    requests(state) {
      return state.requests;
    }
  }
}

