<template>
  <div class="job-item">
    <router-link
      class="job-item__link"
      :to="{ name: 'job-detail', params: { id: job.jobId } }"
    >
      <img class="job-item__image" :src="job.imageUrl" :alt="job.companyName" />
      <div class="job-item__detail">
        <p class="job-item__position">{{ job.positionName }}</p>
        <p class="job-item__company">{{ job.companyName }}</p>
        <p class="job-item__city">{{ job.cityName }}</p>
      </div>
    </router-link>
    <div class="job-item__bottom">
      <p :class="job.durationDay < 4 ? 'text-green-500' : 'text-red-500'">
        {{ job.durationDayText }}
      </p>
      <p>
        {{ job.durationDay === 0 ? "Bugün" : `${job.durationDay} gün önce` }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobItem",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.job-item {
  max-width: var(--container);
  margin: var(--space-md) auto;
  padding: var(--space-lg);
  background: var(--color-white);

  &__link {
    display: flex;
    gap: var(--space-lg);
    align-items: center;
  }

  &__image {
    width: calc(var(--space-xl) * 2);
    height: calc(var(--space-xl) * 2);
    border: 1px solid var(--border-color);
    padding: var(--space-xs);
  }

  &__detail {
    display: block;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    font-size: var(--font-size-sm);
    margin-top: var(--space-md);
  }

  &__position {
    font-weight: var(--font-weight-bold);
  }

  &__company {
    font-weight: var(--font-weight-medium);
  }

  &__city {
    font-weight: var(--font-weight-normal);
  }
}
</style>
