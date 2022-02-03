<template>
<div>
   <h1 class="text-primary text-center">{{data.title}}</h1>
   <p>Service: {{data.body}}</p>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
   computed: {
      ...mapState(['data'])
   },
   methods: {
      ...mapActions(['getEspecificData']),
      getData () {
         this.getEspecificData(this.$route.params.id)
      }
   },
   created () {
     this.getData()
   }
}
</script>