module.exports = {
    // where it all starts -- the site's root Notion page (required)
    rootNotionPageId: '5758c0dca5fc486f84fc9480ca1c3db2',
    // if you want to restrict pages to a single notion workspace (optional)
    // (this should be a Notion ID; see the docs for how to extract this)
    // rootNotionSpaceId: '684fb1cf-ad2b-40c7-8e31-c099fa61e45f',
    rootNotionSpaceId: null,

    // basic site info (required)
    name: 'Orion Black Blog',
    domain: 'blog.linkedinsalesnavigatorscraper.com',
    author: 'Orion Black',

    // open graph metadata (optional)
    description: 'Orion Black Blog',
    socialImageTitle: 'Orion Black Blog',
    socialImageSubtitle: 'Hello World! 👋',

    // social usernames (optional)
    // twitter: '',
    // github: '',
    // linkedin: 'fisch2',

    // default notion icon and cover images for site-wide consistency (optional)
    // page-specific values will override these site-wide defaults
    defaultPageIcon: null, // URL
    defaultPageCover: null, // URL
    defaultPageCoverPosition: 0.5,

    // image CDN host to proxy all image requests through (optional)
    // NOTE: this requires you to set up an external image proxy
    imageCDNHost: 'https://ssfy.io',

    // Utteranc.es comments via GitHub issue comments (optional)
    utterancesGitHubRepo: null,

    // whether or not to enable support for LQIP preview images (optional)
    // NOTE: this requires you to set up Google Firebase and add the environment
    // variables specified in .env.example
    isPreviewImageSupportEnabled: true,

    // map of notion page IDs to URL paths (optional)
    // any pages defined here will override their default URL paths
    // example:
    //
    // pageUrlOverrides: {
    //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
    //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
    // }
    pageUrlOverrides: null
}
