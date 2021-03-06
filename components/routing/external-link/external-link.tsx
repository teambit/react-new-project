import React from "react";
import classNames from "classnames";
import styles from "./external-link.module.scss";

export type ExternalLinkProps = {} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ExternalLink({
  href,
  children,
  className,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      {...rest}
      target="_blank"
      href={href}
      className={classNames(styles.link, className)}
    >
      {children}
    </a>
  );
}
