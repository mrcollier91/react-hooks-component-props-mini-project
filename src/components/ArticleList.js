import React from 'react'
import Article from './Article'
function ArticleList({posts}) {
// console.log(props.blogData)
    const testArray = posts.map((postObj) => {
     return  <Article key = {postObj.id} title = {postObj.title} date= {postObj.date} preview = {postObj.preview}/>
})
  return (
    <main>
        {testArray}
    </main>
  )
}

export default ArticleList