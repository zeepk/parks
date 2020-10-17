<template>
  <div class="container">
    <ParkData :name="$route.params.name" />
  </div>
</template>

<script>
import ParkData from '@/components/ParkData.vue';

export default {
  name: 'Park',
  components: {
		ParkData,
  },

};
</script>

<style scoped>
.container {
  margin: 0;
  min-height: 100vh;
}
</style>
