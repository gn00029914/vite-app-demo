module.exports = {
  plugins: {
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss: {},
    //But others, like autoprefixer, need to run after,
    autoprefixer: {},
    cssnano:
      process.env.NPM_ENV === 'production' ? { preset: 'default' } : false
  }
}
