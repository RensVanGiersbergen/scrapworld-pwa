<template>
    <div class="test">
      <Friends/> 
    </div>
</template>


<script>
  // @ is an alias to /src
  import Friends from '@/components/Friends.vue'
  
  export default {
    name: 'FriendsView',
    components: {
      Friends
    }
  }
  </script>