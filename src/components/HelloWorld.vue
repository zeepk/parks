<template>
	<div class="hello">
		<h2>National Parks Directory</h2>
		<span class="p-input-icon-left">
			<i class="pi pi-search" />
			<InputText
				class="search"
				type="text"
				v-model="value"
				@keyup="handleSearch"
				placeholder="Search by park name, or an activity like Swimming or Birdwatching"
			/>
		</span>
		<div>
			<DataTable
				:filters="filters"
				:loading="loading"
				class="park-table"
				:value="parksData"
				:rowHover="true"
				:paginator="true"
				:rows="10"
				paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
				:rowsPerPageOptions="[10, 20, 50]"
				currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
			>
				<Column field="fullName" header="Park Name">
					<template #body="slotProps">
						<a :href="slotProps.data.url">
							{{ slotProps.data.name }}
						</a>
					</template>
				</Column>
				<Column
					field="states"
					header="State(s)"
					filterField="states"
					filterMatchMode="in"
				>
					<template #body="slotProps">
						<p>
							{{ slotProps.data.states.split(',').join(', ') }}
						</p>
					</template>
					<template #filter>
						<MultiSelect
							:options="statesList"
							:filter="true"
							v-model="filters['states']"
							placeholder="All"
							class="p-column-filter"
						>
							<template #option="slotProps">
								<div>
									<span>{{ slotProps.option }}</span>
								</div>
							</template>
						</MultiSelect>
					</template>
				</Column>
				<!-- <Column field="images" header="">
					<template #body="slotProps">
						<img
							:src="slotProps.data.images[0].url"
							:alt="slotProps.data.images[0].altText"
							height="48px"
						/>
					</template>
				</Column> -->
			</DataTable>
		</div>
	</div>
</template>

<script>
const API_URL =
	'https://developer.nps.gov/api/v1/parks?&api_key=NgOe6IPlEIDmc6wU76I70zMHtoTAmef8Syyow1PL&limit=500';

export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data: () => {
		return {
			parksData: [],
			value: '',
			loading: true,
			filters: {},
			statesList: [
				'AL',
				'AK',
				'AS',
				'AZ',
				'AR',
				'CA',
				'CO',
				'CT',
				'DE',
				'DC',
				'FM',
				'FL',
				'GA',
				'GU',
				'HI',
				'ID',
				'IL',
				'IN',
				'IA',
				'KS',
				'KY',
				'LA',
				'ME',
				'MH',
				'MD',
				'MA',
				'MI',
				'MN',
				'MS',
				'MO',
				'MT',
				'NE',
				'NV',
				'NH',
				'NJ',
				'NM',
				'NY',
				'NC',
				'ND',
				'MP',
				'OH',
				'OK',
				'OR',
				'PW',
				'PA',
				'PR',
				'RI',
				'SC',
				'SD',
				'TN',
				'TX',
				'UT',
				'VT',
				'VI',
				'VA',
				'WA',
				'WV',
				'WI',
				'WY',
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
	},
};
</script>

<style scoped>
h2 {
	padding: 2vh 0;
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
.park-table {
	max-width: 90vw;
	width: 800px;
	margin: 0 auto;
	padding: 5vh 0;
}
.p-column-filter {
	width: 100%;
}
.search {
	width: 600px;
	max-width: 90vw;
}
</style>
