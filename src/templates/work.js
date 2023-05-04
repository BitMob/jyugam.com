import React, { useContext } from "react"
import { graphql, Link } from "gatsby"

import Article from "../components/Article"
import SEO from "../components/seo"
import LangSwitch from "../components/LangSwitch"

import Context from "../helpers/context"
import i18n from "../helpers/i18n"

export default function Template({ data, location }) {
  const { lang, sizes } = useContext(Context).states
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { titleZh, titleEn } = frontmatter
  const { isMobile } = sizes
  let fromHome = location.state
  const goBackCnt = (
    <>
      {"<-"}
      <span>{i18n.backHome[lang]}</span>
    </>
  )
  const goBack = fromHome ? (
    <a className="back" onClick={() => window.history.go(-1)}>
      {goBackCnt}
    </a>
  ) : (
    <Link to="/" className="back">
      {goBackCnt}
    </Link>
  )
  return (
    <>
      <SEO title={lang === "zh" ? titleZh : titleEn} />
      <div className="articleTop">
        {goBack}
        <LangSwitch atTop />
      </div>
      <Article isMobile={isMobile} html={html} lang={lang} frontmatter={frontmatter} />
    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        titleEn
        titleZh
        thumb
        gallery
        clientEn
        clientZh
        date
        url
      }
    }
  }
`
