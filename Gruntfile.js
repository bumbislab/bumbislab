module.exports = function(grunt) {

    grunt.initConfig({

		jshint: {
		  src: ['Gruntfile.js', 'bumbislab-server/**/*.js', 'bumbislab-mobileapp/**/*.js', '!bumbislab-mobileapp/lib/**/*.js', 'bumbislab-models/**/*.js']
		},

		watch: {
		    files: '<%= jshint.src %>',
		    tasks: ['jshint']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['jshint']);

};
