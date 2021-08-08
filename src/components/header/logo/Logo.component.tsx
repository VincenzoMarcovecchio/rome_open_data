import React from "react";
import Link from "next/link";
import styles from "./Logo.module.scss";
import Image from "components/image";
const { logo } = styles;

export default function Logo(): JSX.Element {
  return (
    <div className={logo}>
      <Link href="/">
        <Image
          src="/assets/roma-logo.png"
          alt="roma-logo"
          height="inherit"
          width="60px"
        />
      </Link>
    </div>
  );
}
