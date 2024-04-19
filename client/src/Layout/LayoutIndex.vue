<template>
    <div class="layout">
        <div
            class="from-prim-500/70 to-sec-500/70 dark:from-tert-500/70 dark:to-quat-500/70 bg-gradient-to-r"
        >
            <!-- <div> -->
            <Header></Header>
        </div>
        <div class="layout-content">
            <div class="layout-menu">
                <Menu></Menu>
            </div>
            <Content></Content>
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from './Menu/MenuIndex.vue'
import Header from './Header/HeaderIndex.vue'
import Content from './Content/ContentIndex.vue'
</script>

<style scoped>
.layout-content {
    flex: 1;
    /* height: 50%; */
    display: flex;
    overflow: hidden;
}

.layout-menu {
    /* height: 100vh; */
    display: flex;
    overflow: hidden;
}
</style>
