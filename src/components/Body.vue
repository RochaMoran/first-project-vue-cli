<template>
    <div class="container d-flex justify-content-center flex-column align-items-center">
        <h1 class="title m-5">DATA OF A API</h1>

        <div v-if="data.length > 0">
            <ul v-for="item in data" :key="item.id">
               <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">USERID</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">{{item.id}}</th>
                        <td>{{item.userId}}</td>
                        <td>{{item.title}}</td>
                        <td style="width: 40%">{{item.body}}</td>
                        </tr>
                    </tbody>
                </table>
            </ul>
        </div>
        <p v-else>cargando</p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['data'])
    },
    methods: {
        ...mapActions(['getData'])
    },
    created() {
        this.getData();
    },
}
</script>

<style scoped>
    .header-image {
        width: 100px;
    }
</style>