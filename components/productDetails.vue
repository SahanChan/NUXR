<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    <!-- Product Image -->
    <div class="flex justify-center items-center">
      <img
        :src="product.image"
        alt="product image"
        class="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>

    <!-- Product Info -->
    <div>
      <p class="product-title text-2xl font-bold text-gray-800 mb-2">
        {{ product.title }}
      </p>
      <p class="product-price text-xl font-semibold text-green-600 mb-2">
        ${{ product.price }}
      </p>
      <p class="product-description text-lg text-gray-600">
        {{ product.description }}
      </p>
      <button class="flex">
        <i
          class="material-icons mr-2 text-green-500 hover:text-green-700 mt-2 block"
          >add_shopping_cart</i
        >
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
