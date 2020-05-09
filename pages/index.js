import React from 'react';
import Head from 'next/head';
import Layout from '../Components/Layout'


const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Home</h1>
      <div>
        <img src="/img/protagonistas-ilustracion-Harry-Potter-Home_1452165397_119408450_2072x1024.jpg" alt="Imagen de harry" />
      </div>
    </Layout>
  )
}
export default Home;