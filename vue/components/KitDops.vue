<template>
  <div class="dops-container">
    <ul class="kit__list">
      <li v-for="(item, index) in dops" :key="index" class="kit__item">
        <label class="kit__item-checkbox checkbox default">
          <input type="checkbox" v-model="item.selected" />
          <div class="box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="#323232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </label>

        <div class="kit__item-img">
          <my-image
            class="kit-icon"
            :alt="'#'"
            :sorce="'build/images/kit/' + item.icon"
            :mobile="false"
          />
        </div>

        <p
          class="kit__item-name"
          @click="$emit('open-modal', index)"
          v-html="item.name"
        ></p>

        <div class="kit__item-price">
          <span class="new" v-html="item.price + ' руб.'"></span>
          <span class="old" v-html="item.oldPrice + ' руб.'"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  props: {
    dops: Array,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.dops-container {
  .kit__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    width: 100%;

    .kit__item {
      align-items: center;
      display: grid;
      gap: 15px;
      grid-template-columns: auto auto 1fr;

      @media (max-width: 1366px) {
        gap: 5px 15px;
      }

      &-checkbox {
        grid-column: 1/2;
        grid-row: 1/3;
      }

      &-name {
        grid-column: 3/4;
        grid-row: 1/2;
      }

      &-img {
        grid-column: 2/3;
        grid-row: 1/3;

        .kit-icon {
          width: 90px;

          @media (max-width: 1366px) {
            width: 75px;
          }

          @media (max-width: 768px) {
            width: 55px;
          }

          @include aspect {
            aspect-ratio: 1/1;
          }
        }
      }

      &-price {
        grid-column: 3/4;
        grid-row: 2/3;
        display: flex;
        align-items: center;

        align-self: flex-start;
        gap: 15px;

        @media (max-width: 576px) {
          gap: 5px;
        }

        span {
          display: block;
          font-family: "Inter";
          font-style: normal;
          white-space: nowrap;

          &.old {
            font-size: 16px;
            font-weight: 400;
            line-height: 23px;

            color: #9f9f9f;
            text-decoration-line: line-through;

            @media (max-width: 768px) {
              font-size: 14px;
              line-height: 21px;
            }
          }

          &.new {
            color: #323232;
            font-size: 22px;
            font-weight: 600;
            line-height: 29px; /* 131.818% */

            @media (max-width: 768px) {
              font-size: 18px;
              line-height: 25px;
            }
          }
        }
      }

      &-name {
        cursor: pointer;

        align-self: flex-end;
        color: #323232;
        font-family: "Lato";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 27px; /* 135% */
        text-decoration-line: underline;

        @include fluidFontSize(16, 20, 992, 1920);

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 23px;
        }
      }
    }
  }
}
</style>
