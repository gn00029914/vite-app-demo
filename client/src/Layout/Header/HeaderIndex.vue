<template>
    <div class="dark:text-white">AQI: @{{ aqi }}</div>
    <div class="border-b">
        <nav class="px-1 py-2.5">
            <div class="flex flex-row">
                <!-- <a href="#" class="text-gray-900 hover:underline dark:text-white"
        >Navbar |</a
      > -->
                <div class="xs:hidden flex-1"></div>
                <a href="#" @click="showModal">@{{ $t('message.signUp') }}</a>
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
                <flowbite-themable :theme="theme" class="">
                    <dropdown text="Click me">
                        <list-group>
                            <list-group-item
                                class="bg-primary-200 text-primary-700"
                                :hover="hover"
                                >Item #1</list-group-item
                            >
                            <list-group-item
                                class="bg-primary-200 text-primary-700"
                                >Item #2</list-group-item
                            >
                            <list-group-item
                                class="bg-primary-200 text-primary-700"
                                >Item #3</list-group-item
                            >
                        </list-group>
                    </dropdown>
                </flowbite-themable>
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
                        class="hidden h-5 w-5"
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
                        class="hidden h-5 w-5"
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
            <br />
            <!-- drawer init and show -->
            <div class="inline-block text-center">
                <button
                    id="drawer-button"
                    class="mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    data-drawer-target="drawer-navigation"
                    data-drawer-show="drawer-navigation"
                    aria-controls="drawer-navigation"
                >
                    Show navigation
                </button>
            </div>

            <!-- drawer component -->
            <div
                id="drawer-navigation"
                class="fixed left-0 top-0 z-40 h-screen w-80 -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
                tabindex="-1"
                aria-labelledby="drawer-navigation-label"
            >
                <h5
                    id="drawer-navigation-label"
                    class="text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
                >
                    Menu
                </h5>
                <button
                    id="drawer-hide-button"
                    type="button"
                    data-drawer-hide="drawer-navigation"
                    aria-controls="drawer-navigation"
                    class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
                <div class="overflow-y-auto py-4">
                    <ul class="space-y-2">
                        <li>
                            <a
                                href="#"
                                class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                    ></path>
                                    <path
                                        d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                                    ></path>
                                </svg>
                                <span class="ml-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example"
                                data-collapse-toggle="dropdown-example"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span
                                    class="ml-3 flex-1 whitespace-nowrap text-left"
                                    >E-commerce</span
                                >
                                <svg
                                    class="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <ul
                                id="dropdown-example"
                                class="hidden space-y-2 py-2"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        >Products</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        >Billing</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        >Invoice</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    ></path>
                                </svg>
                                <span class="ml-3 flex-1 whitespace-nowrap"
                                    >Kanban</span
                                >
                                <span
                                    class="ml-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                                    >Pro</span
                                >
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                                    ></path>
                                    <path
                                        d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                                    ></path>
                                </svg>
                                <span class="ml-3 flex-1 whitespace-nowrap"
                                    >Inbox</span
                                >
                                <span
                                    class="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                    >3</span
                                >
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="ml-3 flex-1 whitespace-nowrap"
                                    >Users</span
                                >
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="ml-3 flex-1 whitespace-nowrap"
                                    >Products</span
                                >
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                @click="showModal"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="ml-3 flex-1 whitespace-nowrap">
                                    Sign In
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="ml-3 flex-1 whitespace-nowrap"
                                    >Sign Up</span
                                >
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- drawer init and toggle -->
            <div class="xs:invisible xs:w-0 xs:hidden inline text-center">
                <button
                    class="mb-2 mr-2 overflow-y-auto rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    data-drawer-target="drawer-top-example"
                    data-drawer-show="drawer-top-example"
                    data-drawer-placement="top"
                    aria-controls="drawer-top-example"
                >
                    Show top drawer
                </button>
            </div>

            <!-- drawer component -->
            <div
                id="drawer-top-example"
                class="fixed inset-x-0 top-0 z-40 w-full -translate-y-full bg-white p-4 transition-transform dark:bg-gray-800"
                tabindex="-1"
                aria-labelledby="drawer-top-label"
            >
                <h5
                    id="drawer-top-label"
                    class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                    <svg
                        class="mr-2 h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    Top drawer
                </h5>
                <button
                    type="button"
                    data-drawer-hide="drawer-top-example"
                    aria-controls="drawer-top-example"
                    class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
                <p
                    class="mb-6 max-w-lg text-sm text-gray-500 dark:text-gray-400"
                >
                    Supercharge your hiring by taking advantage of our
                    <a
                        href="#"
                        class="text-blue-600 underline hover:no-underline dark:text-blue-500"
                        >limited-time sale</a
                    >
                    for Flowbite Docs + Job Board. Unlimited access to over 190K
                    top-ranked candidates and the #1 design job board.
                </p>
                <a
                    href="#"
                    class="mr-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >Learn more</a
                >
                <a
                    href="#"
                    class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Get access
                    <svg
                        class="ml-2 h-4 w-4"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>

            <!-- drawer init and toggle -->
            <div class="xs:invisible xs:w-0 xs:hidden inline text-center">
                <button
                    class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    data-drawer-target="drawer-right-example"
                    data-drawer-show="drawer-right-example"
                    data-drawer-placement="right"
                    aria-controls="drawer-right-example"
                >
                    Show right drawer
                </button>
            </div>

            <!-- drawer component -->
            <div
                id="drawer-right-example"
                class="fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
                tabindex="-1"
                aria-labelledby="drawer-right-label"
            >
                <h5
                    id="drawer-right-label"
                    class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
                >
                    <svg
                        class="mr-2 h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    Right drawer
                </h5>
                <button
                    type="button"
                    data-drawer-hide="drawer-right-example"
                    aria-controls="drawer-right-example"
                    class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
                <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    Supercharge your hiring by taking advantage of our
                    <a
                        href="#"
                        class="text-blue-600 underline hover:no-underline dark:text-blue-500"
                        >limited-time sale</a
                    >
                    for Flowbite Docs + Job Board. Unlimited access to over 190K
                    top-ranked candidates and the #1 design job board.
                </p>
                <div class="grid grid-cols-2 gap-4">
                    <a
                        href="#"
                        class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >Learn more</a
                    >
                    <a
                        href="#"
                        class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >Get access
                        <svg
                            class="ml-2 h-4 w-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- drawer init and toggle -->
            <div class="inline text-center">
                <button
                    class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    data-drawer-target="drawer-swipe"
                    data-drawer-show="drawer-swipe"
                    data-drawer-placement="bottom"
                    data-drawer-edge="true"
                    data-drawer-edge-offset="bottom-[60px]"
                    aria-controls="drawer-swipe"
                >
                    Show swipeable drawer
                </button>
            </div>

            <!-- drawer component -->
            <div
                id="drawer-swipe"
                class="fixed inset-x-0 bottom-[60px] z-40 w-full translate-y-full overflow-y-auto rounded-t-lg border-t border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800"
                tabindex="-1"
                aria-labelledby="drawer-swipe-label"
            >
                <div
                    class="cursor-pointer p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
                    data-drawer-toggle="drawer-swipe"
                >
                    <span
                        class="absolute left-1/2 top-3 h-1 w-8 -translate-x-1/2 rounded-lg bg-gray-300 dark:bg-gray-600"
                    ></span>
                    <h5
                        id="drawer-swipe-label"
                        class="inline-flex items-center text-base text-gray-500 dark:text-gray-400"
                    >
                        <svg
                            class="mr-2 h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
                            ></path>
                        </svg>
                        Add widget
                    </h5>
                </div>
                <div class="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
                    <div
                        class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        <div
                            class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"
                        >
                            <svg
                                class="inline h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                ></path>
                                <path
                                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                                ></path>
                            </svg>
                        </div>
                        <div
                            class="text-center font-medium text-gray-500 dark:text-gray-400"
                        >
                            Chart
                        </div>
                    </div>
                    <div
                        class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        <div
                            class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"
                        >
                            <svg
                                class="inline h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div
                            class="text-center font-medium text-gray-500 dark:text-gray-400"
                        >
                            Table
                        </div>
                    </div>
                    <div
                        class="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 lg:block"
                    >
                        <div
                            class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"
                        >
                            <svg
                                class="inline h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
                                ></path>
                            </svg>
                        </div>
                        <div
                            class="hidden text-center font-medium text-gray-500 dark:text-gray-400"
                        >
                            Ticket
                        </div>
                    </div>
                    <div
                        class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        <div
                            class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"
                        >
                            <svg
                                class="inline h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div
                            class="text-center font-medium text-gray-500 dark:text-gray-400"
                        >
                            List
                        </div>
                    </div>
                    <div
                        class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        <div
                            class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"
                        >
                            <svg
                                class="inline h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div
                            class="text-center font-medium text-gray-500 dark:text-gray-400"
                        >
                            Price
                        </div>
                    </div>
                    <div
                        class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        <div
                            class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"
                        >
                            <svg
                                class="inline h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                                ></path>
                            </svg>
                        </div>
                        <div
                            class="text-center font-medium text-gray-500 dark:text-gray-400"
                        >
                            Users
                        </div>
                    </div>
                    <div
                        class="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 lg:block"
                    >
                        <div
                            class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"
                        >
                            <svg
                                class="inline h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div
                            class="text-center font-medium text-gray-500 dark:text-gray-400"
                        >
                            Task
                        </div>
                    </div>
                    <div
                        class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                        <div
                            class="w-18 h-18 mx-auto mb-2 flex max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-500"
                        >
                            <svg
                                class="inline h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                                ></path>
                            </svg>
                        </div>
                        <div
                            class="text-center font-medium text-gray-500 dark:text-gray-400"
                        >
                            Custom
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <Modal v-if="isShowModal" :size="size" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg">
                @{{ $t('message.signUp') }}
            </div>
        </template>
        <template #body>
            <!-- <ValidationProvider v-slot="{ errors }" rules="required">
                <input v-model="value" type="text" />
                <span id="error">{{ errors[0] }}</span>
            </ValidationProvider> -->
            <form class="field">
                <div>
                    <label for="name"
                        >@{{ $t('message.firstName') }}
                        <Input
                            v-bind="signUpStore.firstName"
                            id="firstName"
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
                        </Input>
                    </label>
                    <br />
                    <label for="name"
                        >@{{ $t('message.lastName') }}
                        <Input
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
                        </Input>
                    </label>
                    <br />
                    <label for="name"
                        >@{{ $t('message.userName') }}
                        <Input
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
                                <Button type="button" size="xs"
                                    >@{{ $t('message.check') }}</Button
                                >
                            </template>
                            <template #validationMessage
                                >@{{ signUpStore.errors.userName }}</template
                            >
                        </Input>
                    </label>
                    <br />
                    <label for="name"
                        >@{{ $t('message.password') }}
                        <Input
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
                        </Input>
                    </label>
                    <br />
                    <label for="name"
                        >@{{ $t('message.email') }}
                        <Input
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
                        </Input>
                    </label>
                    <br />
                    <label for="name"
                        >@{{ $t('message.phoneNumber') }}
                        <Input
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
                        </Input>
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
            </form>
        </template>
    </Modal>
</template>

<script setup lang="ts">
import i18n from '@/main'
const theme = 'red' // 'blue', 'green', 'red', 'pink', 'purple'
const hover = false
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleChangeLanguage = (e: any): void => {
    // change locale via `global` property
    // when vue-i18n is being used with legacy: false, note that i18n.global.locale is a ref, so we must set it via .value:
    i18n.global.locale.value = e.target.value
}
document.addEventListener('DOMContentLoaded', () => {
    if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document
            .getElementById('theme-toggle-light-icon')
            ?.classList.remove('hidden')
        document
            .getElementById('theme-toggle-dark-icon')
            ?.classList.add('hidden')
    } else {
        document
            .getElementById('theme-toggle-dark-icon')
            ?.classList.remove('hidden')
        document
            .getElementById('theme-toggle-light-icon')
            ?.classList.add('hidden')
    }
})

const darkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
        document
            .getElementById('theme-toggle-dark-icon')
            ?.classList.remove('hidden')
        document
            .getElementById('theme-toggle-light-icon')
            ?.classList.add('hidden')
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        document.documentElement.style.background =
            "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/vite-app-demo/lightbg.jpg') no-repeat center center"
        document.documentElement.style.backgroundSize = 'cover'
        // document.documentElement.animate({ easing: ['ease-in'] }, 5000);
        // localStorage.theme = 'light'
    } else {
        document
            .getElementById('theme-toggle-light-icon')
            ?.classList.remove('hidden')
        document
            .getElementById('theme-toggle-dark-icon')
            ?.classList.add('hidden')
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
        document.documentElement.style.background =
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/vite-app-demo/darkbg.jpg') no-repeat center center"
        document.documentElement.style.backgroundSize = 'cover'
        // document.documentElement.animate({ easing: ['ease-in'] }, 5000);
        // localStorage.theme = 'dark'
    }
}
/* 
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
const isShowModal = ref(false)
function closeModal() {
    isShowModal.value = false
}
function showModal() {
    isShowModal.value = true
}
function resetModal() {
    document.getElementById('firstName')?.removeAttribute('value')
    document.getElementById('lastName')?.removeAttribute('value')
    document.getElementById('userName')?.removeAttribute('value')
    document.getElementById('password')?.removeAttribute('value')
    document.getElementById('email')?.removeAttribute('value')
    document.getElementById('phoneNumber')?.removeAttribute('value')
}
</script>

<style lang="less" scoped></style>
