<template>
    <div class="layout">
        <div
            class="from-primary-500/70 to-secondary-500/70 dark:from-tertiary-500/70 dark:to-quaternary-500/70 bg-gradient-to-r"
        >
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

<style lang="less" scoped>
.layout {
    &-content {
        flex: 1;
        // height: 50%;
        display: flex;
        overflow: hidden;

        &-menu {
            // height: 100vh;
            display: flex;
            overflow: hidden;
        }
    }
}
</style>
