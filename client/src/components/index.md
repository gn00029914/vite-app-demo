---
name: MyCoolApp name
title: MyCoolApp title
description: MyCoolApp description
tags: the site's tagline
meta:
    - name: description
      content: HelloWorld
      test: test
---

# My Page

There I was, there I was ... in the jungle. Then I started hearing this ticking sound and I realized it was some sort of  
_counter_?

<EventCounter :init='5' />
  
I looked a bit closer and realized I could **press** this counter and it would change! What is this magic?
  
# Hello World
  
This is @{{ frontmatter.name }}  
frontmatter: @{{ frontmatter }}
  
# Wow this is Amazing!
  
<router-link to="/vite-app-demo/">Home</router-link>
