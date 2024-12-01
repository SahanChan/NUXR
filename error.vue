<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-800"
  >
    <p class="text-6xl font-bold text-red-600 mb-4">
      {{ error.statusCode }}
    </p>
    <p class="text-2xl font-semibold mb-2">Ooops!</p>
    <p class="text-lg text-gray-600">
      {{ error.message }}
    </p>
    <button
      class="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
      @click="handleClearError"
    >
      Go Home...
    </button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
