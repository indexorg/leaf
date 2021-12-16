const path = require('path')
import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import react from '@vitejs/plugin-react'
const reactSvgPlugin = require('vite-plugin-react-svg');

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/main.js'),
            name: 'indexorg__leaf',
            fileName: format => `index.${format}.js`
        },
        rollupOptions: {
            external: [
                '@stitches/react',
                'color-convert',
                'immutability-helper',
                'lodash',
                'react-dnd-html5-backend',
                'react-dnd',
                'react-dom',
                'react-query',
                'react-router',
                'react',
                'base-64',
                'dayjs',
                'prop-types',
                'react-router-dom',
            ],
            output: {
                globals: {
                    react: 'React',
                    '@stitches/react': 'stitches',
                    lodash: 'lodash',
                }
            }
        }
    },
    plugins: [
        react(),
        reactSvgPlugin({
            expandProps: 'start',
            replaceAttrValues: {
                'black': 'currentColor'
            }
        }),
        ViteAliases()
    ]
})