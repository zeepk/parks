<template>
	<div class="home">
		<ParksGrid />
	</div>
</template>

<script>
// @ is an alias to /src
import ParksGrid from '@/components/ParksGrid.vue';

export default {
	name: 'Home',
	components: {
		ParksGrid,
	},
};
</script>
