module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
        // running `grunt less` will compile once
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: true,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapFilename: 'main.css.map', // where file is generated and located
                    sourceMapURL: 'main.css.map',
                    sourceMapRootpath: '/', // adds this path onto the sourcemap filename and less file paths
                    sourceMapBasepath: '/'
                },
                files: {
                    "style.css": "less/new_style/main.less"
                }
            }
        },
        // running `grunt watch` will watch for changes
        watch: {
            files: "less/**/*.less",
            tasks: ["less"],
            options: {
                nospawn: true
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    keepalive: true
                }
            }
        }
    });
    grunt.registerTask('default', ['less', 'watch']);
};