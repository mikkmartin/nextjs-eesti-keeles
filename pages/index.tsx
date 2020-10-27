import { FC } from 'react'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

type Props = {
  title: string
  url: string
}

const Home: FC<Props> = ({ title, url }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Link href={url}>
        <a>{url}</a>
      </Link>
      <br />
      <br />
      <small>
        <Link href="/" locale="en">
          <a>English pls</a>
        </Link>
        <br />
        <Link href="/" locale="et">
          <a>Eesti ikkagi</a>
        </Link>
      </small>
    </div>
  )
}

//Derp
export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const lang = ctx.locale ? ctx.locale : 'et'
  const languages = {
    en: { title: 'Hello', url: 'blog/test' },
    et: { title: 'Tere', url: 'blogiiii/testin-seda-värki' },
  }
  return {
    //@ts-ignore
    props: languages[lang],
  }
}

export default Home
