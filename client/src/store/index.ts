import { defineStore } from 'pinia'
import { Names } from './store-name'
import { useForm } from 'vee-validate'
// import { localize } from '@vee-validate/i18n'
// import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// import en from '@vee-validate/i18n/dist/locale/en.json'
// import * as AllRules from '@vee-validate/rules'
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

// // Define the rule globally
// Object.keys(AllRules).forEach((rule) => {
//     defineRule(rule, (AllRules as unknown as Record<string, never>)[rule])
// })

// configure({
//     generateMessage: localize({
//         zh_TW,
//         en
//     })
// })

Yup.setLocale({
    mixed: {
        required: '此為必填欄位 This is a required field'
    },
    string: {
        email: '必須為合法電子郵件地址 This must be a valid email',
        min: '最少6個字元 This must be at least 6 characters'
    }
})

const schema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    userName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    phoneNumber: Yup.string().required()
})

export const useSignUpStore = defineStore('signUp', () => {
    const { errors, defineInputBinds, handleSubmit } = useForm({
        validationSchema: schema
    })

    const firstName = defineInputBinds('firstName')
    const lastName = defineInputBinds('lastName')
    const userName = defineInputBinds('userName')
    const email = defineInputBinds('email')
    const password = defineInputBinds('password')
    const phoneNumber = defineInputBinds('phoneNumber')

    const signUp = handleSubmit((values: unknown) => {
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
        signUp
    }
})
