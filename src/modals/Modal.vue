<template>
	<div class="modal" :class="{ active: isOpen }">
		<div class="modal-bg" @click="$emit('close')"></div>
		<div class="modal-content">
			<div class="flex between al-center modal-title modal-container">
				<h4 class="font-20 col-black lh-26">Winter offer</h4>

				<svg
					@click="$emit('close')"
					class="pointer"
					width="14"
					height="14"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7 5.93934L12.4697 0.46967C12.7626 0.176777 13.2374 0.176777 13.5303 0.46967C13.8232 0.762563 13.8232 1.23744 13.5303 1.53033L8.06066 7L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L7 8.06066L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
						fill="#22282F"
					/>
				</svg>
			</div>
			<div class="flex between al-center modal-container main-block">
				<div class="form">
					<h3 class="font-18 lh-26">Request call</h3>

					<form class="form">
						<div class="input" :class="!form.name && clicked ? 'error' : ''">
							<input :class="form.name ? 'filled' : ''" v-model="form.name" type="text" id="name" />
							<label for="name">Name</label>
							<p class="error-txt" :class="form.name.length < 2 && clicked ? 'active' : ''">
								Validate name
							</p>
						</div>
						<div class="input" :class="!validateEmail(form.email) && clicked ? 'error' : ''">
							<input
								@keypress="validateEmail(form.email)"
								:class="form.email ? 'filled' : ''"
								v-model="form.email"
								type="email"
								id="email"
							/>
							<label for="email">Email</label>
							<p class="error-txt" :class="!validateEmail(form.email) && clicked ? 'active' : ''">
								Validate email
							</p>
						</div>

						<VuePhoneNumberInput
							no-flags
							error
							error-color="#931914"
							v-model="form.phone"
							@update="resultsExample = $event"
						/>

						<div class="input">
							<textarea
								:class="form.comment ? 'filled' : ''"
								v-model="form.comment"
								type="text"
								id="comment"
							/>
							<label for="comment">Comment</label>
						</div>
						<button class="relative submit-button" @click.prevent="sendFormData()">Request</button>
					</form>
				</div>

				<div class="between-line">
					<div class="choice">OR</div>
				</div>

				<div class="plan-a-call">
					<div class="modal-img-box">
						<img src="../assets/8.png" alt="" />
					</div>
					<h3 class="font-18 lh-26">Request call</h3>
					<p>Plan a call with us in calendar</p>

					<a href="#" class="plan-link" target="_blank"> Plan a call </a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
export default {
	props: ['isOpen'],
	components: {
		VuePhoneNumberInput,
	},

	data() {
		return {
			form: {
				name: '',
				email: '',
				phone: '',
				comment: '',
			},
			resultsExample: null,
			clicked: false,
		};
	},
	methods: {
		validateEmail(email) {
			const re =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		},
		sendFormData() {
			this.clicked = true;
			if (
				this.resultsExample.isValid &&
				this.validateEmail(this.form.email) &&
				this.form.name.length > 2
			) {
				console.log('Success');
			} else {
				console.log('Wrong inputs');
			}
		},
	},
};
</script>
