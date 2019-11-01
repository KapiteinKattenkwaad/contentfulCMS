/**
 * Require the Contentful javascript
 * client.
 */
const contentful = require('contentful')

/**
 * Export the createClient function with
 * the default config
 */
export const createClient = () => {
  return contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
  })
}
