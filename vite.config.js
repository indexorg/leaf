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
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: [
                '@headlessui/react',
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
            ],
            output: {
                globals: {
                    react: 'React',
                    '@headlessui/react': 'headlessui',
                    '@stitches/react': 'stitches',
                    
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