<template>
    <div class="content">
        Content
        <!-- <div v-for="item in 100" :key="item" class="content-items">
            @{{ item }}
        </div> -->
        <!-- <HomePage></HomePage> -->
        <section>
            <router-view></router-view>
        </section>
        <EventCounter :init="init" />
        ==================1
    </div>
</template>

<script setup lang="ts">
import EventCounter from '@components/EventCounter.vue'
const init = 6
</script>

<style lang="less" scoped>
.content {
    flex: 1;
    margin: 20px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    overflow: auto;

    &-items {
        padding: 20px;
        border: 1px solid #ccc;
    }
}
</style>
