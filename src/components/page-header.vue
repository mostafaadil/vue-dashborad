<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-flex align-items-center justify-content-between"
      >
        <h4 class="mb-0 font-size-18">{{ title }}</h4>
      </div>
    </div>
  </div>
  <!-- end page title -->
</template>
