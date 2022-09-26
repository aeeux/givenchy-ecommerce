import * as React from "react"
import type { HeadFC } from "gatsby"
import "../styles/global.css"
import "../styles/home.scss"
import Loadable from 'react-loadable';

function LoadingComponent(props) {
  return <div />
}

const HomeLazy = Loadable({
  loader: () => import('../containers/Home'),
  loading: LoadingComponent,
})

const IndexPage = () => {
  return (
    <>
      <HomeLazy />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
