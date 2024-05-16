<template>
    <div>首頁內容 HomePage Content</div>
    <Button
        class="p-button-raised"
        :label="'count is' + count"
        icon="pi pi-plus-circle"
        @click="count++"
    ></Button>
    <Button label="Check" icon="pi pi-check"></Button>
    <Carousel
        :value="products"
        :num-visible="5"
        :num-scroll="1"
        :responsive-options="responsiveOptions"
        circular
        :autoplay-interval="3000"
        :pt="{
            previousbutton: {
                class: [
                    'flex justify-center items-center self-center',
                    'overflow-hidden w-auto h-8',
                    'ml-1',
                    'rounded-full',
                    'border-0 bg-transparent',
                    'text-surface-600',
                    'transition duration-200 ease-in-out'
                ]
            },
            nextbutton: {
                class: [
                    'flex justify-center items-center self-center',
                    'overflow-hidden w-auto h-8',
                    'mr-1',
                    'rounded-full',
                    'border-0 bg-transparent',
                    'text-surface-600',
                    'transition duration-200 ease-in-out'
                ]
            },
            items: {
                class: ['flex justify-content-evenly']
            }
            // itemsContent: {
            //     class: ['flex justify-content-evenly w']
            // }
        }"
    >
        <template #item="slotProps">
            <div
                class="border-surface-200 dark:border-surface-700 m-2 rounded-md border p-3"
            >
                <div class="mb-3">
                    <div class="relative mx-auto">
                        <img
                            :src="
                                'https://primefaces.org/cdn/primevue/images/product/' +
                                slotProps.data.image
                            "
                            :alt="slotProps.data.name"
                            class="w-full rounded-md"
                        />
                        <Tag
                            :value="slotProps.data.inventoryStatus"
                            :severity="
                                getSeverity(
                                    slotProps.data.inventoryStatus
                                ) as HintedString<string>
                            "
                            class="absolute"
                            style="left: 5px; top: 5px"
                        />
                    </div>
                </div>
                <div class="mb-3 font-medium">@{{ slotProps.data.name }}</div>
                <div class="flex items-center justify-between">
                    <div class="mt-0 text-xl font-semibold">
                        $@{{ slotProps.data.price }}
                    </div>
                    <span class="flex">
                        <Button
                            icon="pi pi-heart"
                            severity="secondary"
                            outlined
                        />
                        <Button icon="pi pi-shopping-cart" class="ml-2" />
                    </span>
                </div>
            </div>
        </template>
    </Carousel>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
const count = ref(0)
import { ref, onMounted } from 'vue'
import { ProductService } from '../service/ProductService'
// import { HintedString } from '@/presets/ts-helpers' // https://github.com/primefaces/primevue-examples/issues/6#issuecomment-1959753222
// import { HintedString } from 'primevue/ts-helpers'

// onMounted(() => {
ProductService.getProductsSmall().then(
    (data: string | unknown[]) => (products.value = data.slice(0, 9))
)
// })

const products = ref()
const responsiveOptions = ref([
    {
        breakpoint: '1800px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
])

const getSeverity = (status: HintedString<string>) => {
    switch (status) {
        case 'INSTOCK':
            return 'success'

        case 'LOWSTOCK':
            return 'warning'

        case 'OUTOFSTOCK':
            return 'danger'

        default:
            return null
    }
}
</script>

<style scoped>
/* .p-tag-value {
    color: var(text-text-color) !important;
} */
.p-tag-success {
    color: var(--green-700);
    background-color: var(--green-100);
}
.p-tag-warning {
    color: var(--orange-700);
    background-color: var(--orange-100);
}
.p-tag-danger {
    color: var(--red-700);
    background-color: var(--red-100);
}
</style>
