<template>
	<div class="magento-details flex between">
		<img class="details-bg" src="../assets/details.png" alt="details" />

		<div class="details-text z-2">
			<h2 class="font-32 lh-52 col-white">
				We Accommodate <br />
				Your Business Needs
			</h2>
			<p class="font-16 lh-52 col-grey">T/M pricing 30$/hr. (VAT incl.)</p>
		</div>
		<div class="details-actions z-2">
			<button class="details-button font-14" @click="isOpen = true">Get more details</button>

			<a class="col-white font-14 plan-link" href="#"> Plan A Call </a>
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
