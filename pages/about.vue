<template>
  <div class="section-wrapper bg-green-100 p-6 rounded-lg shadow-md">
    <h2 class="section-heading text-3xl font-semibold text-gray-800 mb-4">
      About
    </h2>
    <p class="section-text text-lg text-gray-700 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat excepturi
      esse, nobis molestias incidunt nesciunt modi vero beatae at deserunt!
    </p>

    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja/", {
  method: "post",
  body: { age: 30 },
});
</script>

<style scoped></style>
