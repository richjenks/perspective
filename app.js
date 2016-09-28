var app = new Vue({
	el: '#app',
	data: {
		db: db,
		country: 'United Kingdom',
		countries: Object.keys(this.db),
		gender: 'male',
		age: 30,
	},
	computed: {
		percent: function() {
			var percent = this.age / this.db[this.country][this.gender] * 100;
			if (percent > 100) return 100;
			else return percent;
		}
	}
});