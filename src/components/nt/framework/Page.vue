<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div class="background">
        <video loop muted autoplay>
            <source type="video/mp4" src="@/assets/background_SunaookamiShiroko.mp4" />
        </video>
    </div>
    <div class="foreground">
        <header>
            <RouterLink to="/">
                <h1>马铃术 Poteitou57&emsp;|</h1>
            </RouterLink>
        </header>
        <nav>
            <RouterLink to="/home">
                <h2>Home</h2>
            </RouterLink>
            <RouterLink to="/library">
                <h2>Library</h2>
            </RouterLink>
            <RouterLink to="/about">
                <h2>About</h2>
            </RouterLink>
            <RouterLink to="/hahaha">
                <h2>Hahaha...</h2>
            </RouterLink>
        </nav>
        <RouterView />
        <footer>
            <RouterLink to="/">
                <h1>马铃术 Poteitou57&emsp;|（~ω~）？</h1>
            </RouterLink>
            <div class="links">
                <a href="https://github.com/Poteitou57" target="_blank"><img src="@/assets/logo_github.svg"
                        alt="GitHub"></img></a>
                <a href="https://space.bilibili.com/155961961" target="_blank"><img src="@/assets/logo_bilibili.svg"
                        alt="Bilibili"></img></a>
                <a href="" target="_blank"><img src="@/assets/logo_qq.svg" alt="QQ"></img></a>
                <a href="" target="_blank"><img src="@/assets/logo_wechat.svg" alt="WeChat"></img></a>
            </div>
            <div>Copyright &copy; 2025 Poteitou57. All rights reserved.</div>
        </footer>
    </div>
</template>

<style scoped lang="scss">
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

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.foreground {
    width: 100%;
    height: 100%;
    overflow: scroll;
    display: grid;
    grid-template-columns: 15em auto 7em;
    grid-template-rows: 20em auto auto auto;
    grid-template-areas:
        "header header header"
        "nav    nav    nav   "
        "main   main   main  "
        "footer footer footer";
    background-color: transparent;

    header {
        grid-area: header;
        padding: 3em;
        background: #000000A0;

        h1 {
            font-size: 2em;
            color: #FFFFFFFF;
        }

        h1::after {
            content: "（~ω~）？";
            display: inline-block;
            opacity: 0;
            transition: all 1s;
            transform: translateX(0);
        }

        h1:hover::after {
            opacity: 1;
            transform: translateX(1em);
        }
    }

    nav {
        grid-area: nav;
        padding: 3em;
        background: #000000A0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;

        a {
            flex-grow: 1;
        }

        h2 {
            text-align: center;
            font-size: 1.5em;
            color: #FFFFFFFF;
        }
    }

    main {
        padding: 5em;
        grid-area: main;
        background-color: #FFFFFFFF;
    }

    footer {
        grid-area: footer;
        background: #000000FF;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        color: #FFFFFFFF;

        h1 {
            font-size: 2em;
            color: #FFFFFFFF;
        }

        * {
            margin: 0.5em;
        }

        .links {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 2em;
                height: 2em;
                margin: 0 0.5em;
            }
        }
    }
}
</style>
