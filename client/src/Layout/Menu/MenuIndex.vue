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
        作者外出取材... =======
    </div>
</template>

<script setup lang="ts">
function toggleMenu() {
    if (
        document
            .getElementsByClassName('menu')[0]
            .style.getPropertyValue('width') === '5rem'
    ) {
        document
            .getElementsByClassName('menu')[0]
            .style.setProperty('width', 'fit-content')
    } else {
        document
            .getElementsByClassName('menu')[0]
            .style.setProperty('width', '5rem')
    }
    // console.log(
    //     document
    //         .getElementsByClassName('menu')[0]
    //         .style.getPropertyValue('width')
    // )
}
</script>

<style lang="less" scoped>
.menu {
    flex: 1;
    // width: 85px;
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
