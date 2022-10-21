<template>
  <div class="scrapbooks">
    <Scrapbooks />
  </div>
</template>

<script>
// @ is an alias to /src
import Scrapbooks from "@/components/Scrapbook-Overview.vue";

export default {
  name: "scrapbooksView",
  components: {
    Scrapbooks,
  },
};
</script>

<style scoped>
.scrapbooks{
  background-color: #280659;
}
</style>
