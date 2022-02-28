<template>
	<div class="top-magento-stores">
		<h2 class="font-34 col-black lh-40">Top Magento Stores</h2>
		<p>
			List of the world’s biggest Magento sites is based on their structure, load speed, navigation,
			UX and mobile-friendliness. These brands are big and famous.
		</p>

		<div class="flex wrap magento-images">
			<div class="img-box" v-for="(item, index) in images" :key="index">
				<!-- <img :src="`../assets/${item.img}`" alt="magento" /> image2 -->
				<img src="../assets/image5.png" alt="magento" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			images: [
				{
					id: 1,
					img: 'image0.png',
				},
				{
					id: 2,
					img: 'image1.png',
				},
				{
					id: 3,
					img: 'image2.png',
				},
				{
					id: 4,
					img: 'image3.png',
				},
				{
					id: 5,
					img: 'image4.png',
				},
				{
					id: 6,
					img: 'image5.png',
				},
				{
					id: 7,
					img: 'image6.png',
				},
			],
		};
	},
};
</script>
<style scoped>
.top-magento-stores {
	padding: 85px 110px;
	background-color: rgba(0, 0, 0, 0.1);
}
.top-magento-stores h2 {
	margin-bottom: 24px;
}
.top-magento-stores h2,
.top-magento-stores p {
	text-align: left;
}
.magento-images {
	gap: 60px;
	margin-top: 50px;
}
.img-box img {
	cursor: pointer;
	filter: grayscale(100%);
	transition: 0.4s ease-in-out;
}
.img-box:hover img {
	filter: grayscale(0%);
	transition: 0.4s ease-in-out;
}
</style>
