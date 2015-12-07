new Vue({
	el: '#app',
	data: {
		task: '',
		tasks: [
			{ body: 'Task 1', completed: false }, 
			{ body: 'Task 2', completed: false },
			{ body: 'Task 3', completed: false }
		]
	},
	computed: {
		countOpen: function () {
			var result = 0;
			for(var i=0;i<this.tasks.length;i++) {
				if(!this.tasks[i].completed) {
					result++;
				}
			}
			return result;
		},
		countCompleted: function () {
			var result = 0;
			for(var i=0;i<this.tasks.length;i++) {
				if(this.tasks[i].completed) {
					result++;
				}
			}
			return result;
		},
		count: function () {
			return this.tasks.length;
		}
	},
	methods: {
		remove: function (task) {
			this.tasks.$remove(task);
		},
		add: function () {
			this.tasks.push({
				body: this.task,
				completed: false
			});
			this.task = '';
		},
		complete: function (task) {
			task.completed = true;
		}
	}
});
