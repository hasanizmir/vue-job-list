<template>
  <div class="home">
    <h1 class="home__header">Kariyer Fırsatlarını Keşfet</h1>
    <SearchArea />
    <JobItems :title="'Son ilanlar'" :jobs="jobs.slice(0, 10)" />
  </div>
</template>

<script>
import JobItems from "@/components/JobItems.vue";
import SearchArea from "@/components/SearchArea.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    JobItems,
    SearchArea,
  },
  computed: {
    ...mapGetters({
      jobs: "jobs/getJobs",
    }),
  },
  created() {
    this.fetchJobs();
  },
  methods: {
    fetchJobs() {
      this.$store.dispatch("jobs/fetchJobs");
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  &__header {
    max-width: var(--container);
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-semibold);
    margin: var(--space-md) auto;
    padding: var(--space-md);
  }
}
</style>
