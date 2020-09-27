<template>
	<div class="hello">
		<h1>Parks</h1>
		<InputText type="text" v-model="value" @keydown="handleSearch" />
		<DataTable :value="parksData.data" :rowHover="true">
			<Column field="fullName" header="Park Name"></Column>
		</DataTable>
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
	data: function() {
		return {
			parksData: 'The Title',
			value: '',
		};
	},
	created() {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => (this.parksData = data));
	},
	methods: {
		handleSearch: function() {
			// filter search results
			console.log(this.value);
		},
	},
};
</script>

<style scoped></style>
