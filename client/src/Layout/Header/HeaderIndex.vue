<template>
    <Button type="button" label="Search" icon="pi pi-search" />
    <div>AQI: @{{ aqi }}</div>
    <div class="border-b">
        <nav class="p-0">
            <div class="flex flex-row">
                <!-- <a href="#" class="text-gray-900 hover:underline dark:text-white"
        >Navbar |</a
      > -->
                <div class="xs:hidden flex-1"></div>
                <a href="#" @click="showDialog">@{{ $t('message.signUp') }}</a>
                <!-- <p class="flex-1">
                    @{{ $t('message.Home') }} | @{{ $t('message.About') }}&nbsp;
                </p> -->
                <select
                    v-model="$i18n.locale"
                    aria-label="languages"
                    class="dark:bg-gray-700"
                    @blur="handleChangeLanguage"
                >
                    <option value="zh-TW">繁體中文</option>
                    <option value="en-US">English</option>
                </select>
                <!-- darkMode button -->
                <button
                    id="theme-toggle"
                    type="button"
                    class="mx-2 animate-pulse rounded-lg p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="darkMode"
                    @click="darkMode"
                >
                    <svg
                        id="theme-toggle-dark-icon"
                        class="hidden size-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                        ></path>
                    </svg>
                    <svg
                        id="theme-toggle-light-icon"
                        class="hidden size-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
        </nav>
    </div>
    <Dialog v-if="isShowDialog" :size="size" @close="closeDialog">
        <template #header>
            <div class="flex items-center text-lg">
                @{{ $t('message.signUp') }}
            </div>
        </template>
        <!-- <template #body> -->
        <!-- <ValidationProvider v-slot="{ errors }" rules="required">
                <input v-model="value" type="text" />
                <span id="error">{{ errors[0] }}</span>
            </ValidationProvider> -->
        <!-- <form class="field">
                <div>
                    <label for="name"
                        >@{{ $t('message.firstName') }}
                        <input
                            v-bind="signUpStore.firstName"
                            id="firstName"
                            required
                            :placeholder="$t('message.firstName_p')"
                            name="firstName"
                            aria-label="First name"
                            :validation-status="
                                signUpStore.errors.firstName
                                    ? ValidationStatus.Error
                                    : signUpStore.firstName.value
                                    ? ValidationStatus.Success
                                    : undefined
                            "
                            type="text"
                        >
                            <template #validationMessage
                                >@{{ signUpStore.errors.firstName }}</template
                            >
                        </input>
                    </label>
                    <br />
                    <label for="name"
                        >@{{ $t('message.lastName') }}
                        <input
                            v-bind="signUpStore.lastName"
                            id="lastName"
                            required
                            :placeholder="$t('message.lastName_p')"
                            aria-label="Last name"
                            :validation-status="
                                signUpStore.errors.lastName
                                    ? ValidationStatus.Error
                                    : signUpStore.lastName.value
                                    ? ValidationStatus.Success
                                    : undefined
                            "
                            type="text"
                        >
                            <template #validationMessage
                                >@{{ signUpStore.errors.lastName }}</template
                            >
                        </input>
                    </label>
                    <br />
                    <label for="name"
                        >@{{ $t('message.userName') }}
                        <input
                            v-bind="signUpStore.userName"
                            id="userName"
                            required
                            :placeholder="$t('message.userName_p')"
                            aria-label="User name"
                            :validation-status="
                                signUpStore.errors.userName
                                    ? ValidationStatus.Error
                                    : signUpStore.userName.value
                                    ? ValidationStatus.Success
                                    : undefined
                            "
                            type="text"
                        >
                            <template #suffix>
                                <button type="button" size="xs"
                                    >@{{ $t('message.check') }}</button
                                >
                            </template>
                            <template #validationMessage
                                >@{{ signUpStore.errors.userName }}</template
                            >
                        </input>
                    </label>
                    <br />
                    <label for="name"
                        >@{{ $t('message.password') }}
                        <input
                            v-bind="signUpStore.password"
                            id="password"
                            required
                            :placeholder="$t('message.password_p')"
                            aria-label="Password"
                            :validation-status="
                                signUpStore.errors.password
                                    ? ValidationStatus.Error
                                    : signUpStore.password.value
                                    ? ValidationStatus.Success
                                    : undefined
                            "
                            type="password"
                        >
                            <template #validationMessage
                                >@{{ signUpStore.errors.password }}</template
                            >
                        </input>
                    </label>
                    <br />
                    <label for="name"
                        >@{{ $t('message.email') }}
                        <input
                            v-bind="signUpStore.email"
                            id="email"
                            required
                            :placeholder="$t('message.email_p')"
                            aria-label="E-mail"
                            :validation-status="
                                signUpStore.errors.email
                                    ? ValidationStatus.Error
                                    : signUpStore.email.value
                                    ? ValidationStatus.Success
                                    : undefined
                            "
                            type="email"
                        >
                            <template #validationMessage
                                >@{{ signUpStore.errors.email }}</template
                            >
                        </input>
                    </label>
                    <br />
                    <label for="name"
                        >@{{ $t('message.phoneNumber') }}
                        <input
                            v-bind="signUpStore.phoneNumber"
                            id="phoneNumber"
                            required
                            :placeholder="$t('message.phoneNumber_p')"
                            aria-label="Phone number"
                            :validation-status="
                                signUpStore.errors.phoneNumber
                                    ? ValidationStatus.Error
                                    : signUpStore.phoneNumber.value
                                    ? ValidationStatus.Success
                                    : undefined
                            "
                            type="tel"
                        >
                            <template #validationMessage
                                >@{{ signUpStore.errors.phoneNumber }}</template
                            >
                        </input>
                    </label>
                    <br />
                </div>
                <hr
                    class="flex items-center justify-center border-t border-gray-200 p-4 dark:border-gray-600"
                />
                <div class="flex justify-between">
                    <button
                        type="reset"
                        class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                        @click="resetModal"
                    >
                        @{{ $t('message.reset') }}
                    </button>
                    <button
                        type="submit"
                        class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        @submit="signUpStore.signUp"
                    >
                        @{{ $t('message.submit') }}
                    </button>
                </div>
            </form> -->
        <!-- </template> -->
    </Dialog>
</template>

<script setup lang="ts">
// const theme = 'red' // 'blue', 'green', 'red', 'pink', 'purple'
// const hover = false
import i18n from '@/main'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleChangeLanguage = (e: any): void => {
    // change locale via `global` property
    // when vue-i18n is being used with legacy: false, note that i18n.global.locale is a ref, so we must set it via .value:
    i18n.global.locale.value = e.target.value
}

const linkElement = document.getElementById('theme-link') as HTMLLinkElement
const darkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
        document
            .getElementById('theme-toggle-dark-icon')
            ?.classList.remove('hidden')
        document
            .getElementById('theme-toggle-light-icon')
            ?.classList.add('hidden')
        document.documentElement.classList.remove('dark')
        document.documentElement.style.background =
            "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/vite-app-demo/lightbg.jpg') no-repeat fixed center"
        document.documentElement.style.backgroundSize = 'cover'
        linkElement.href = '/vite-app-demo/themes/lara-light-blue/theme.min.css'
    } else {
        document
            .getElementById('theme-toggle-light-icon')
            ?.classList.remove('hidden')
        document
            .getElementById('theme-toggle-dark-icon')
            ?.classList.add('hidden')
        document.documentElement.classList.add('dark')
        document.documentElement.style.background =
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/vite-app-demo/darkbg.jpg') no-repeat fixed center"
        document.documentElement.style.backgroundSize = 'cover'
        linkElement.href =
            '/vite-app-demo/themes/lara-dark-indigo/theme.min.css'
    }
}

/* auto-import
// import { useGeolocation } from '@vueuse/core'
// import { useFetch } from '@vueuse/core'
 */
const { coords } = useGeolocation({ enableHighAccuracy: true })
const aqi = ref()
onBeforeMount(() => {
    setTimeout(() => {
        // 定義一個介面，描述fetch函數的參數類型
        interface FetchOptions {
            url: string // 請求的url
            params: Record<string, unknown> // 請求的參數
        }
        const refetch = ref(true)
        function hour24() {
            return new Date().getHours().toString()
        }
        // 封裝一個function fetchAQI({ url, params })
        function fetchAQI({ url, params }: FetchOptions) {
            // 將參數對象轉換為查詢字串
            const queryStr = Object.keys(params)
                .map((key) => `${key}=${params[key]}`)
                .join('&')
            // 設置fetchURL，拼接url和查詢字串，並添加回調函數名稱
            const fetchURL = `${url}?${queryStr}`
            const { data } = useFetch(fetchURL, { refetch }).get()
            aqi.value = computed(() => {
                try {
                    return JSON.parse(data.value as string).hourly.us_aqi[
                        hour24()
                    ]
                } catch (e) {
                    return null
                }
            })
        }
        let oldHour: string
        let newHour: string
        newHour = hour24()
        oldHour = newHour
        setInterval(() => {
            // 更新newHour的值
            newHour = hour24()
            // 比對新舊小時數
            if (oldHour != newHour) {
                oldHour = newHour
                fetchAQI({
                    url: 'https://air-quality-api.open-meteo.com/v1/air-quality', // 請求的url
                    params: {
                        latitude: coords.value.latitude,
                        longitude: coords.value.longitude,
                        hourly: 'us_aqi',
                        timezone:
                            Intl.DateTimeFormat().resolvedOptions().timeZone
                    } // 請求的參數
                })
            }
        }, 1000)
        fetchAQI({
            url: 'https://air-quality-api.open-meteo.com/v1/air-quality', // 請求的url
            params: {
                latitude: coords.value.latitude,
                longitude: coords.value.longitude,
                hourly: 'us_aqi',
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            } // 請求的參數
        })
    }, 4500)
})
import { useSignUpStore } from '@/store'
const signUpStore = useSignUpStore()
enum ValidationStatus {
    Success = 'success',
    Error = 'error'
}
const size = 'md'
const isShowDialog = ref(false)
function closeDialog() {
    isShowDialog.value = false
}
function showDialog() {
    isShowDialog.value = true
}
function resetDialog() {
    document.getElementById('firstName')?.removeAttribute('value')
    document.getElementById('lastName')?.removeAttribute('value')
    document.getElementById('userName')?.removeAttribute('value')
    document.getElementById('password')?.removeAttribute('value')
    document.getElementById('email')?.removeAttribute('value')
    document.getElementById('phoneNumber')?.removeAttribute('value')
}
</script>

<style scoped></style>
