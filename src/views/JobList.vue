<template>
  <div class="job-list">
    <SearchArea />
    <JobItems v-if="filteredListings.length > 0" :jobs="paginatedListings" />

    <p v-else class="job-list__empty">Sonuç bulunamadı!</p>

    <Pagination
      v-if="totalPages > 1"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @paginationClick="paginationClick"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import JobItems from "@/components/JobItems.vue";
import Pagination from "@/components/Pagination.vue";
import SearchArea from "@/components/SearchArea.vue";

export default {
  name: "JobList",
  components: {
    JobItems,
    Pagination,
    SearchArea,
  },
  data() {
    return {
      limit: 10,
    };
  },
  computed: {
    ...mapGetters({
      jobs: "jobs/getJobs",
    }),
    filteredListings() {
      const { keyword, location } = this.$route.query;
      if (!keyword && !location) return this.jobs;
      const jobs = this.jobs.filter((job) => {
        const keywordMatch =
          !keyword ||
          job.positionName
            .toLocaleLowerCase()
            .includes(keyword.toLocaleLowerCase("tr")) ||
          job.companyName
            .toLocaleLowerCase()
            .includes(keyword.toLocaleLowerCase("tr"));
        const locationMatch =
          !location ||
          job.cityName
            .toLocaleLowerCase()
            .includes(location.toLocaleLowerCase("tr")) ||
          job.townName
            .toLocaleLowerCase()
            .includes(location.toLocaleLowerCase("tr"));
        return keywordMatch && locationMatch;
      });
      return jobs;
    },
    paginatedListings() {
      const startIndex = (this.currentPage - 1) * this.limit;
      const endIndex = startIndex + this.limit;
      return this.filteredListings.slice(startIndex, endIndex);
    },

    totalPages() {
      return Math.ceil(this.filteredListings.length / this.limit);
    },

    currentPage() {
      const page = Number(this.$route.query.page) || 1;
      return page > this.totalPages ? this.totalPages : page;
    },
  },
  created() {
    this.fetchJobs();
  },
  methods: {
    fetchJobs() {
      this.$store.dispatch("jobs/fetchJobs");
    },
    paginationClick(data) {
      this.$router.push({ query: { ...this.$route.query, page: data } });
    },
  },
};
</script>
<style lang="scss" scoped>
.job-list {
  &__empty {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    margin-top: var(--space-md);
    text-align: center;
  }

  ::v-deep .search {
    padding-bottom: var(--space-md);

    &__input {
      padding: var(--space-xs);
    }
  }
}
</style>
