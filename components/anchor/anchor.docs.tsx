import { Anchor } from './anchor';
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions";
import { H5 } from "@teambit/documenter.ui.heading"

export const labels = ['react', 'ui-component', 'link']

export const examples = [
    {
    scope: {
        Anchor,
        H5, 
        ThemeCompositions
    },
    title: "Using the Anchor component",
    description: `The Anchor component can only link to itself. 
Place it to either side of the title you wish to point to, so as to have it scroll to the same vertical point on the page.`,
    code: `
<ThemeCompositions>
    <div style={{display: 'inline-flex', alignItems: 'center'}}>
        <H5 style={{marginRight: '10px'}}>A title with a link</H5>
        <Anchor href="this-example" />
    </div>
</ThemeCompositions>
`}
]