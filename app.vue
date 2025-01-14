<script setup lang="ts">
import allWords from './words.json'

const { search, mark } = useSearch(allWords)

const q = defineModel<string>('')
const words = computed(() => q.value ? search(q.value).map(word => mark(word, q.value)) : allWords)
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>partial-text-match</h1>
    <p>
      A simple partial text matching and highlighting with <mark>`&lt;mark&gt;`</mark> tag
    </p>
    <p>
      <strong>GitHub:</strong> <a href="https://github.com/shuuji3/partial-text-match">shuuji3/partial-text-match</a>
    </p>
    <p>
      <label>Query: </label>
      <input type="search" v-model="q" autofocus />
    </p>
    <ul>
      <li v-for="word in words">
        <span v-html="word" />
      </li>
    </ul>
  </div>
</template>

<style>
mark {
  padding: 0;
}
</style>
