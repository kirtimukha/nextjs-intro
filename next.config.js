/** @type {import('next').NextConfig} */
/*const API_KEY ="cdb8382d319ee2d3230abca55d55fe13";*/
const API_KEY =process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

/*
const API_KEY ="cdb8382d319ee2d3230abca55d55fe13";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return [
      {
        source: "/contact/:path*",
        destination:"/form/:path*",
        permanent: "false" /// 브라우저가 계속 기억해야 하는지를 정함
      }
    ]
  },
  async rewrite (){ //redirect랑 비슷하지만, url 이 변경되지 않는다.
    return [
      {
        source:"/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      }
    ]
  }
}

module.exports = nextConfig


*/
