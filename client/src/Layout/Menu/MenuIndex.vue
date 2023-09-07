<template>
    <div class="menu xs:invisible xs:w-0 xs:hidden w-fit">
        <div class="menu-bar">
            Menu
            <label for="check">
                <input id="check" type="checkbox" @click="toggleMenu" />
                <span class="bg-gray-900 dark:bg-white"></span>
                <span class="bg-gray-900 dark:bg-white"></span>
                <span class="bg-gray-900 dark:bg-white"></span>
            </label>
        </div>
        <br />
        <i-carbon-terminal />
        <!-- <router-link v-slot="{ route }"></router-link> -->
        <!-- <router-link v-slot="{ href, route, navigate }" to="HomePage">
            <a :href="href" @click="navigate">
                <span>@{{ route.fullPath.slice(15, -4) }}</span>
            </a>
        </router-link>
        <router-link v-slot="{ href, route, navigate }" to="AboutPage">
            <a :href="href" @click="navigate">
                <span>@{{ route.fullPath.slice(15, -4) }}</span>
            </a>
        </router-link> -->
        <ul>
            <li v-for="item in items" :key="item.id">
                <router-link v-slot="{ href, route, navigate }" :to="item.url">
                    <a :href="href" @click="navigate">
                        <span
                            >@{{
                                $t('message.' + route.fullPath.slice(15, -4))
                            }}</span
                        >
                    </a>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import messages from '@intlify/unplugin-vue-i18n/messages'
let mql = window.matchMedia('(max-width: 932px)')
const MenuDrawer = document.getElementsByClassName(
    'menu'
) as unknown as NodeListOf<HTMLElement>
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src
function toggleMenu() {
    if (document.getElementById('check')?.getAttribute('checked') === 'null') {
        MenuDrawer.item(0).style.width = '10rem'
        document.getElementById('check')?.setAttribute('checked', 'true')
    } else if (
        document.getElementById('check')?.getAttribute('checked') === 'true'
    ) {
        MenuDrawer.item(0).style.width = 'fit-content'
        document.getElementById('check')?.setAttribute('checked', 'fit')
    } else {
        MenuDrawer.item(0).style.width = '10rem'
        document.getElementById('check')?.setAttribute('checked', 'true')
    }
}
mql.onchange = (e) => {
    if (e.matches) {
        MenuDrawer.item(0).style.width = '0rem'
    } else if (
        document.getElementById('check')?.getAttribute('checked') === 'true'
    ) {
        document.getElementById('check')?.click()
        MenuDrawer.item(0).style.width = 'fit-content'
        document.getElementById('check')?.setAttribute('checked', 'fit')
    } else {
        MenuDrawer.item(0).style.width = 'fit-content'
    }
}
const items: [
    { id: number; name: unknown; url: string },
    { id: number; name: unknown; url: string }
] = [
    { id: 1, name: messages?.Home, url: '/vite-app-demo/HomePage' },
    { id: 2, name: messages?.About, url: '/vite-app-demo/AboutPage' }
    // { id: 3, name: '聯繫我們', url: 'contact' }
]
</script>

<style lang="less" scoped>
.menu {
    flex: 1;
    width: auto;
    height: 100%;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    &-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
label {
    display: flex;
    flex-direction: column;
    width: 24px;
    cursor: pointer;
}

label span {
    // background: #fff;
    border-radius: 10px;
    height: 2px;
    margin: 2px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1) {
    width: 100%;
}

span:nth-of-type(2) {
    width: 100%;
}

span:nth-of-type(3) {
    width: 100%;
}

input[type='checkbox'] {
    display: none;
}

input[type='checkbox']:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    width: 50%;
    transform: rotatez(45deg) translate(14px, 0px);
}

input[type='checkbox']:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
}

input[type='checkbox']:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(2px, -11px) rotatez(45deg);
}
</style>
