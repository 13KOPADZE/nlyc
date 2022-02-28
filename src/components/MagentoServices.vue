<template>
	<div class="flex between magento-services container">
		<div class="services-info">
			<h2 class="font-32 col-black lh-40">Our Magento Services</h2>

			<p class="text lh-26">
				That we create a technical requirements document which
				<b> could be used with any software development team</b>
			</p>
			<div class="flex al-center services-list" v-for="(item, index) in services" :key="index">
				<img class="services-logo" src="../assets/services.png" alt="services" />

				<p class="font-18 lh-40">{{ item.title }}</p>
			</div>
		</div>
		<div class="magento-img-box">
			<img src="../assets/Group.png" alt="group" />
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			services: [
				{
					id: 1,
					title: 'React / Vue Front End Development',
				},
				{
					id: 2,
					title: 'Custom Design Development ',
				},
				{
					id: 3,
					title: 'Custom Module Development',
				},
				{
					id: 4,
					title: 'Mobile App Development',
				},
				{
					id: 5,
					title: 'Optimization',
				},
				{
					id: 6,
					title: 'Support',
				},
				{
					id: 7,
					title: 'Integrations with 3rd party systems',
				},
			],
		};
	},
};
</script>
