import config from './src/starting-point/project.config';
var manifest = {
    manifest: {
        theme_color: config.colors.primary,
        background_color: config.colors.background,
        name: config.name,
        short_name: config.name,
        icons: [
            {
                src: 'src/public/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: 'src/public/icon-256x256.png',
                sizes: '256x256',
                type: 'image/png',
            },
            {
                src: 'src/public/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png',
            },
            {
                src: 'src/public/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        description: 'Application',
    },
};
export default manifest;
