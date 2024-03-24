import { create } from "zustand";
import api from "../utils/api";

interface DogState {
  dogs: any[];
  page: number;
  loading: boolean;
  errorMessage: string | null;
  limit: number;
  hasNextPage: boolean;
  dog: any;

  breeds: any[];
  breed_ids: any[];
  search: string;

  getInitDogs: (currentPage?: number) => void;

  getDogById: (id: string) => void;
  getBreeds: () => void;
  setFilters: (props: { selectedBreedsIds: any[]; search: string }) => void;
}

const useDogStore = create<DogState>((set, get) => ({
  dogs: [],
  dog: null,
  page: 1,
  loading: true,
  errorMessage: null,
  limit: 21,
  hasNextPage: true,
  breeds: [],
  breed_ids: [],
  search: "",
  getInitDogs: async (currentPage) => {
    console.log("currentPage", currentPage);
    const { limit, breed_ids, search } = get();
    window.scrollTo({ top: 0, behavior: "smooth" });

    set({
      loading: true,
      errorMessage: null,
      page: currentPage ? currentPage : 1,
    });

    const query: any = {
      limit: limit,
      page: currentPage ? currentPage : 1,
      has_breeds: 1,
      order: "RANDOM",
    };

    if (breed_ids?.length > 0) {
      query.breed_ids = breed_ids.map((el) => el.id).join(",");
    }
    if (search?.length > 0) {
      query.q = search;
    }

    console.log("query", query);

    try {
      const res = await api.get("/images/search", { params: query });

      set({
        loading: false,
        dogs: res.data,
        hasNextPage: res.data.length === limit,
      });
    } catch (error) {
      set({
        loading: false,
        errorMessage: "Error fetching dogs",
      });
    }

    // set((state) => ({ bears: state.bears + 1 }));
  },

  getDogById: async (id) => {
    set({ loading: true, errorMessage: null });
    try {
      const res = await api.get(`/images/${id}`);

      set({
        loading: false,
        dog: res?.data,
      });
    } catch (error) {
      set({
        loading: false,
        errorMessage: "Error fetching dogs",
      });
    }
  },

  getBreeds: async () => {
    try {
      const res = await api.get(`/breeds`);

      set({
        loading: false,
        breeds: res?.data,
      });
    } catch (error) {
      set({
        loading: false,
        errorMessage: "Error fetching dogs",
      });
    }
  },
  setFilters: ({ selectedBreedsIds, search }) => {
    set({ breed_ids: selectedBreedsIds, search });
    get().getInitDogs(1);
  },
}));

export default useDogStore;
