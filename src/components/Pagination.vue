<template>
  <nav v-if="totalPages > 1" class="pagination">
    <ul>
      <li v-if="currentPage > 1">
        <span @click="handleClick(currentPage - 1)">«</span>
      </li>

      <li
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="handleClick(page)"
      >
        {{ page }}
      </li>

      <li v-if="currentPage < totalPages">
        <span @click="handleClick(currentPage + 1)"> » </span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleClick(page) {
      this.$emit("paginationClick", page);
    },
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-md);

    li {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      color: var(--color-primary);
      cursor: pointer;
      border: 2px solid var(--color-primary);
      padding: var(--space-2xs) var(--space-sm);
    }

    .active {
      color: var(--color-white);
      background: var(--color-primary);
    }
  }
}
</style>
