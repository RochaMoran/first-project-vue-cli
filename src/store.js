import Vue from "vue";
import Vuex from "vuex"

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
        ]
    },
    mutations: {
        aumentar(state, i) {
            state.frutas[i].cantidad++;
        },
        reiniciar(state) {
            state.frutas.forEach(item => {
                item.cantidad = 0
            });
        }
    },
    actions: {

    }
})