<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const aboutMsg = 'Welcome to Vue3 & Vite'

function backHome() {
    router.push('/home')
}
</script>

<template>
    <h1 class="text-center">
        {{ aboutMsg }}
    </h1>
    <button type="button" @click="backHome">
        back home
    </button>
</template>
