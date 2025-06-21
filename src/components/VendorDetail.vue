<template>
  <div v-if="vendor">
    <h1 class="text-2xl font-bold mb-2">{{ vendor.name }}</h1>
    <div class="mb-2">
      <span v-if="vendor.oidc" class="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">OIDC</span>
      <span v-if="vendor.saml" class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded ml-1">SAML</span>
    </div>
    <div class="mb-2 text-sm">License: {{ vendor.license }}</div>
    <a :href="vendor.repo" target="_blank" class="text-blue-500 underline">GitHub Repository</a>
    <p class="mt-4 whitespace-pre-line">{{ vendor.notes }}</p>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup>
import registry from '../data/registry.json';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const vendor = computed(() => registry.find(v => v.slug === route.params.slug));
</script>
