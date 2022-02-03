<template>
  <div>
    <ul v-for="(item, i) of data" :key="i">
        <li>
            <router-link :to="{name: 'service', params: {id: item.id}}">{{item.body}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    ...mapActions(["getData"]),
  },
  created() {
    this.getData();
  },
};
</script>
