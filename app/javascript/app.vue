<template>
  <div>
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'Home'}"
              exact
            >
              <img
                class="logo"
                src="https://sendgrid.com/wp-content/uploads/2017/10/iBotta-Logo.png"
              >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{name: 'OfferList', params:{ isOffer: true }}"
              exact
            >Offer</router-link>
          </li>
          <li class="nav-item history">
            <router-link
              class="nav-link"
              :to="{ name: 'History'}"
              exact
            >History</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main>
        <router-view :key="this.$route.fullPath"/>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  padding: 5px 10px;
  font-size: 22px;
  display : flex;
  align-items: center;
  border-right: 1px solid #bbb;
}
a:hover {
  background:none;
}
.logo {
  width: 2.5em;
  height: auto;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
</style>
