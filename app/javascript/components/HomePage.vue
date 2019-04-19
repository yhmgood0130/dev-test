<template>
  <div class="home">
    <div class="get-started">
      <img class="main-logo" src="https://liferewarded.com/wp-content/uploads/2018/02/life-rewarded_blog_logo-02.png">
      <router-link to="/offers">Click here</router-link> to find your first offer!
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  }
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
.main-logo {
  width: 25em;
  height: auto;
}
</style>
