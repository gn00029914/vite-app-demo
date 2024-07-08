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
.layout {
    min-height: 88dvh;
}

.layout-content {
    min-height: 88dvh;
    flex: 1;
    display: flex;
    overflow: hidden;
}

.layout-menu {
    min-height: 88dvh;
    display: flex;
    overflow: hidden;
}
</style>
