<template>
  <section class="container">
    <div>
           <div> {{ services.fields.titel }}  </div>
           <div> {{ services.fields.uitleg }}  </div>
            <img :src="services.fields.image.fields.file.url" :alt="services.fields.titel" v-if="services.fields.image" />
      </div>
  </section>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js'
  const client = createClient()

  export default {
      data: function() {
    return {
      title: "Vuejs",
      image: "services.fields.file.url"
    };
  },

      async asyncData({ env }) {
      try {
        let getServices = await client.getEntries({
          content_type: 'services',
          order: '-sys.createdAt'
        });
        return {
          services: getServices.items[0]
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
