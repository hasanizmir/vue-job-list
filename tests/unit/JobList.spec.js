import { shallowMount } from "@vue/test-utils";
import JobList from "@/views/JobList.vue";

describe("JobList.vue", () => {
  it("renders job listings if there are jobs", () => {
    const store = {
      dispatch: jest.fn(),
      getters: {
        "jobs/getJobs": [
          {
            id: 1,
            positionName: "Software Developer",
            companyName: "Acme Inc.",
            cityName: "Ankara",
            townName: "Cankaya",
          },
          {
            id: 2,
            positionName: "Frontend Developer",
            companyName: "Beta Inc.",
            cityName: "Istanbul",
            townName: "Besiktas",
          },
        ],
      },
    };

    const wrapper = shallowMount(JobList, {
      global: {
        mocks: {
          $store: store,
          $route: {
            query: {},
          },
          $router: {
            push: jest.fn(),
          },
        },
      },
    });

    expect(wrapper.findComponent({ name: "JobItems" }).exists()).toBe(true);
  });

  it("renders empty message if there are no jobs", () => {
    const store = {
      dispatch: jest.fn(),
      getters: {
        "jobs/getJobs": [],
      },
    };

    const wrapper = shallowMount(JobList, {
      global: {
        mocks: {
          $store: store,
          $route: {
            query: {},
          },
          $router: {
            push: jest.fn(),
          },
        },
      },
    });

    expect(wrapper.find(".job-list__empty").text()).toBe("Sonuç bulunamadı!");
  });
});
