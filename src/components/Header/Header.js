"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { MutableContext } from "../MutableProvider";
import styles from "./Header.module.css";

function Header() {
  const id = React.useId();

  const { isMuted, toggleMute } = React.useContext(MutableContext);

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button onClick={() => toggleMute()}>
          {!isMuted ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {!isMuted ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
