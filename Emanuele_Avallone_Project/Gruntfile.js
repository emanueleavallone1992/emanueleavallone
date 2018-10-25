module.exports=function(grunt)
{
grunt.initConfig({
    serve: {
        options: {
            port: 9000
        }
    },
    browserify:{
    	dist:{
    		files:{
    			'src/js/bundle.js': 'src/js/likef.js'
    		}
    	}
    },
    watch:{
    	scripts : {
    		files:'src/js/likef.js',
    		tasks:'browserify'
    	}

    },
    babel:{
    	dist:{
    	files:{
    	'src/js/bundle-es5.js':'src/js/bundle.js'
    }
    }
    },
    cssmin:{
    	'src/css/mini.min.css': 'src/css/style.css'

    }

});

grunt.loadNpmTasks('grunt-serve');
grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-babel');


/*grunt.task.registerTask('start',['babel']);
grunt.task.registerTask('develop',['watch']);
grunt.task.registerTask('build',['cssmin','babel','uglify','serve']);*/
grunt.task.registerTask('build',['serve']);

};