<template>
  <div class="search">
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Pozisyon veya şirket adı"
      required
      class="search__input"
    />
    <input
      type="text"
      v-model="location"
      placeholder="Şehir veya ilçe"
      required
      class="search__input"
    />
    <button class="search__button" @click="search">Search</button>
  </div>
</template>
<script>
export default {
  name: "SearchArea",
  data() {
    return {
      searchTerm: "",
      location: "",
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: "job-list",
        query: { keyword: this.searchTerm, location: this.location },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  max-width: var(--container);
  display: flex;
  flex-direction: column;
  margin: var(--space-md) auto;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-md) var(--space-3xl);

  @media (min-width: 992px) {
    flex-direction: row;
  }

  &__input {
    width: 100%;
    border: 2px solid var(--border-color);
    border-radius: var(--space-sm);
    padding: var(--space-md);

    @media (min-width: 992px) {
      width: 300px;
    }

    &:focus {
      border: 2px solid var(--color-primary);
      outline: 0;
    }
  }

  &__button {
    background: var(--color-primary);
    padding: var(--space-xs) var(--space-lg);
    border-radius: var(--space-sm);
    color: var(--color-white);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-md);
    border: 3px solid var(--color-primary);
    transition: all 300ms ease-in-out;

    &:hover {
      background: none;
      color: var(--color-primary);
    }
  }
}
</style>
