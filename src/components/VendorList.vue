<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Certified Vendors</h1>
    <div class="flex flex-wrap gap-4 mb-4">
      <input v-model="search" placeholder="Search" class="border p-2 flex-1" />
      <label class="flex items-center space-x-1">
        <input type="checkbox" v-model="filterOIDC" />
        <span>Has OIDC</span>
      </label>
      <label class="flex items-center space-x-1">
        <input type="checkbox" v-model="filterSAML" />
        <span>Has SAML</span>
      </label>
      <select v-model="filterLicense" class="border p-2">
        <option value="">All Licenses</option>
        <option v-for="l in licenses" :key="l" :value="l">{{ l }}</option>
      </select>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="vendor in filtered" :key="vendor.slug" class="border p-4 bg-white rounded shadow">
        <router-link :to="'/registry/' + vendor.slug" class="text-xl font-semibold text-blue-600 hover:underline">
          {{ vendor.name }}
        </router-link>
        <div class="mt-2 flex items-center space-x-2">
          <img :src="`https://ghcr.io/openauthcert/badges/${vendor.badges[0].id}.svg`" :alt="vendor.badges[0].id" class="h-6" />
          <span v-if="vendor.oidc" class="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">OIDC</span>
          <span v-if="vendor.saml" class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">SAML</span>
        </div>
        <div class="text-sm text-gray-600 mt-1">License: {{ vendor.license }}</div>
        <a :href="vendor.repo" class="text-sm text-blue-500 underline" target="_blank">Source</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import registry from '../data/registry.json';
import { ref, computed } from 'vue';

const search = ref('');
const filterOIDC = ref(false);
const filterSAML = ref(false);
const filterLicense = ref('');

const licenses = Array.from(new Set(registry.map(r => r.license))).filter(Boolean);

const filtered = computed(() => {
  return registry.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(search.value.toLowerCase());
    const matchesOIDC = !filterOIDC.value || v.oidc;
    const matchesSAML = !filterSAML.value || v.saml;
    const matchesLicense = !filterLicense.value || v.license === filterLicense.value;
    return matchesSearch && matchesOIDC && matchesSAML && matchesLicense;
  });
});
</script>
