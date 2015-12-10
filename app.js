new Vue({
	el: '#vuejs',
	data: {
		count: 10,
		task: '',
		tasks: [
			'Task 1',
			'Task 2'
		]
	},
	watch: {
		task: function () {
			this.add();
		}
	},
	computed: {
		tasksCount: function () {
			return this.tasks.length;
		}
	},
	methods: {
		like: function () {
			this.count++;
		},
		add: function () {
			if(this.task.length > 3) {
				this.tasks.push(this.task);
			}
		},
		remove: function (task) {
			this.tasks.$remove(task);
		}
	}
});
