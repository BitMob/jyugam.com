import React, { useContext } from "react"

import S from "./style.module.scss"
import Context from "../../helpers/context"

export default function Cursor() {
  const { mousePos } = useContext(Context).states

  return <div className={S.cursor} style={{ transform: `translate3d(${mousePos.x}px,${mousePos.y}px,0)` }}></div>
}
