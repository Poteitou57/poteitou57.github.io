<script setup>
import Feature from '@/components/framework/Feature.vue';
</script>

<template>
  <div class="background">
    <video loop muted autoplay>
      <source src="@/assets/background_SunaookamiShiroko.mp4">
      </source>
    </video>
  </div>
  <div class="layout">
    <header>
      <Feature />
    </header>
    <nav>
      <a href="/home">
        <h2>Home</h2>
      </a>
      <a href="/library">
        <h2>Library</h2>
      </a>
      <a href="/about">
        <h2>About</h2>
      </a>
      <a href="/hahaha">
        <h2>Hahaha...</h2>
      </a>
    </nav>
    <aside>
      <slot name="catalog"></slot>
    </aside>
    <main>
      <slot></slot>
    </main>
    <footer>
      <Feature :dynamic="false" ona="window.location.href='/'" />
      <div class="links">
        <a href="https://github.com/Poteitou57" target="_blank"><img src="@/assets/logo_github.svg" alt="GitHub"></img></a>
        <a href="https://space.bilibili.com/155961961" target="_blank"><img src="@/assets/logo_bilibili.svg" alt="Bilibili"></img></a>
        <a href="" target="_blank"><img src="@/assets/logo_qq.svg" alt="QQ"></img></a>
        <a href="" target="_blank"><img src="@/assets/logo_wechat.svg" alt="WeChat"></img></a>
      </div>
      <div>All rights reserved.</div>
    </footer>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  background-image: url("@/assets/background_SunaookamiShiroko.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.background>video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 15em auto 7em;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "header header header"
    "nav    nav    nav   "
    "aside  main   main  "
    "footer footer footer";
  background-color: transparent;
}

header {
  grid-area: header;
  padding: 3em;
  height: 10em;
  background: #000000A0;
}

footer {
  grid-area: footer;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #000000FF;
  color: #FFFFFFFF;
}

footer>* {
  margin: 1em;
}

.links>a>img {
  width: 2em;
  height: 2em;
  margin: 0 1em;
}

.links {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

aside {
  visibility: hidden;
  grid-area: aside;
}

nav {
  grid-area: nav;
  padding: 3em;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: #000000A0;
}

a {
  flex-grow: 1;
  color: transparent;
  cursor: default;
  user-select: none;
  text-decoration: none;
}

h2 {
  text-align: center;
  color: #FFFFFFFF;
}

main {
  grid-area: main;
  background-color: #FFFFFFFF;
  padding: 10%;
}
</style>
