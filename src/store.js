import Vue from "vue";
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        frutas: [
            {
                nombre: 'Manzana', cantidad: 0, description: "Muy sabrosaaa"
            },
            {
                nombre: 'Pera', cantidad: 0, description: "Nutrientes naturales"
            },
            {
                nombre: 'Naranja', cantidad: 0, description: "Vitamina C y proteinas naturales"
            },
        ],
        data: []
    },
    mutations: {
        aumentar(state, i) {
            state.frutas[i].cantidad++;
        },
        reiniciar(state) {
            state.frutas.forEach(item => {
                item.cantidad = 0
            });
        },
        fullData(state, data) {
            state.data = data;
        }
    },
    actions: {
        async getData ({commit}) {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
            commit('fullData', resp.data)
        },
        async getEspecificData ({commit}, id) {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            commit('fullData', resp.data)
        }
    }
})