<template>
  <div class="job-detail">
    <div v-if="job && job.positionName" class="job-detail__container">
      <div class="job-detail__top">
        <div class="job-detail__info">
          <h3>{{ job.positionName }}</h3>
          <p>{{ job.companyName }}</p>
          <span>{{ `${job.cityName} ( ${job.townName} )` }}</span>
        </div>
        <div class="job-detail__action">
          <button @click="submitButton('Başvurunuz gönderildi')">Başvur</button>
          <button @click="submitButton('İlan başarıyla kaydedildi')">
            Kaydet
          </button>
        </div>
      </div>
      <div class="job-detail__duration">
        <p :class="job.durationDay < 4 ? 'text-green-500' : 'text-red-500'">
          {{ job.durationDayText }}
        </p>
        <p>
          Yayınlanma :
          {{ job.durationDay === 0 ? "Bugün" : `${job.durationDay} gün önce` }}
        </p>
      </div>
      <img
        class="job-detail__image"
        :src="job.imageUrl"
        :alt="job.companyName"
      />
      <div class="job-detail__description">
        <h3 class="job-detail__heading">İlan Detayları</h3>
        <p>{{ job.description }}</p>
      </div>
      <div class="job-detail__company">
        <h3 class="job-detail__heading">Şirket Detayları</h3>
        <p>
          {{ job.companyName }}
        </p>
        <p>
          {{
            `(${job.contactPhone?.countryCallingCode}) ${
              job.contactPhone?.areaCode + job.contactPhone?.number
            }`
          }}
        </p>
        <p>{{ `${job.cityName} - ${job.townName}` }}</p>
        <p>{{ job.address }}</p>
      </div>
    </div>
    <div v-else class="job-detail__loader">
      <img src="../assets/loader.svg" />
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toast } from "vue3-toastify";

export default {
  name: "JobDetail",
  computed: {
    ...mapGetters({
      job: "jobDetail/getJob",
    }),
  },
  created() {
    this.fetchJob();
  },
  unmounted() {
    this.$store.dispatch("jobDetail/resetJob");
  },
  methods: {
    fetchJob() {
      this.$store.dispatch("jobDetail/fetchJob", this.$route.params.id);
    },
    submitButton(message) {
      toast.success(message);
    },
  },
};
</script>
<style lang="scss" scoped>
.job-detail {
  background: var(--background-color-grey);
  min-height: 100vh;
  padding: var(--space-md) 0;

  &__container {
    max-width: var(--container);
    margin: 0 auto;
    padding: var(--space-md);
    background: var(--color-white);
  }

  &__top {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }

  &__info {
    h3 {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--space-sm);
    }

    p {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--space-md);
    }
  }

  &__action {
    button {
      padding: var(--space-sm) var(--space-lg);
      border: 2px solid var(--color-primary);
      margin: var(--space-lg) var(--space-md) 0 0;
      color: var(--color-primary);
      font-weight: var(--font-weight-bold);
      transition: all 300ms ease-in-out;

      @media (min-width: 992px) {
        margin: 0 0 0 var(--space-md);
      }

      &:nth-child(1) {
        background: var(--color-primary);
        color: var(--color-white);

        &:hover {
          border: 2px solid var(--color-primary);
          color: var(--color-primary);
          background: transparent;
        }
      }
    }
  }

  &__duration {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-sm);
    margin-top: var(--space-md);

    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__image {
    margin: var(--space-lg) auto;
  }

  &__heading {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    margin: var(--space-md) 0;
  }

  &__company {
    p {
      margin-bottom: var(--space-md);
    }
  }

  &__loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
