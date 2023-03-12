import { shallowMount } from "@vue/test-utils";
import router from "@/router";

import SearchArea from "@/components/SearchArea.vue";

describe("SearchArea.vue", () => {
  let wrapper = shallowMount(SearchArea, {
    global: {
      mocks: {
        $router: router,
      },
    },
  });

  it("Redirect and check route when search button click", async () => {
    const inputKeyword = wrapper.find('input[type="text"][name="keyword"]');
    await inputKeyword.setValue("developer");
    const inputCity = wrapper.find('input[type="text"][name="city"]');
    await inputCity.setValue("istanbul");
    const btn = wrapper.find(".search__button");
    await btn.trigger("click");
    await router.isReady();
    expect(router.currentRoute._value.fullPath).toBe(
      "/joblist?keyword=developer&location=istanbul"
    );
  });
});
