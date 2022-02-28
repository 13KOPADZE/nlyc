<template>
	<div class="magento-bell">
		<div class="magento-text-block">
			<img src="../assets/image31.png" alt="magento-logo" />

			<p class="text lh-26">
				Magento is the world's one of the most widely used ecommerce platforms, which is best suited
				for the companies who need fast start in the short term and unlimited flexibility for
				customisations and integrations in long term.
			</p>
		</div>
		<div class="bell-animation" @click="isOpen = true">
			<div class="bell-circle"></div>
			<div class="bell-circle"></div>
			<div class="bell-circle"></div>
			<svg
				width="42"
				height="42"
				viewBox="0 0 42 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M7.89502 15.5061C8.72115 8.8971 14.3393 3.9375 20.9998 3.9375C27.6602 3.9375 33.2784 8.8971 34.1045 15.5061L35.8351 29.351C36.181 32.1183 34.0233 34.5625 31.2345 34.5625H28.8527L28.7611 34.7686C27.3979 37.8358 24.3562 39.8125 20.9997 39.8125C17.6432 39.8125 14.6015 37.8358 13.2383 34.7686L13.1467 34.5625H10.765C7.97624 34.5625 5.81851 32.1183 6.16442 29.351L7.89502 15.5061ZM25.8906 34.5625H16.1088C17.1836 36.1839 19.0118 37.1875 20.9997 37.1875C22.9876 37.1875 24.8158 36.1839 25.8906 34.5625Z"
					fill="#F05C22"
				/>
				<circle cx="30" cy="8" r="6" fill="#6CBE45" />
			</svg>
		</div>

		<Modal :isOpen="isOpen" @close="closeModal" />
	</div>
</template>
<script>
import Modal from '../modals/Modal.vue';
export default {
	components: {
		Modal,
	},
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		closeModal() {
			this.isOpen = false;
		},
	},
};
</script>
