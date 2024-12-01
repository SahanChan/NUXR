<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <div v-for="p in products" :key="p.id" class="flex justify-center">
      <ProductCard :product="p" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

//fethcing products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
useHead({
  title: "Nuxt Dojo | Merch",
});
</script>

<style scoped></style>
