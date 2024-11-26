export default {
    plugins: {
        'postcss-import': {},
        //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
        tailwindcss: { config: './tailwindcss-config.mts' },
        //But others, like autoprefixer, need to run after,
        autoprefixer: {},
        cssnano:
            process.env.NPM_ENV === 'production'
                ? { preset: 'advanced' }
                : false
    }
}
