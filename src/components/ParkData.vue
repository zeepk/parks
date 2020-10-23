<template>
	<div>
        <div v-if="loading"><ProgressSpinner class="loading-spinner" /></div>
		<div v-else>
            <h1>Park Data for:</h1>
            <h1>{{parksData[0].fullName}}</h1>
			
<Carousel :value="parksData[0].images" :numVisible="1" :numScroll="1" :circular="true" >
	<template #item="slotProps">
                    <img class="carousel-image" :src="slotProps.data.url" :alt="slotProps.data.altText" />
	</template>
</Carousel>
		</div>
	</div>
</template>

<script>
const API_URL =
	'https://developer.nps.gov/api/v1/parks?&api_key=NgOe6IPlEIDmc6wU76I70zMHtoTAmef8Syyow1PL&parkCode=';
import activityFormatter from './ActivityFormatter';

export default {
	name: 'ParkData',
	data: () => {
		return {
			parksData: [],
			loading: true,
		};
    },
      props: {
		name: String,
	},
	created() {
		fetch(API_URL + this.name)
			.then((res) => res.json())
			.then((data) => {
                console.log(data.data[0])
                console.log(data.data[0].images)
				data.data = data.data.map((park) => {
					park.activities = park.activities.map((activity) => {
						activity.name = activityFormatter(activity.name);
						return activity;
					});
					return park;
				});
				this.apiData = data;
				this.parksData = data.data;
			})
			.catch((err) => console.log(err))
			.finally(() => (this.loading = false));
	},
	
};
</script>

<style scoped>
h1 {
    margin: 0;
    padding: 10vh 0;
}
.loading-spinner {
	width: 200px;
	height: 200px;
	position: absolute;
	left: calc(50vw - 100px);
	top: calc(50vh - 100px);
}
.carousel-image {
	max-height: 50vh;
	max-width: 100%;
}
</style>
