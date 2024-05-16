/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        // https://github.com/vitejs/vite/issues/11652
        './index.html',
        './src/*.{js,ts,vue}',
        './src/**/*.{js,ts,vue}',
        './node_modules/primevue/*.{vue,js,ts,jsx,tsx}',
        './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        // screens: { // [primevue] warn - The `min-*` and `max-*` variants are not supported with a `screens` configuration containing objects.
        //     lg: { max: '1366px' }, // iPad Pro 12.9" (2022)
        //     xs: { max: '430px' } // iPhone 15 Pro Max (2023)
        // }, // https://www.screensizes.app/
        animatedSettings: {
            animatedSpeed: 1000,
            heartBeatSpeed: 1000,
            hingeSpeed: 1000,
            bounceInSpeed: 1000,
            bounceOutSpeed: 1000,
            animationDelaySpeed: 1000,
            classes: ['bounce', 'heartBeat']
        },
        extend: {
            // backgroundImage: {
            //     'lightbg': "url('./assets/lightbg.jpg')",
            //     'darkbg': "url('./assets/darkbg.jpg')",
            // },
            animation: {
                spinBounce: 'spinBounce 0.96s infinite'
            },
            keyframes: {
                spinBounce: {
                    '0%': {
                        transform: 'translateY(0%) rotate(0deg)'
                    },
                    '12%': {
                        transform: 'translateY(-4.99%) rotate(120deg)'
                    },
                    '24%': {
                        transform: 'translateY(-10.01%) rotate(240deg)'
                    },
                    '36%': {
                        transform: 'translateY(-0.17%) rotate(360deg)'
                    },
                    '54%': {
                        transform: 'translateY(69.85%) rotate(540deg)'
                    },
                    '74%': {
                        transform: 'translateY(109.81%) rotate(740deg)'
                    },
                    '82%': {
                        transform: 'translateY(108.43%) rotate(820deg)'
                    },
                    '92%': {
                        transform: 'translateY(102.59%) rotate(920deg)'
                    },
                    '96%': {
                        transform: 'translateY(100.74%) rotate(960deg)'
                    },
                    '100%': {
                        transform: 'translateY(100%) rotate(1000deg)'
                    }
                }
            },
            // dropShadow: {
            //     '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
            //     '4xl': [
            //         '0 35px 35px rgba(0, 0, 0, 0.25)',
            //         '0 45px 65px rgba(0, 0, 0, 0.15)'
            //     ]
            // },
            // boxShadow: {
            //     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
            // },
            // transitionTimingFunction: {
            //     'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
            //     'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            //     easeInOutBack: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
            // },
            colors: {
                prim: {
                    500: '#00F9FF'
                },
                sec: {
                    500: '#7AFF00'
                },
                tert: {
                    500: '#FF0600'
                },
                quat: {
                    500: '#8500FF'
                },
                'text-color': 'var(--text-color)',
                'text-color-secondary': 'var(--text-color-secondary)',
                'border-radius': 'var(--border-radius',
                'primary-color': 'var(--primary-color)',
                'primary-color-text': 'var(--primary-color-text)',
                'surface-ground': 'var(--surface-ground)',
                'surface-section': 'var(--surface-section)',
                'surface-card': 'var(--surface-card)',
                'surface-overlay': 'var(--surface-overlay)',
                'surface-border': 'var(--surface-border)',
                'surface-hover': 'var(--surface-hover)',
                'surface-0': 'var(--surface-0)',
                'surface-50': 'var(--surface-50)',
                'surface-100': 'var(--surface-100)',
                'surface-200': 'var(--surface-200)',
                'surface-300': 'var(--surface-300)',
                'surface-400': 'var(--surface-400)',
                'surface-500': 'var(--surface-500)',
                'surface-600': 'var(--surface-600)',
                'surface-700': 'var(--surface-700)',
                'surface-800': 'var(--surface-800)',
                'surface-900': 'var(--surface-900)',
                'blue-50': 'var(--blue-50)',
                'blue-100': 'var(--blue-100)',
                'blue-200': 'var(--blue-200)',
                'blue-300': 'var(--blue-300)',
                'blue-400': 'var(--blue-400)',
                'blue-500': 'var(--blue-500)',
                'blue-600': 'var(--blue-600)',
                'blue-700': 'var(--blue-700)',
                'blue-800': 'var(--blue-800)',
                'blue-900': 'var(--blue-900)',
                'green-50': 'var(--green-50)',
                'green-100': 'var(--green-100)',
                'green-200': 'var(--green-200)',
                'green-300': 'var(--green-300)',
                'green-400': 'var(--green-400)',
                'green-500': 'var(--green-500)',
                'green-600': 'var(--green-600)',
                'green-700': 'var(--green-700)',
                'green-800': 'var(--green-800)',
                'green-900': 'var(--green-900)',
                'yellow-50': 'var(--yellow-50)',
                'yellow-100': 'var(--yellow-100)',
                'yellow-200': 'var(--yellow-200)',
                'yellow-300': 'var(--yellow-300)',
                'yellow-400': 'var(--yellow-400)',
                'yellow-500': 'var(--yellow-500)',
                'yellow-600': 'var(--yellow-600)',
                'yellow-700': 'var(--yellow-700)',
                'yellow-800': 'var(--yellow-800)',
                'yellow-900': 'var(--yellow-900)',
                'cyan-50': 'var(--cyan-50)',
                'cyan-100': 'var(--cyan-100)',
                'cyan-200': 'var(--cyan-200)',
                'cyan-300': 'var(--cyan-300)',
                'cyan-400': 'var(--cyan-400)',
                'cyan-500': 'var(--cyan-500)',
                'cyan-600': 'var(--cyan-600)',
                'cyan-700': 'var(--cyan-700)',
                'cyan-800': 'var(--cyan-800)',
                'cyan-900': 'var(--cyan-900)',
                'pink-50': 'var(--pink-50)',
                'pink-100': 'var(--pink-100)',
                'pink-200': 'var(--pink-200)',
                'pink-300': 'var(--pink-300)',
                'pink-400': 'var(--pink-400)',
                'pink-500': 'var(--pink-500)',
                'pink-600': 'var(--pink-600)',
                'pink-700': 'var(--pink-700)',
                'pink-800': 'var(--pink-800)',
                'pink-900': 'var(--pink-900)',
                'indigo-50': 'var(--indigo-50)',
                'indigo-100': 'var(--indigo-100)',
                'indigo-200': 'var(--indigo-200)',
                'indigo-300': 'var(--indigo-300)',
                'indigo-400': 'var(--indigo-400)',
                'indigo-500': 'var(--indigo-500)',
                'indigo-600': 'var(--indigo-600)',
                'indigo-700': 'var(--indigo-700)',
                'indigo-800': 'var(--indigo-800)',
                'indigo-900': 'var(--indigo-900)',
                'teal-50': 'var(--teal-50)',
                'teal-100': 'var(--teal-100)',
                'teal-200': 'var(--teal-200)',
                'teal-300': 'var(--teal-300)',
                'teal-400': 'var(--teal-400)',
                'teal-500': 'var(--teal-500)',
                'teal-600': 'var(--teal-600)',
                'teal-700': 'var(--teal-700)',
                'teal-800': 'var(--teal-800)',
                'teal-900': 'var(--teal-900)',
                'orange-50': 'var(--orange-50)',
                'orange-100': 'var(--orange-100)',
                'orange-200': 'var(--orange-200)',
                'orange-300': 'var(--orange-300)',
                'orange-400': 'var(--orange-400)',
                'orange-500': 'var(--orange-500)',
                'orange-600': 'var(--orange-600)',
                'orange-700': 'var(--orange-700)',
                'orange-800': 'var(--orange-800)',
                'orange-900': 'var(--orange-900)',
                'bluegray-50': 'var(--bluegray-50)',
                'bluegray-100': 'var(--bluegray-100)',
                'bluegray-200': 'var(--bluegray-200)',
                'bluegray-300': 'var(--bluegray-300)',
                'bluegray-400': 'var(--bluegray-400)',
                'bluegray-500': 'var(--bluegray-500)',
                'bluegray-600': 'var(--bluegray-600)',
                'bluegray-700': 'var(--bluegray-700)',
                'bluegray-800': 'var(--bluegray-800)',
                'bluegray-900': 'var(--bluegray-900)',
                'purple-50': 'var(--purple-50)',
                'purple-100': 'var(--purple-100)',
                'purple-200': 'var(--purple-200)',
                'purple-300': 'var(--purple-300)',
                'purple-400': 'var(--purple-400)',
                'purple-500': 'var(--purple-500)',
                'purple-600': 'var(--purple-600)',
                'purple-700': 'var(--purple-700)',
                'purple-800': 'var(--purple-800)',
                'purple-900': 'var(--purple-900)',
                'red-50': 'var(--red-50)',
                'red-100': 'var(--red-100)',
                'red-200': 'var(--red-200)',
                'red-300': 'var(--red-300)',
                'red-400': 'var(--red-400)',
                'red-500': 'var(--red-500)',
                'red-600': 'var(--red-600)',
                'red-700': 'var(--red-700)',
                'red-800': 'var(--red-800)',
                'red-900': 'var(--red-900)',
                'primary-50': 'var(--primary-50)',
                'primary-100': 'var(--primary-100)',
                'primary-200': 'var(--primary-200)',
                'primary-300': 'var(--primary-300)',
                'primary-400': 'var(--primary-400)',
                'primary-500': 'var(--primary-500)',
                'primary-600': 'var(--primary-600)',
                'primary-700': 'var(--primary-700)',
                'primary-800': 'var(--primary-800)',
                'primary-900': 'var(--primary-900)',
                'gray-50': 'var(--gray-50)',
                'gray-100': 'var(--gray-100)',
                'gray-200': 'var(--gray-200)',
                'gray-300': 'var(--gray-300)',
                'gray-400': 'var(--gray-400)',
                'gray-500': 'var(--gray-500)',
                'gray-600': 'var(--gray-600)',
                'gray-700': 'var(--gray-700)',
                'gray-800': 'var(--gray-800)',
                'gray-900': 'var(--gray-900)',

                // pink
                // primary: {"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#f9a8d4","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843"}

                // fuchsia
                // primary: {"50":"#fdf4ff","100":"#fae8ff","200":"#f5d0fe","300":"#f0abfc","400":"#e879f9","500":"#d946ef","600":"#c026d3","700":"#a21caf","800":"#86198f","900":"#701a75"}

                // purple
                // primary: {"50":"#faf5ff","100":"#f3e8ff","200":"#e9d5ff","300":"#d8b4fe","400":"#c084fc","500":"#a855f7","600":"#9333ea","700":"#7e22ce","800":"#6b21a8","900":"#581c87"}

                // violet
                // primary: {"50":"#f5f3ff","100":"#ede9fe","200":"#ddd6fe","300":"#c4b5fd","400":"#a78bfa","500":"#8b5cf6","600":"#7c3aed","700":"#6d28d9","800":"#5b21b6","900":"#4c1d95"}

                // indigo
                // primary: {"50":"#eef2ff","100":"#e0e7ff","200":"#c7d2fe","300":"#a5b4fc","400":"#818cf8","500":"#6366f1","600":"#4f46e5","700":"#4338ca","800":"#3730a3","900":"#312e81"}

                // blue
                // primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}

                // sky
                // primary: {"50":"#f0f9ff","100":"#e0f2fe","200":"#bae6fd","300":"#7dd3fc","400":"#38bdf8","500":"#0ea5e9","600":"#0284c7","700":"#0369a1","800":"#075985","900":"#0c4a6e"}

                // cyan
                // primary: {"50":"#ecfeff","100":"#cffafe","200":"#a5f3fc","300":"#67e8f9","400":"#22d3ee","500":"#06b6d4","600":"#0891b2","700":"#0e7490","800":"#155e75","900":"#164e63"}

                // teal
                // primary: {"50":"#f0fdfa","100":"#ccfbf1","200":"#99f6e4","300":"#5eead4","400":"#2dd4bf","500":"#14b8a6","600":"#0d9488","700":"#0f766e","800":"#115e59","900":"#134e4a"}

                // emerald
                // primary: {"50":"#ecfdf5","100":"#d1fae5","200":"#a7f3d0","300":"#6ee7b7","400":"#34d399","500":"#10b981","600":"#059669","700":"#047857","800":"#065f46","900":"#064e3b"}

                // green
                // primary: {"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d"}

                // lime
                // primary: {"50":"#f7fee7","100":"#ecfccb","200":"#d9f99d","300":"#bef264","400":"#a3e635","500":"#84cc16","600":"#65a30d","700":"#4d7c0f","800":"#3f6212","900":"#365314"}

                // yellow
                // primary: {"50":"#fefce8","100":"#fef9c3","200":"#fef08a","300":"#fde047","400":"#facc15","500":"#eab308","600":"#ca8a04","700":"#a16207","800":"#854d0e","900":"#713f12"}

                // amber
                // primary: {"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#f59e0b","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f"}

                // orange
                // primary: {"50":"#fff7ed","100":"#ffedd5","200":"#fed7aa","300":"#fdba74","400":"#fb923c","500":"#f97316","600":"#ea580c","700":"#c2410c","800":"#9a3412","900":"#7c2d12"}

                // red
                // primary: {"50":"#fef2f2","100":"#fee2e2","200":"#fecaca","300":"#fca5a5","400":"#f87171","500":"#ef4444","600":"#dc2626","700":"#b91c1c","800":"#991b1b","900":"#7f1d1d"}

                // stone
                // primary: {"50":"#fafaf9","100":"#f5f5f4","200":"#e7e5e4","300":"#d6d3d1","400":"#a8a29e","500":"#78716c","600":"#57534e","700":"#44403c","800":"#292524","900":"#1c1917"}

                // neutral
                // primary: {"50":"#fafafa","100":"#f5f5f5","200":"#e5e5e5","300":"#d4d4d4","400":"#a3a3a3","500":"#737373","600":"#525252","700":"#404040","800":"#262626","900":"#171717"}

                // zinc
                // primary: {"50":"#fafafa","100":"#f4f4f5","200":"#e4e4e7","300":"#d4d4d8","400":"#a1a1aa","500":"#71717a","600":"#52525b","700":"#3f3f46","800":"#27272a","900":"#18181b"}

                // gray
                // primary: {"50":"#f9fafb","100":"#f3f4f6","200":"#e5e7eb","300":"#d1d5db","400":"#9ca3af","500":"#6b7280","600":"#4b5563","700":"#374151","800":"#1f2937","900":"#111827"}

                // slate
                // primary: {"50":"#f8fafc","100":"#f1f5f9","200":"#e2e8f0","300":"#cbd5e1","400":"#94a3b8","500":"#64748b","600":"#475569","700":"#334155","800":"#1e293b","900":"#0f172a"}
            }
        }
    },
    corePlugins: {
        aspectRatio: false
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ]
}
