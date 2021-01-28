<template>
  <div>
    <section>
      <div class="content">
        <blockquote>
          <p>
            {{ text }}
          </p>
        </blockquote>
        <div class="author">
          <div class="image">
            <img :src="imageSrc" alt="" />
          </div>
          <p class="credit">
            - <strong>{{ name }}</strong> <span>{{ corp }}</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  props: ["src", "text", "name", "corp"],
  computed: {
    imageSrc() {
      return require("@/assets/images/" + this.src);
    },
  },
};
</script>

<style></style>
