<template>
  <div id="app">
    <Header />
    <Navbar />
    <Searchbar />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Searchbar from '@/components/Searchbar'
export default {
  name: 'app',
  components: {
    Footer,
    Navbar,
    Header,
    Searchbar
  }
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
