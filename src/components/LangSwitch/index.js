import React, { useContext } from "react"

import Context from "../../helpers/context"
import S from "./style.module.scss"

export default function LangSwitch({ atTop, isHome }) {
  const { states, methods } = useContext(Context)
  const { switchLang } = methods
  const { lang } = states
  return (
    <div className={`${S.langSwitch} ${atTop ? S.atTop : ""} ${isHome ? S.home : ""}`}>
      <a onClick={switchLang}>{lang === "zh" ? "EN" : "漢"}</a>
    </div>
  )
}
