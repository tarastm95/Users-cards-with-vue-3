<template>
  <div>
    <div class="field">
      <label class="label">Title:</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Textarea"
          v-model="title"
        ></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">Body:</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea" v-model="body">
        </textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="addNewCard">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      body: '',
    };
  },
  methods: {
    addNewCard() {
      this.$emit('NewCardData', {
        title: this.title,
        body: this.body,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
