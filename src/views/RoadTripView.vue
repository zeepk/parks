<template>
	<div class="container">
		<RoadTrip />
	</div>
</template>

<script>
import RoadTrip from '@/components/RoadTrip.vue';

export default {
	name: 'RoadTripView',
	components: {
		RoadTrip,
	},
};
</script>

<style scoped>
.container {
	margin: 0;
	min-height: 100vh;
}
</style>
