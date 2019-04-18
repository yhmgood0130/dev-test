<template>
  <div>
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
            <img class="logo" src="https://axismonitoring.com/NewWebsite/wp-content/uploads/2015/03/SCRAM_CAM_H.png" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'OfferList'}" exact>
              Offer
            </router-link>
          </li>
          <li class="nav-item history">
            <router-link class="nav-link" to="/history" exact>
              History
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main>
       <router-view />
      </main>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'app',
};
const API_URL = 'http://localhost:3000'

const securedAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

console.log(securedAxiosInstance);

 let result = axios.get('http://localhost:3000/api/v1/offers')
        .then(result => result.data)
        .catch(console.error);

         let result2 = axios.get('http://localhost:3035/api/v1/offers')
        .then(result => result.data)
        .catch(console.error);

         let result3 = axios.get('http://localhost:3000/v1/api/offers')
        .then(result => result.data)
        .catch(console.error);

        console.log(result);
        console.log(result2);
        console.log(result3);
        

</script>

<style>
body {
  background:linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>


<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  width:5em;
  height: 5em;
}
.logo {
  vertical-align: middle;
  height: 30px;
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
