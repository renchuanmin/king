<template>
  <div class="profile">
    <div v-if="data.profile" class="image">
      <img :src="$withBase(data.profile)" alt="" />
    </div>
    <div class="info">
      <div class="name"><span>name:</span> {{ data.name }}</div>
      <div class="bio">
        <span>Native:</span>
        <span>{{ data.bio }}</span>
      </div>
      <div class="contact">
        <div class="email" title="Contact me">
          <span>email:</span> {{ data.email }}
        </div>
      </div>
      <div class="socials">
        <div v-for="item in data.socials">
          <a :href="item.link" target="_blank">
            <img :src="item.icon" :alt="item.title" :title="item.title" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "frontmatter"],

  computed: {
    data() {
      return this.frontmatter;
    },
  },
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.profile {
  display: flex;
  flex-direction: row;
  align-items: stretch;

  .image {
    max-width: 150px;

    img {
      border-radius: 50%;
      padding: 2px 8px;
      border: 1px solid #f2f3f3;
    }
  }

  .info {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    padding-left: 3rem;

    .name {
      font-size: 1.85rem;
      font-weight: 600;
    }

    .bio {
      padding: 0.2rem 0;

      span {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }

    .socials {
      display: flex;
      flex-direction: row;

      img {
        width: 1.3rem;
        margin: 0 0.6rem 0 0;
        cursor: pointer;
      }

      b {
        margin-left: 1rem;
      }
    }

    .contact {
      .title {
        font-size: 1.2rem;
        font-weight: 400;
      }

      .email {
        span {
          font-size: 1.4rem;
          font-weight: 600;
        }

        font-family: Courier New, Courier, monospace;
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .profile {
    .image {
      max-width: 120px;
    }
  }
}
</style>