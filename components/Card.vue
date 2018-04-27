<template>
  <div
  id="e3"
  style="max-width: 400px; margin: auto;"
  class="grey lighten-3">
    <v-container
    fluid
    style="min-height: 0;"
    grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-container fluid grid-list-lg>
                        <v-layout row>
                            <v-flex xs5>
                                <v-card-media
                                    :src="image"
                                    height="100px">
                                </v-card-media>
                            </v-flex>

                            <v-flex xs7>
                                <div>
                                    <v-card-title primary-title>
                                        <div>
                                            <h3 class="headline mb-0">{{ title }}</h3>
                                        </div>
                                    </v-card-title>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  props: [
      'title',
      'image',
      'artistName',
      'url'
  ]
}
</script>
