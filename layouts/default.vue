<template>
  <div class="wrapper">
    <header class="header bg-green-700 p-4">
      <nav class="nav-container flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-white">
          Nuxt Dojo
        </NuxtLink>
        <ul class="flex space-x-6">
          <li>
            <NuxtLink to="/" class="text-white hover:text-green-300">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-white hover:text-green-300">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="text-white hover:text-green-300">
              Products
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div>
      <slot />
    </div>
  </div>
</template>
