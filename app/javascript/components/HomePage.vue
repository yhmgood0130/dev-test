<template>
  <div class="home">
    <div>
      <img class="logo" src=""  aria-hidden="true" />
    </div>
    <div class="get-started">
      <router-link to="/build">Get started</router-link> find your first offer!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.logo {
  height: 300px;
}
.get-started {
  padding-top: 20px;
  font-size: 25px;
}
</style>
