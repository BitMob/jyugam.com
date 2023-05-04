import React, { useState, useContext } from "react"
import ReactHtml from "react-html-parser"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import LangSwitch from "../components/LangSwitch"

import i18n from "../helpers/i18n"
import Context from "../helpers/context"
// import { CASE_PATH } from "../helpers/constants"
// import { getLang } from "../helpers/utils"

const MorePage = ({ data, location }) => {
  const { states } = useContext(Context)
  const { sizes, lang } = states
  const { isMobile } = sizes
  const [expands, setExpands] = useState({ techniques: false, tools: false, experience: false })

  const { edges } = data.allMarkdownRemark
  const intros = edges.filter(edge => edge.node.frontmatter.type === "intro")

  let colData = {}
  intros.forEach(intro => {
    const { frontmatter, html } = intro.node
    const { slug } = frontmatter
    const zh = html.split("<!-- lang -->")[0]
    const en = html.split("<!-- lang -->")[1]
    // const cx = "shiftRight"

    colData = {
      ...colData,
      [slug]: {
        zh: <div key={slug}>{ReactHtml(zh)}</div>,
        en: <div key={slug}>{ReactHtml(en)}</div>,
      },
    }
  })

  const genCol = key => {
    const expanded = expands[key]
    const isAbout = key === "about"
    return (
      <div className={`col ${key}`} key={key} style={{ marginBottom: 60 }}>
        <div className="heading" style={{ marginBottom: 20 }}>
          <h1 className="sectionTitle">{i18n[key][lang]}</h1>
          {!isAbout ? (
            <a className="expand" onClick={() => setExpands({ ...expands, [key]: !expanded })}>
              {"("}
              <span>{i18n[expanded ? "fold" : "expand"][lang]}</span>
              {")"}
            </a>
          ) : null}
          {isAbout && isMobile ? (
            <a onClick={() => setIsSidebarShow(true)} className="sidebarTrigger">
              {i18n.more[lang]}
            </a>
          ) : null}
        </div>
        <div
          className={`content ${key === "experience" ? "exp" : ""}`}
          style={isAbout ? {} : { height: expanded ? "auto" : 0, marginBottom: expanded ? 60 : 0 }}
        >
          {colData[key][lang]}
        </div>
      </div>
    )
  }

  const keys = ["experience", "techniques", "tools"]
  const sidebar = <div className="sidebar">{keys.map(key => genCol(key))}</div>

  let fromHome = location.state
  const goBack = fromHome ? (
    <a className="back" onClick={() => window.history.go(-1)}>
      {"<-"}
    </a>
  ) : (
    <Link to="/" className="back">
      {"<-"}
    </Link>
  )

  return (
    <>
      <SEO title="mafmadmaf" lang={lang} />
      <div className="articleTop">
        {goBack}
        <LangSwitch atTop />
      </div>
      {sidebar}
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(intros)/" } }) {
      edges {
        node {
          id
          html
          frontmatter {
            slug
            type
          }
        }
      }
    }
  }
`

export default MorePage
