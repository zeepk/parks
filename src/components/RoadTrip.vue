<template>
	<div>
		<h1>Road trip time!</h1>
		<p>Here are your stops:</p>
		<ul>
			<li v-for="stop in this.$store.state.tripStops" :key="stop.name">
				{{ stop.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'RoadTrip',
	// data: () => {
	// 	return {
	// 		parksData: [],
	// 	};
	// },
	// created() {},
	// methods: {},
};
</script>

<style scoped>
p,
h1 {
	margin: 0;
}
ul {
	text-align: left;
}
</style>
