import { defineStore } from 'pinia'
import { Names } from './store-name'

export const useTestStore = defineStore(Names.Test, {
    state: () => {
        return {
            current: 1
        }
    },
    getters: {},
    actions: {}
})
