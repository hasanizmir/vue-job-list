<template>
  <div class="job-items">
    <h2 v-if="title" class="job-items__header">{{ title }}</h2>
    <div v-if="!jobs.length" class="job-items__loader">
      <img src="../assets/loader.svg" />
      <p>Loading...</p>
    </div>
    <JobItem v-for="job in jobs" :key="job.jobId" :job="job" />
  </div>
</template>
<script>
import JobItem from "@/components/JobItem.vue";

export default {
  name: "JobItems",
  components: {
    JobItem,
  },
  props: {
    title: {
      type: String,
    },
    jobs: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.job-items {
  background: var(--background-color-grey);
  padding: var(--space-xl) 0 var(--space-2xl);

  &__header {
    max-width: var(--container);
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-semibold);
    margin: var(--space-sm) auto;
    padding: var(--space-md);
  }

  &__loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
