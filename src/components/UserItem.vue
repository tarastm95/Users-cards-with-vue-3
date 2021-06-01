<template>
  <div class="box">
    <div class="buttons">
      <button @click="back" class="button is-primary">Назад</button>
    </div>
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>ID: {{ id }}</p>
          <p>Title: {{ title }}</p>
          <p>Body: {{ body }}</p>
        </div>

        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  inject: ['users'],
  data() {
    return {
      body: '',
      title: '',
      id: '',
    };
  },
  created() {
    const userId = this.$route.params.userId;
    const selectedUser = this.users.find((user) => user.id == userId);
    this.body = selectedUser.body;
    this.title = selectedUser.title;
    this.id = selectedUser.id;
  },

  computed: {
    back() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
