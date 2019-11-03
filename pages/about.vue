<template>
  <section class="container">
    <div>
           <div class="title" > {{ about.fields.uitlegBoven }}  </div>
           <div> {{ about.fields.meerUitleg }}  </div>
            <img :src="about.fields.fotoStijn.fields.file.url" :alt="about.fields.titel" v-if="about.fields.fotoStijn" /> 
      </div>
  </section>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js'
  const client = createClient()

  export default {
      data: function() {
    return {
      image: "about.fields.file.url"
    };
  },

      async asyncData({ env }) {
      try {
        let getAbout = await client.getEntries({
          content_type: 'about',
          order: '-sys.createdAt'
        });
        return {
          about: getAbout.items[0]
        };
      } catch (e) {
        console.error(e)
      }
    },
  }
</script>

<style scoped lang="postcss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
