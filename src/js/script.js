// $(function(){
// 	console.log('test');
// });

var app = new Vue({
	el: '#app',
	data: {
		windowHeight: '100vh',
		nationInfo,
		message: 'test',
		currentNation: false
	},
	methods: {
		getNationInfo(name) {
			this.currentNation = this.nationInfo[name];
		},
		getWindowHeight(event) {
			this.windowHeight = window.innerHeight + 'px';
		},
	},
	mounted() {
		this.$nextTick(function() {
			window.addEventListener('resize', this.getWindowHeight);
			this.getWindowHeight();
		});
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.getWindowHeight);
	},
});
