<template>
  <div class="contacts__item">
    <img v-if="contact.icon" :src="contact.icon" :alt="contact.contact" class="contacts__item-img" />
    <a v-if="contact.id === 1" :href="'mailto:' + contact.contact" class="contacts__item-link">
      <span>Email:</span>
      {{ contact.contact }}
    </a>
    <a v-else-if="contact.id === 4" :href="'tel:' + contact.contact" class="contacts__item-link"
      ><span>Phone: </span>{{ contact.contact }}</a
    >
    <span v-else>{{ contact.contact }}</span>
  </div>
</template>

<script lang="js">
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.contacts__item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.contacts__item-link {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
}

.contacts__item-img {
  max-width: 20px;
}

@media (max-width: 768px) {
  .contacts__item-link {
    max-width: 240px;
  }
}
</style>
