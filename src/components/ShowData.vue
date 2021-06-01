<template>
  <div class="columns is-centered">
    <div class="column is-4 ">
      <div ref="box" class="box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userId', 'id', 'title', 'body'],
};
</script>

<style scoped></style>
