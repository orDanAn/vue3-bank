<template>
  <div class="card">
    <h1 class="card-title">
      {{title}}
      <slot name="heder" />
    </h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    document.title = `${props.title} | Клон банка`
  }
}
</script>

<style>

</style>
