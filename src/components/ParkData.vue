<template>
	<div>
        <div v-if="loading"><ProgressSpinner class="loading-spinner" /></div>
		<div v-else >
            <h1>{{parkData.fullName}}</h1>
			<div class="park-info-container">
            <a :href="`http://maps.google.com/?q=${parkData.fullName.split(' ').join('+')}`" class="link location">📍 Location and Directions</a>
			<div v-if="parkData.contacts.phoneNumbers.length > 0">
			<a :href="`tel:${parkData.contacts.phoneNumbers[0].phoneNumber.split('/').join('-') || 'google.com'}`" class="link phone">📱 Contact Phone</a>
			</div>
            <p class="description">{{parkData.description}}</p>
			</div>
			
<Carousel :value="parkData.images" :numVisible="1" :numScroll="1" :circular="true" >
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
			parkData: [],
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
				data.data = data.data.map((park) => {
					park.activities = park.activities.map((activity) => {
						activity.name = activityFormatter(activity.name);
						return activity;
					});
					return park;
				});
				this.apiData = data;
				this.parkData = data.data[0];
			})
			.catch((err) => console.log(err))
			.finally(() => (this.loading = false));
	},
	
};
</script>

<style scoped>
h1 {
    margin: 0;
    padding: 3vh 0;
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
.park-info-container {
	text-align: left;
	padding: 0 5vw;

}
.link {
	color: white;
	text-decoration: none;
	line-height: 250%;
}
</style>
