<template>
  <div class="product-details p-6 bg-white rounded-lg shadow-lg">
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

//fetch
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product Not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
