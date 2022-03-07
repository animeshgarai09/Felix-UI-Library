import babel from "rollup-plugin-babel"
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from 'rollup-plugin-postcss'
import commonjs from "@rollup/plugin-commonjs";
import autoprefixer from "autoprefixer";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");
export default [
    {
        input: "src/index.js", // Entry point for the component library
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: [['@babel/preset-react', { "runtime": "automatic" }]]
            }),
            postcss({
                plugins: [autoprefixer()],
                modules: true,
                extract: true,
                syntax: 'postcss-scss',
                use: ['sass'],
                minimize: true,
            }),
            external(),
            resolve(),
            commonjs(),
            terser()
        ],
    },
];