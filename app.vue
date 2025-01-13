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
