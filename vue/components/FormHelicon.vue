<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters([
    "getUserRassrochka",
    "getMetric",
    "getMainId",
    "getDops",
  ]),
  props: {
    dops: {
      type: Boolean,
      default: true,
    },
    rassr: {
      type: Boolean,
      default: false,
    },
    main: {
      type: Boolean,
      default: false,
    },
  },
};
</script>