<template>
  <div class="tour-list">
    <BaseHeader :title="params.name"></BaseHeader>
  </div>
</template>

<script>
  import BaseHeader from "../components/BaseHeader";
  export default {
    name: "TourList",
    components: {BaseHeader},
    data() {
      return {
        params: this.$route.params
      }
    }
  }
</script>

<style scoped>

</style>
