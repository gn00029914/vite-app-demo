---
name: My Cool App name
title: My Cool App title
description: MyCoolApp description
tags: the site's tagline
meta:
    - name: description
      content: Hello World
test: test
---

# My Page

There I was, there I was ... in the jungle. Then I started hearing this ticking sound and I realized it was some sort of _counter_?

<EventCounter :init='5'/>

I looked a bit closer and realized I could **press** this counter and it would change! What is this magic?

# Hello World

This is @{{frontmatter.name}}
@{{ frontmatter }}

# Wow this is Amazing!

@{{frontmatter.name}}

<style> h1 { color: cadetblue; } </style>
<EventCounter />
<router-link to="/vite-app-demo/">Home</router-link>

<script lang="ts" setup>

</script>
