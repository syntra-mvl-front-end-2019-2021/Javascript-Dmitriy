<template>
  <section>
    <div class="content">
      <header>
        <a href="#" class="icon" :class="icon"><span class="label"></span></a>
        <h3>{{ title }}</h3>
      </header>
      <p>
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Highlights",
  props: ["icon", "title", "text"],
};
</script>






<style></style>