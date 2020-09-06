import React from "react";
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { NotFoundPage } from "./not-found-page";


export const NotFoundExample = () => {
  
  return (
    <ThemeContext>
        <NotFoundPage />
    </ThemeContext>
  );
};
