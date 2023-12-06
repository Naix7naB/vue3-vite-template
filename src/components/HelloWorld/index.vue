<script setup>
import { useRouter } from 'vue-router'

defineProps({
    msg: String
})

const router = useRouter()

function toAbout() {
    router.push('/about')
}
</script>

<template>
    <h1>{{ msg }}</h1>

    <div class="p8">
        <button type="button" @click="toAbout">
            about
        </button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="c-stone">
        Click on the Vite and Vue logos to learn more
    </p>
</template>
