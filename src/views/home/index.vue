<script setup>
import HelloWorld from 'comps/HelloWorld/index.vue'
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img
                class="h24 p6 will-change-filter transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
                src="/vite.svg"
                alt="Vite logo"
            >
        </a>
        <a href="https://vuejs.org" target="_blank">
            <img
                class="h24 p6 will-change-filter transition-filter duration-300 hover:drop-shadow-[0_0_2em_#42b883aa]"
                src="assets/svg/vue.svg"
                alt="Vue logo"
            >
        </a>
    </div>
    <HelloWorld msg="Hello Vite!" />
</template>

<style>
:root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
}

a:hover {
    color: #535bf2;
}

body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
}

h1 {
    font-size: 3.2em;
    line-height: 1.1;
}

button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
}

button:hover {
    border-color: #646cff;
}

button:focus,
button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}

#app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

@media (prefers-color-scheme: light) {
    :root {
        color: #213547;
        background-color: #ffffff;
    }

    a:hover {
        color: #747bff;
    }

    button {
        background-color: #f9f9f9;
    }
}
</style>
