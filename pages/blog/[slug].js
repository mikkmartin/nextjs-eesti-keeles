const Post = props => {
  return <h1>{props.title}</h1>
}

export const getServerSideProps = ctx => {
  const lang = ctx.locale ? ctx.locale : 'et'
  const languages = {
    en: 'A blog in english',
    et: 'Eesti keeles blogi',
  }
  return {
    props: {
      title: languages[lang],
    },
  }
}

export default Post
