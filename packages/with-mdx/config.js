import React from 'react';

export default {
    // These components will map to the MDX file. You can set your own custom styles on them via any theming or pull in something like Chakra-UI or Theme-ui and map their components. 
    components: {
        h1: props => <h1 style={{color: 'tomato'}} {...props} />,
        p: props => <p style={{fontSize: '18px', color: 'blue'}} {...props} />,
    },
    // You can name the pages keys anything. It will correspond to the page. However one should be named home to annotate the first page
    home: {
        title: 'With-MDX',
        subtitle: 'This is the home page',
        // seo keywords
        keywords: ['one', 'two', 'three']
    },
    // The following pages include the scroll transition animations
    projects: {
        title: 'Projects',
        subtitle: 'This is the projects page',
        // the start of the animation -"top center" means when the top of the trigger hits the center of the viewport
        start: 'top 75%',
        // the end of the animation
        end: 'bottom 25%',
        // onEnter onLeave onEnterBack 
        // toggleActions options (not in order): play, pause, resume, reset, restart, complete, reverse, none
        toggleActions: 'restart pause reverse reset',
        keywords: ['one', 'two', 'three']
    },
    about: {
        title: 'About',
        subtitle: 'This is the about page',
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'restart pause reverse reset',
        keywords: ['one', 'two', 'three']
    }
}