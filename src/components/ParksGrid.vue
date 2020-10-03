<template>
	<div>
		<span class="made-by">
			<a href="https://matthughes.dev/">made by matt hughes // </a>

			<a href="https://github.com/zeepk/parks">source code</a>
		</span>
		<h2>National Parks Activities Directory</h2>
		<div>
			<span class="p-input-icon-left">
				<i class="pi pi-search" />
				<InputText
					class="search"
					type="text"
					v-model="value"
					@keyup="handleSearch"
					placeholder="Search by park name or activity 🌄"
				/>
			</span>
		</div>
		<div class="state-select">
			<MultiSelect
				v-model="selectedStates"
				:options="statesList"
				optionLabel="name"
				placeholder="All States"
				@change="handleStateFilter"
			/>
		</div>
		<div v-if="loading"><ProgressSpinner class="loading-spinner" /></div>
		<div v-else>
			<div class="p-grid">
				<div
					v-for="park in parksData"
					:key="park.fullName"
					class="p-col-12 p-md-6 p-lg-3"
				>
					<ParkCard :data="park" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ParkCard from './ParkCard.vue';
import activityFormatter from './ActivityFormatter';
import states from '../assets/states';
const API_URL =
	'https://developer.nps.gov/api/v1/parks?&api_key=NgOe6IPlEIDmc6wU76I70zMHtoTAmef8Syyow1PL&limit=500';

export default {
	name: 'ParksGrid',
	components: {
		ParkCard,
	},
	data: () => {
		return {
			parksData: [],
			value: '',
			loading: true,
			selectedStates: [],
			statesList: states,
		};
	},
	created() {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
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
	methods: {
		handleSearch: function() {
			// filter search results
			console.log(this.value);
			this.parksData = this.apiData.data.filter(
				(park) =>
					park.fullName.toLowerCase().includes(this.value.toLowerCase()) ||
					JSON.stringify(park.activities)
						.toLowerCase()
						.includes(this.value.toLowerCase())
				// park.description.toLowerCase().includes(this.value.toLowerCase())
			);
		},
		handleStateFilter: function() {
			// filter search results by state
			if (this.selectedStates.length === 0) {
				// if empty, no boxes are selected, set the data back to full dataset
				this.parksData = this.apiData.data;
			} else {
				console.log(this.selectedStates);
				this.parksData = this.apiData.data.filter((park) =>
					park.states
						.split(',')
						.some((state) =>
							this.selectedStates
								.map((stateObj) => stateObj.name)
								.includes(state)
						)
				);
			}
		},
	},
};
</script>

<style scoped>
h2 {
	padding: 5vh 0;
	margin: 0;
}
a {
	color: black;
	text-decoration: none;
}
.loading-spinner {
	width: 200px;
	height: 200px;
	position: absolute;
	left: calc(50vw - 100px);
	top: calc(50vh - 100px);
}
.p-grid {
	margin: 0;
	padding: 5vh 5vw;
}
.search {
	width: 600px;
	max-width: 80vw;
}
.p-multiselect {
	width: 100%;
}
.state-select {
	margin: 10px auto;
	width: 100%;
	max-width: 300px;
}
.made-by {
	position: absolute;
	font-size: 1.5vh;
	top: 0;
	left: 5px;
}
.made-by > a {
	color: rgba(255, 255, 255, 0.48) !important;
}
</style>
