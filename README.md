# space-exploration

A single page app that acts like a multi-page app.

Inspired by episode 143 of [Full Stack Radio](https://fullstackradio.com/143) where Adam Wathan talks with Rich Harris about Svelte and defending the modern web. Towards the end of their discussion they touched upon the subject of page transitions and how they are handled in modern web development.

Rich Harris speaks about objects in space and the smoother experience of navigating a native app when compared to a website where pages are loaded and literally reloaded before the content is shown.

This got me thinking about the traditional SPA (Single Page Application). If we had a single page which used GSAPs [Scroll Trigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger) to pin our "pages" so that they animate in from different sides/angles/ways.

I then considered the page from the top down, as in looking down on a blueprint, where the pages are objects or sections in a space. The space is our app. Each page has its place on the blueprint with the viewport showing only one page at a time.

There should be a logical flow between each page much like in graphql with the flow being the edges and the nodes being the pages.

Navigation, that is, internal navigation between the pages simply pushes the user along a certain edge towards a node.

This is just an experiment to play around with different techniques for controlling the blueprint. The plan is to use yarn workspaces with different projects using different stacks and techniques.

### with-mdx

Looks like [mdx-blocks](https://mdx-blocks.netlify.app/) could be quite handy here
