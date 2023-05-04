import React, { useState, useEffect } from "react"
import qs from "query-string"
// import { useStaticQuery, graphql } from "gatsby"

import Context from "../../helpers/context"
import Footer from "../Footer"
import Cursor from "../Cursor"
import "../../styles/global.scss"
// import S from "./style.module.scss"

import { getLang, calSizes, resizeThrottler } from "../../helpers/utils"

const Layout = ({ children }) => {
  // console.log('heheh');
  const [sizes, setSizes] = useState({ isMobile: false })
  const [lang, setLang] = useState("zh")
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSizes(calSizes(window.innerWidth, window.innerHeight))
      window.addEventListener("resize", () => resizeThrottler((winW, winH) => setSizes(calSizes(winW, winH))), {
        capture: true,
        passive: true,
      })
      let lang = getLang()
      const langParam = qs.parse(window.location.search).lang
      setLang(langParam || lang)
    }
    return () => {
      window.removeEventListener("resize", resizeThrottler)
    }
  }, [])

  const switchLang = () => {
    setLang(lang === "en" ? "zh" : "en")
  }

  const updateMousePos = e => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <Context.Provider
      value={{
        states: {
          sizes,
          lang,
          mousePos,
        },
        methods: {
          switchLang,
        },
      }}
    >
      <div className="wrap" onMouseMove={updateMousePos}>
        <main>
          {children}
          <Footer />
          <Cursor />
        </main>
      </div>
    </Context.Provider>
  )
}

export default Layout
