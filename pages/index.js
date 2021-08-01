import Layout from '../components/Layout'
import About from '../components/resume/About'
import Navbar from '../components/resume/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <About />
    </Layout>
  )
}
