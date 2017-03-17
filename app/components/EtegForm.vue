<template>
  <form @submit.prevent>
    <slot />
  </form>
</template>

<script>
  export default {};
</script>

<style scoped>
  form {
    padding: 1em;
  }
</style>
