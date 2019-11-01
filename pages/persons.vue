<template>
  <section class="container">
    <div>
           <div> {{ persons.fields.name }}  </div>
      </div>
  </section>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js'
  const client = createClient()

  export default {
      async asyncData({ env }) {
      try {
        let getPersons = await client.getEntries({
          content_type: 'person',
          order: '-sys.createdAt'
        });
        return {
          persons: getPersons.items[0]
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
