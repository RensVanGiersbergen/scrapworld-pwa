<template>
  <div class="home">
    <World/>
  </div>
</template>

<script>
// @ is an alias to /src
import World from '@/components/World.vue'

export default {
  name: 'HomeView',
  components: {
    World
  }
}
</script>
