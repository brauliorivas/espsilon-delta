/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rtaliwrrckfphbuyxqlh.supabase.co',
                port: '',
                pathname: '/storage/v1/object/sign/imagenes/**',
            }
        ]
    }
}

module.exports = nextConfig
