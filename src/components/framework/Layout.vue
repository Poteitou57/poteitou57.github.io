<script setup></script>

<template>
  <div class="background">
    <video loop muted autoplay>
      <source src="@/assets/background_SunaookamiShiroko.mp4"></source>
    </video>
  </div>
  <div class="layout">
    <header>
      <h1 onclick="window.location.href='/'">Poteitou57&emsp;|</h1>
    </header>
    <nav>
      <button class="button" onclick="window.location.href='/home'">
        <h2>Home</h2>
      </button>
      <button class="button" onclick="window.location.href='/library'">
        <h2>Library</h2>
      </button>
      <button class="button" onclick="window.location.href='/about'">
        <h2>About</h2>
      </button>
      <button class="button" onclick="window.location.href='/hahaha'">
        <h2>Hahaha...</h2>
      </button>
    </nav>
    <aside>
      <slot name="catalog"></slot>
    </aside>
    <main>
      <slot></slot>
    </main>
    <footer>
      <div>Poteitou57&emsp;|（~ω~）？</div>
      <div class="links">
        <img class="logo" src="@/assets/logo_github.svg"></img>
        <img class="logo" src="@/assets/logo_bilibili.svg"></img>
        <img class="logo" src="@/assets/logo_qq.svg"></img>
        <img class="logo" src="@/assets/logo_wechat.svg"></img>
      </div>
      <div>All rights reserved. {{ }} </div>
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
  display: grid;
  grid-template-columns: 15em auto 7em;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "header header header"
    "nav    nav    nav   "
    "aside   main   main"
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
  background-color: #000000FF;
  color: #FFFFFFFF;
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

nav>button {
  flex-grow: 1;
  background-color: transparent;
  border-color: transparent;
  padding: 1em;
}

nav>button>h2 {
  color: #FFFFFFFF;
}

main {
  grid-area: main;
  background-color: #FFFFFFFF;
  padding: 10%;
}

header>h1 {
  color: #FFFFFFFF;
  font-size: 2em;
}

header>h1::after {
  content: "（~ω~）？";
  display: inline-block;
  opacity: 0;
  transition: all 1s;

}

header>h1:hover::after {
  opacity: 1;
  transform: translateX(1em);
}

footer>.links>.logo {
  width: 3em;
  height: 3em;
}

footer>.links {
  display: flex;
}
</style>
