<template>
    <div class="layout">
        <div class="layout-header">
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
    &-header {
        border-bottom: 1px solid #ccc;
    }

    &-content {
        flex: 1;
        height: 100vh;
        display: flex;
        overflow: hidden;

        &-menu {
            height: 100vh;
            display: flex;
            overflow: hidden;
        }
    }
}
</style>
