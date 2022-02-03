<template>
    <div class="container">
        <h1>Home</h1>
        <Header />
        <List />
        <Body />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Body from '../components/Body.vue'
import List from '../components/List.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Body,
        List
    }
}
</script>