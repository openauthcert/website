<template>
  <div v-if="vendor">
    <h1 class="text-2xl font-bold mb-2">{{ vendor.name }}</h1>
    <div class="text-sm text-gray-600 mb-1">Version: v{{ vendor.version }}</div>
    <div class="mb-2 flex items-center space-x-2">
      <img :src="`https://ghcr.io/openauthcert/badges/${vendor.badges[0].id}.svg`" :alt="vendor.badges[0].id" class="h-6" />
      <span class="text-xs text-gray-700">badge v{{ vendor.badges[0].version }}</span>
      <span v-if="vendor.auth.oidc" class="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">OIDC</span>
      <span v-if="vendor.auth.saml" class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">SAML</span>
      <span v-if="vendor.auth.ldap" class="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">LDAP</span>
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
