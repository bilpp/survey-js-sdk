import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: './src/index.js',
        output: {
            file: './dist/bundle.min.js',
            format: 'iife',
            name: 'bilppSurvey'
        },
        plugins: [
            // terser()
        ]
    },
    {
        input: './src/client.js',

        output: [
            {
                file: './dist/client.min.js',
                format: 'iife',
                plugins: [
                    //   terser()
                ]
            },
            {
                file: './dist/client.esm.js',
                format: 'esm',
                plugins: [
                    // terser()
                ]
            },
            {
                file: './dist/client.umd.js',
                format: 'umd',
                name: 'MyModule',
                plugins: [
                    //  terser()
                ]
            }
        ],
        plugins: [
            //  terser()
        ]
    }
];