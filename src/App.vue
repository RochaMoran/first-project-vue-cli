<template>
  <div id="app" class="container">
    <Header />
    <List />
    <Body />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List.vue';
import Body from './components/Body.vue';

export default {
  name: 'App',
  components: {
    Header,
    List,
    Body
  }
}
</script>