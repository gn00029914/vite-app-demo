<template>
    <div class="content">
        Content
        <!-- <div v-for="item in 100" :key="item" class="content-items">
            @{{ item }}
        </div> -->
        <!-- <HomePage></HomePage> -->
        <section>
            <RouterView></RouterView>
        </section>
        <EventCounter :init="init" />
        ==================1
        <ComponentA class="prose lg:prose-xl dark:prose-invert" />
        ==================2
        <router-view v-slot="{ Component }">
            <component :is="Component" ref="current" />
        </router-view>
        ==================3
        <div v-if="current">
            accessing frontmatter from outside via expose API: @{{
                current.frontmatter
            }}
        </div>
        ==================4
        <ComponentA style="padding: 20px 40px" />
    </div>
</template>

<script setup lang="ts">
import ComponentA from '@pages/index.md'
import EventCounter from '@components/EventCounter.vue'
const current = ref()
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
