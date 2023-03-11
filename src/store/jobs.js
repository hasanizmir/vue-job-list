import api from "@/services/api";

export default {
  state: {
    jobs: [],
  },
  getters: {
    getJobs: (state) => state.jobs,
  },
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
  },
  actions: {
    async fetchJobs({ state, commit }) {
      if (state.jobs?.length > 0) return;

      const jobs = await api.get("/jobs?sortBy=durationDay");
      commit("setJobs", jobs.data);
    },
  },
  namespaced: true,
};
