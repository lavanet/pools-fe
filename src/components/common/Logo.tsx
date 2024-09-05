'use client'

import clsx from 'clsx';
import Link from 'next/link';
import styles from "@/styles/Logo.module.scss"
import MainLogo from "@assets/images/logo.svg";

export const Logo = () => {
  return (
    <Link
      href="/"
      title="Home"
      className={clsx(styles.cLogo, "c-logo")}
    >
      <MainLogo/>
    </Link>
  );
};
