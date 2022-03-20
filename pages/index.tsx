import type { NextPage } from 'next'
import Image from 'next/image'
import Meta from './components/meta'
import Menu from './components/menu'


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://bezoge.nftendo.net/api/header-master?populate%5bLev0%5d%5bpopulate%5d%5bColumnLinks1%5d=*&populate%5bLev0%5d%5bpopulate%5d%5bColumnLinks2%5d=*&populate%5bLev0%5d%5bpopulate%5d%5bImageLink1%5d%5bpopulate%5d=*&populate%5bLev0%5d%5bpopulate%5d%5bImageLink2%5d%5bpopulate%5d=*')
  const menuList = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      menuList,
    },
  }
}





const Home: NextPage = ({menuList}: any) => {
  return (
    <div>

      <Meta title="This Is A Title | Website Name"
        desc="This is the description"
        canonical="https://www.example.com"
      />

      <header>
        <Menu {...menuList.data} />
      </header>


    </div>
  )
}


export default Home
