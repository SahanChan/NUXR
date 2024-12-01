<template>
  <div class="wrapper min-h-screen flex flex-col">
    <!-- Header -->
    <header class="header bg-green-700 p-4">
      <nav class="nav-container flex justify-center">
        <NuxtLink to="/" class="brand-link text-3xl font-bold text-white">
          Nuxt Dojo Merch
        </NuxtLink>
      </nav>
    </header>

    <!-- Content -->
    <div class="flex-grow">
      <slot />
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 p-4">
      <ul class="footer flex justify-center space-x-6">
        <li>
          <NuxtLink to="/" class="footer-link text-white hover:text-green-300"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="footer-link text-white hover:text-green-300"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/products"
            class="footer-link text-white hover:text-green-300"
            >Products</NuxtLink
          >
        </li>
      </ul>
    </footer>
  </div>
</template>
