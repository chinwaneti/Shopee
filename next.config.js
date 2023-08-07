/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
        remotePatterns: [{
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'ng.jumia.is',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.ltwebstatic.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'us.shein.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                port: '',
                pathname: '/**',
            },
            
        
        ]}}