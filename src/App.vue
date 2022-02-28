<template>
	<div class="def-padding">
		<Main />
		<MagentoBell />
		<TopMagento />
		<MagentoServices />
		<MagentoDetails />
	</div>
</template>

<script>
import Main from './components/Main.vue';
import MagentoBell from './components/MagentoBell.vue';
import TopMagento from './components/TopMagento.vue';
import MagentoServices from './components/MagentoServices.vue';
import MagentoDetails from './components/MagentoDetails.vue';

export default {
	name: 'App',
	components: {
		Main,
		MagentoBell,
		TopMagento,
		MagentoServices,
		MagentoDetails,
	},
};
</script>
