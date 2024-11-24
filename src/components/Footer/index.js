import React from "react";

import * as S from "./style.module.scss";

export default function Footer() {
  return (
    <div className={S.footer}>
      <div className={S.col}>
        <a href="mailto:fredmamono@gmail.com">jyugamlabel@gmail.com</a>
      </div>
      <div className={S.col}>© 2020-2023 Jyugam. Made in Canton.</div>
    </div>
  );
}
