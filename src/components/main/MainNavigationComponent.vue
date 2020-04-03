<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/websites">Websites</router-link>
    </div>
</template>

<script>
export default {
    name: "MainNavigationComponent"
};
</script>

<style lang="scss" scoped>
#nav {
    padding: 30px;

    a {
        font-weight: bold;
        padding: 0px 12px;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #0a6;
        }
    }
}
</style>
