<template>
	<Card class="park-card">
		<template slot="header">
			<img
				loading="lazy"
				:src="
					data.images[0]
						? data.images[0].url
						: 'https://www.mountaineers.org/images/placeholder-images/RoutesPlacesDefaultImage.jpg/@@images/d2bde39b-379d-47b1-9398-827f6444b501.jpeg'
				"
				:alt="data.images[0] ? data.images[0].altText : 'park'"
				class="card-image"
				width="600"
				height="400"
			/>
			<Button
				icon="pi pi-plus"
				class="p-button-rounded p-button-success add-roadtrip"
				@click="addStop($event)"
				v-tooltip.left="'Add to road trip!'"
			/>
		</template>
		<template slot="title"
			><a :href="`/park/${data.parkCode}`">{{ data.fullName }}</a>
			<p class="states">{{ data.states.split(',').join(', ') }}</p>
		</template>
		<template class="card-content" slot="content">
			<p
				class="activity"
				v-for="activity in data.activities"
				:key="activity.id"
			>
				{{ activity.name }}
			</p>
		</template>
	</Card>
</template>

<script>
export default {
	name: 'ParkCard',
	props: {
		data: Object,
	},
	methods: {
		addStop() {
			this.$store.commit('increment');
			this.$store.commit('addStop', this.data);
			// console.log(this.$store.state.tripStopCount);
			// console.log('added');
		},
	},
};
</script>

<style scoped>
a {
	color: black;
	text-decoration: none;
}
.card-image {
	max-height: 200px;
	object-fit: cover;
}
.park-card::-webkit-scrollbar {
	display: none;
}
.park-card {
	width: 100%;
	height: 50vh;
	overflow: auto;
	scrollbar-width: none;
	position: relative;
}
.card-content {
	padding: 0 !important;
}
.activity {
	text-align: left;
}
.states {
	font-size: 1rem;
	margin-top: 5px;
}
.add-roadtrip {
	position: absolute;
	top: 2%;
	right: 2%;
}
</style>
