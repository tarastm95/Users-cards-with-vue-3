<template>
  <div>
    <show-data>
      <notification-message v-if="awesome">
        <h5 class="title is-5 has-text-centered	">
          Enter data:
        </h5>

        <add-card @NewCardData="NewCardData"></add-card>
      </notification-message>
      <div class="columns">
        <div class="column columns is-centered pb-5">
          <button
            v-if="AddNewCardTitle"
            @click="AddNewCard"
            class="button is-danger"
          >
            Add a new card
          </button>
        </div>
      </div>

      <div
        v-for="user in newsLimited()"
        :key="user.id"
        :title="user.title"
        :body="user.body"
        :id="user.id"
        :ref="'userId' + user.id"
      >
        <div class="mt-5">
          <article class="message is-link ">
            <div class="message-header">
              <p>Link</p>

              <button
                class="delete"
                aria-label="delete"
                @click="deleteCard(user)"
              ></button>
            </div>

            <div class="message-body">
              <h3 class="subtitle is-3">ID: {{ user.id }}</h3>

              <h4 class="subtitle is-4">Title: {{ user.title }}</h4>
              <span class="content is-normal">
                Body:
                {{ user.body }}
              </span>
            </div>

            <article v-show="showEdit" class="message is-danger">
              <h4 class="title is-4 has-text-centered	pt-5">
                Редагування записа {{ user.id }}
              </h4>

              <div class="message-body">
                <h5 class="title is-5 has-text-centered	">Title:</h5>

                <textarea
                  v-model="user.title"
                  class="textarea"
                  type="text"
                  placeholder="Отредактируй меня"
                ></textarea>
              </div>
              <div class="message-body">
                <h5 class="title is-5 has-text-centered	">Body:</h5>

                <textarea
                  v-model="user.body"
                  class="textarea"
                  type="text"
                  placeholder="Отредактируй меня"
                ></textarea>
              </div>
            </article>

            <div class="columns">
              <div class="column">
                <base-button v-if="readMoreBtn" class="fbcenter ">
                  <router-link :to="/about/ + user.id">
                    Read more...
                  </router-link>
                </base-button>
              </div>
              <div class="column">
                <base-button v-if="editBtn" @click="showEditPage">
                  Edit 
                </base-button>
              </div>
            </div>

            <div v-if="saveBtn" class="columns">
              <div class="column columns is-centered pb-5">
                <button @click="saveThisEntry" class="button is-danger">
                  Save
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </show-data>
    <div class="columns  fbcenter">
      <base-button @click="showMore" class="mt-2">
        Load more
      </base-button>
    </div>
  </div>
</template>

<script>
import ShowData from './ShowData.vue';
import BaseButton from './BaseButton.vue';
import AddCard from './AddCard.vue';
import NotificationMessage from './NotificationMessage';
import UserItem from './UserItem.vue';

export default {
  components: {
    ShowData,
    BaseButton,
    AddCard,
    NotificationMessage,
    UserItem,
  },
  emits: ['NewCardData'],

  data: function() {
    return {
      users: this.$store.state.users,

      showUsers: 5,
      awesome: false,
      message: '',
      showEdit: false,
      readMoreBtn: true,
      editBtn: true,
      saveBtn: false,
      AddNewCardTitle: true,
    };
  },
  methods: {
    showMore() {
      this.showUsers = this.showUsers + 5;
    },
    newsLimited() {
      return this.users.slice(0, this.showUsers);
    },

    deleteCard(el) {
      this.showUsers = this.showUsers + 1;

      var y = this.users.filter(function(shownCard) {
        return shownCard.id != el.id;
      });

      this.users = y;
    },
    NewCardData(data) {
      var bodyCard = data.body;
      var titleCard = data.title;
      var lengthCards = this.users.length + 1;

      var NewCard = {
        userId: lengthCards.toString(),
        id: lengthCards.toString(),
        title: titleCard,
        body: bodyCard,
      };

      this.users.unshift(NewCard);
    },
    showEditPage() {
      this.showEdit = true;
      this.readMoreBtn = false;
      this.editBtn = false;
      this.saveBtn = true;
    },
    saveThisEntry() {
      this.showEdit = false;
      this.readMoreBtn = true;
      this.editBtn = true;
      this.saveBtn = false;
    },
    AddNewCard() {
      this.awesome = true;
      this.AddNewCardTitle = false;
    },
  },
};
</script>

<style>
.fbcenter {
  display: flex;
  justify-content: center;
}
</style>
