<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button
      @click="testBtn"
      style="width: 80px;
      height: 40px">Press me</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  components: {},
  methods: {
    testBtn() {
      console.log("testBtn");
    },
  },
});
</script>
