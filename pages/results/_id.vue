<template>
  <div>
      <h1>Result for {{ $route.params.id }}</h1>
      <div v-if="albumExists">
        <div v-for="(album, index) in albumData">
          <Card
            :title="album.collectionCensoredName"
            :image="album.artworkUrl100"
          />
        </div>
      </div>
      <div v-else>
        <h1>Could not find album</h1>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '~/components/Card.vue'

export default {
  asyncData({params}){
    return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then( (response) => {
      return {
        albumData: response.data.results
      }
    })
  },
  components: {
    Card
  },
  middleware: 'search',
  computed: {
    albumExists() {
      return this.albumData.length > 0;
    }
  }
}
</script>
