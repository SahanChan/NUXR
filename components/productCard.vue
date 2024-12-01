<template>
  <div
    class="product-card p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
  >
    <img
      :src="product.image"
      alt="productThumb"
      class="w-full h-48 object-cover rounded-lg mb-4"
    />
    <p class="text-lg font-semibold text-gray-800">{{ product.title }}</p>
    <NuxtLink
      :to="`/products/${product.id}`"
      class="text-green-500 hover:text-green-700 mt-2 block"
    >
      <p>View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
