import React from "react";
import classNames from "classnames";
import { mutedText } from "@teambit.base-ui.text.muted-text";
// import { Paragraph, ParagraphProps } from "@teambit.base-ui.text.paragraph";
import { Paragraph } from "@teambit.base-ui.text.paragraph";
import { PossibleSizes } from "@teambit.base-ui.theme.sizes";
import styles from "./sub-title.module.scss";

export type SubtitleProps = {} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * subtitle component
 */
export function Subtitle({ children, className, ...rest }: SubtitleProps) {
  return (
    <Paragraph
      element="p"
      className={classNames(mutedText, styles.subTitle, className)}
      size={PossibleSizes.xl}
      {...rest}
    >
      {children}
    </Paragraph>
  );
}

// Subtitle.defaultProps = {
//   element: "p",
// };
