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
    	},
        lesscss:{
            files:'src/css/style.less',
            tasks: 'less'
        }

    },
    babel:{
        options: {
            presets: ['env']
        },
    	dist:{
        	files:{
        	   'src/js/bundle-es5.js':'src/js/bundle.js'
            }
        }
    },
    cssmin:{
        dist: {
            files: {
                'Dist/css/mini.min.css': [
                    'node_modules/bootstrap/dist/css/bootstrap.css',
                    'src/css/style.css', 'node_modules/slick-carousel/slick/slick.css','node_modules/slick-carousel/slick/slick-theme.css']
            }
        }
    },	
    less:{
        dist: {
            files: {
                'src/css/style.css': 'src/css/style.less'
            }
        }
    },
    uglify:{
        dist:{
            files: {
                'Dist/js/newbundle.min.js': 'src/js/bundle-es5.js'
            }
        }
    }

});

grunt.loadNpmTasks('grunt-serve');
grunt.loadNpmTasks('grunt-browserify'); 
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-babel');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');



grunt.task.registerTask('develop',['watch']);
grunt.task.registerTask('build',['cssmin','babel','uglify','serve']);


};