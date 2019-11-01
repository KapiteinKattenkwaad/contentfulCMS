<template>
  <section class="container">
    <div>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2> {{ post.fields.title }} </h2>
      <h3> {{ post.fields.slug }} </h3>
      <h3> {{ post.fields.content }} </h3>
    </div>
      </div>
  </section>
</template>

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
