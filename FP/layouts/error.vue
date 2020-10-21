<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>

    <!-- we used a tag cz if app crash, we cant access to js to use nuxt link -->
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>