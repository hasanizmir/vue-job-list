import api from "@/services/api";

export default {
  state: {
    job: [],
  },
  getters: {
    getJob: (state) => state.job,
  },
  mutations: {
    setJob(state, job) {
      state.job = job;
    },
    resetJob(state) {
      state.job = [];
    },
  },
  actions: {
    async fetchJob({ state, commit }, id) {
      if (state.jobs?.length > 0) return;

      const job = await api.get(`/jobs/${id}`);
      commit("setJob", job.data);
    },
    resetJob({ commit }) {
      commit("resetJob");
    },
  },
  namespaced: true,
};
