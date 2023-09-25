import { defineStore } from 'pinia'
import { Names } from './store-name'
import { useForm } from 'vee-validate'
import * as Yup from 'yup'

export const useTestStore = defineStore(Names.Test, {
    state: () => {
        return {
            current: 1
        }
    },
    getters: {},
    actions: {}
})

const schema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    userName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    phoneNumber: Yup.string().required()
})

export const useSigninStore = defineStore('signin', () => {
    const { errors, defineInputBinds, handleSubmit } = useForm({
        validationSchema: schema
    })

    const firstName = defineInputBinds('firstName')
    const lastName = defineInputBinds('lastName')
    const userName = defineInputBinds('userName')
    const email = defineInputBinds('email')
    const password = defineInputBinds('password')
    const phoneNumber = defineInputBinds('phoneNumber')

    const signin = handleSubmit((values: unknown) => {
        // send values to API
        console.log('Submit', JSON.stringify(values, null, 2))
    })

    return {
        errors,
        firstName,
        lastName,
        userName,
        email,
        password,
        phoneNumber,
        signin
    }
})
