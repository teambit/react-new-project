import React from 'react';
import { ThemeContext } from "@teambit/documenter.theme.theme-context";
import { LinkedHeading } from './linked-heading';

export const labels = ['react', 'ui-component', 'heading', 'link'];

export const examples = [
    {
    scope: {
      LinkedHeading,
      ThemeContext
    },
    title: "Using the Linked Heading component",
    description: `Links are used as navigational elements. They can be used on their own or inline, as part of a paragraph. 
    They provide a lightweight option for navigation that should be used sparingly so as to not clutter a page and make it difficult for users to identify their next steps.`,
    code: `
<ThemeContext>
    <LinkedHeading link="link-here-1" >
        A default linked title
    </LinkedHeading>

    <LinkedHeading link="link-here-2" size="xs">
      An extra small linked title
    </LinkedHeading>

</ThemeContext>
`}
]