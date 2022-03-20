import type { NextPage } from 'next'
import Image from 'next/image'
import Meta from './components/meta'
import Menu from './components/menu'

const Home: NextPage = () => {
  return (
    <div>

      <Meta title="This Is A Title | Website Name"
        desc="This is the description"
        canonical="https://www.example.com"
      />

      <header>
        <Menu />
      </header>


    </div>
  )
}

export default Home
