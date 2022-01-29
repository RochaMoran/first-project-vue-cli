<template>
  <div>
    <ol class="list-group list-group-numbered">
      <li v-for="(item, index) in frutas" :key="index" @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{item.nombre}}</div>
          {{item.description}}
        </div>
        <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
      </li>
    </ol>
    <button @click="reiniciar()" class="btn btn-primary d-block container mt-3">Reiniciar</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: "List",
  computed: {
    ...mapState(['frutas'])
  },
  methods: {
    ...mapMutations(['aumentar', 'reiniciar'])
  }
};
</script>
