
![image](https://i.ibb.co/tbdhd9J/n-c.png)

This starter allows you to easily connect your nuxt application with the Contentful headless CMS. It also provides some basic configurations.

- [Getting started](#getting-started)
  - [Configure](#configure)
  - [Deploying with Now](#deploying-with-now)
- [Contentful client usage (example)](#contentful-client-usage-example)

## Configured Tools
- Nuxt
- PostCSS with some plugins
- Prettier
- Eslint
- Stylelint

# Getting started

You can use `degit` to download the scaffolding directly from Github:

```sh
npx degit equinusocio/nuxt-contentful-starter my-new-project
```

## Configure

After cloning the repo, create an `.env` file at the project root, then add the required contentful keys:

```sh
CTF_SPACE_ID=""
CTF_CDA_ACCESS_TOKEN=""
```

The config file is git ignored by default, but **MAKE SURE TO NOT ADD IT ACCIDENTALLY TO THE REPOSITORY.**

## Deploying with Now

If you want to deploy your nuxt site on Zeit domains with Now, you have to care about few things to make it work:

- Add the required now script `"now-build": "nuxt generate"` to the **package.json**
- Don't set the `buildDir` option inside `nuxt.config.js`
- If you're importing local modules/files from outside the `static/` folder (like custom plugins, modules..) make sure to add them to your `now.json` serverFiles using the correct builder:

```json
{
  "version": 2,
  "builds": [{
    "src": "nuxt.config.js",
    "use": "@nuxtjs/now-builder",
    "config": {
      "serverFiles": ["myModules/**", "plugins/**", "package.json"]
    }
  }]
}
```

# Contentful client usage (example)

You can use the nuxt `asyncData` function to get data from Contentful:

```html
<script>
  import { createClient } from '~/plugins/contentful.js'
  const client = createClient()

  export default {
    async asyncData({ env }) {
      try {
        let getPosts = await client.getEntries({
          content_type: 'blogPost',
          order: '-sys.createdAt'
        });
        return {
          posts: getPosts.items
        };
      } catch (e) {
        console.error(e)
      }
    }
  }
</script>
```
