<template>
  <div class="sidebar">{{this.title}}</div>
</template>

<script>
export default {
  name: "Offer",
  computed: {
    title() {
      return window.location.pathname === "/offers" ? "Offer" : "History";
    }
  }
};
</script>

<style scoped>
.sidebar {
  font-size: 20px;
  transform: rotate(90deg);
  color: green;
}
</style>
