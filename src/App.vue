<template>
    <div id="app">
        <MainNavigationComponent />
        <router-view />
    </div>
</template>

<script>
import MainNavigationComponent from "@/components/main/MainNavigationComponent.vue";
export default {
    components: {
        MainNavigationComponent
    }
};
</script>

<style lang="scss">
body {
    margin: 0px;
    background: #22272d;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
