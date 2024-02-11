<template>
  <section id="kit">
    <div class="container">
      <div class="title">
        <h2>Вместе — дешевле!</h2>
        <p class="subtitle">
          Соберите свой полезный набор и коптите ещё удобнее и проще
        </p>
      </div>

      <div class="kit-wrapper">
        <div class="kit-wrapper__dops">
          <kit-dops :dops="getDops" @open-modal="openModal" />
        </div>
        <div class="kit-wrapper__imgs">
          <my-image
            :alt="'коптильня браво'"
            :sorce="'build/images/kit/' + getMainItem.img"
            :mobile="false"
            :lazyLoad="false"
          />
        </div>
        <div class="kit-wrapper__form">
          <kit-form />
        </div>
      </div>
    </div>

    <div id="kit-modal">
      <h3 v-html="modal.title"></h3>
      <p v-html="modal.text"></p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import KitDops from "./KitDops.vue";
import MyImage from "../UI/MyImage.vue";
import KitForm from "./KitForm.vue";

export default {
  components: { MyImage, KitDops, KitForm },
  computed: mapGetters(["getMainItem", "getDops"]),
  data() {
    return {
      modal: {
        title: "",
        text: "",
      },
    };
  },

  methods: {
    openModal(index) {
      this.modal.title = this.getDops[index].name;
      this.modal.text = this.getDops[index].kitModal.text;

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#kit-modal",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#kit {
  @extend %pbt;
  overflow: hidden;
  padding-top: 60px;

  @media (max-width: 992px) {
    padding-top: 30px;
  }

  @media (max-width: 768px) {
    padding-top: 20px;
  }

  .kit-wrapper {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(380px, 28%) auto minmax(270px, 380px);
    //370
    align-items: center;
    grid-template-rows: auto;
    width: 100%;

    @media (max-width: 1366px) {
      gap: 0 30px;
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    &__form {
      border-radius: 20px;
      background: #fff;
      box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.15);

      @media (max-width: 1366px) {
        grid-column: 2/3;
        grid-row: 2/3;
        max-width: 370px;
        margin-right: auto;
      }

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 3/4;
        margin: 0 auto;
      }
    }

    &__dops {
      display: flex;
      padding: 20px;
      gap: 15px;

      border-radius: 20px;
      background: #fff;
      box-shadow: 5px 5px 30px 0px rgba(0, 0, 0, 0.15);

      @media (max-width: 1366px) {
        grid-column: 1/2;
        grid-row: 2/3;

        max-width: 400px;
        margin-left: auto;
      }

      @media (max-width: 768px) {
        grid-column: 1/2;
        padding: 15px;

        grid-row: 1/2;
        margin: 0 auto;
      }
    }

    &__imgs {
      max-width: 496px;

      picture {
        justify-content: center;
      }

      width: 100%;
      margin: 0 auto;
      min-width: 400px;

      @media (max-width: 1366px) {
        grid-column: 1/3;
        grid-row: 1/2;

        .img-wrap {
          max-width: 380px;
          margin: 0 auto;
        }
      }

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 2/3;
        min-width: auto;

        .img-wrap {
          max-width: 280px;
        }
      }

      @media (max-width: 475px) {
        .img-wrap {
          max-width: 240px;
        }
      }
    }
  }
}

#kit-modal {
  @extend %modal;
  @extend %modal-text;
}
</style>
