const Post = props => {
  return <h1>{props.title}</h1>
}

export const getServerSideProps = ctx => {
  const languages = {
    en: 'A blog in english',
    et: 'Eesti keeles blogi',
  }
  return {
    props: {
      title: languages[ctx.locale],
    },
  }
}

export default Post
