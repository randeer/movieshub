<template>
        <div class="hello">
          <h1>Kendo UI MediaPlayer demo</h1>
          <div id="vueapp" class="vue-app">
              <kendo-mediaplayer
                style="height: 500px; margin: 150px"
                :auto-play="true"
                :navigatable="true"
                :media-title="'Media player testing'"
                :media-source="'https://www.youtube.com/watch?v=uxjNDE2fMjI'"
              ></kendo-mediaplayer>
              </div>
            </div>
      </template>

      <script>
      import "@progress/kendo-ui";
      import "@progress/kendo-theme-default/dist/all.css";
      export default {
        name: "About",
      };
      </script>

<style scoped>
#app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
      }
</style>
