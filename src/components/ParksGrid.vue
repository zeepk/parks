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
			statesList: [
				{
					name: 'AL',
					code: 'AL',
				},
				{
					name: 'AK',
					code: 'AK',
				},
				{
					name: 'AS',
					code: 'AS',
				},
				{
					name: 'AZ',
					code: 'AZ',
				},
				{
					name: 'AR',
					code: 'AR',
				},
				{
					name: 'CA',
					code: 'CA',
				},
				{
					name: 'CO',
					code: 'CO',
				},
				{
					name: 'CT',
					code: 'CT',
				},
				{
					name: 'DE',
					code: 'DE',
				},
				{
					name: 'DC',
					code: 'DC',
				},
				{
					name: 'FM',
					code: 'FM',
				},
				{
					name: 'FL',
					code: 'FL',
				},
				{
					name: 'GA',
					code: 'GA',
				},
				{
					name: 'GU',
					code: 'GU',
				},
				{
					name: 'HI',
					code: 'HI',
				},
				{
					name: 'ID',
					code: 'ID',
				},
				{
					name: 'IL',
					code: 'IL',
				},
				{
					name: 'IN',
					code: 'IN',
				},
				{
					name: 'IA',
					code: 'IA',
				},
				{
					name: 'KS',
					code: 'KS',
				},
				{
					name: 'KY',
					code: 'KY',
				},
				{
					name: 'LA',
					code: 'LA',
				},
				{
					name: 'ME',
					code: 'ME',
				},
				{
					name: 'MH',
					code: 'MH',
				},
				{
					name: 'MD',
					code: 'MD',
				},
				{
					name: 'MA',
					code: 'MA',
				},
				{
					name: 'MI',
					code: 'MI',
				},
				{
					name: 'MN',
					code: 'MN',
				},
				{
					name: 'MS',
					code: 'MS',
				},
				{
					name: 'MO',
					code: 'MO',
				},
				{
					name: 'MT',
					code: 'MT',
				},
				{
					name: 'NE',
					code: 'NE',
				},
				{
					name: 'NV',
					code: 'NV',
				},
				{
					name: 'NH',
					code: 'NH',
				},
				{
					name: 'NJ',
					code: 'NJ',
				},
				{
					name: 'NM',
					code: 'NM',
				},
				{
					name: 'NY',
					code: 'NY',
				},
				{
					name: 'NC',
					code: 'NC',
				},
				{
					name: 'ND',
					code: 'ND',
				},
				{
					name: 'MP',
					code: 'MP',
				},
				{
					name: 'OH',
					code: 'OH',
				},
				{
					name: 'OK',
					code: 'OK',
				},
				{
					name: 'OR',
					code: 'OR',
				},
				{
					name: 'PW',
					code: 'PW',
				},
				{
					name: 'PA',
					code: 'PA',
				},
				{
					name: 'PR',
					code: 'PR',
				},
				{
					name: 'RI',
					code: 'RI',
				},
				{
					name: 'SC',
					code: 'SC',
				},
				{
					name: 'SD',
					code: 'SD',
				},
				{
					name: 'TN',
					code: 'TN',
				},
				{
					name: 'TX',
					code: 'TX',
				},
				{
					name: 'UT',
					code: 'UT',
				},
				{
					name: 'VT',
					code: 'VT',
				},
				{
					name: 'VI',
					code: 'VI',
				},
				{
					name: 'VA',
					code: 'VA',
				},
				{
					name: 'WA',
					code: 'WA',
				},
				{
					name: 'WV',
					code: 'WV',
				},
				{
					name: 'WI',
					code: 'WI',
				},
				{
					name: 'WY',
					code: 'WY',
				},
			],
		};
	},
	created() {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
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
