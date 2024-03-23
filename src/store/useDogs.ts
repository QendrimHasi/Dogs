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

  getInitDogs: (currentPage?: number) => void;
  fetchMore: () => void;
  getDogById: (id: string) => void;
}

const useDogStore = create<DogState>((set, get) => ({
  dogs: [],
  dog: null,
  page: 1,
  loading: true,
  errorMessage: null,
  limit: 21,
  hasNextPage: true,
  getInitDogs: async (currentPage) => {
    const { limit } = get();

    set({ loading: true, errorMessage: null });
    const pageLimit = currentPage ? limit * currentPage : limit;

    const query = {
      limit: pageLimit,
      page: 1,
      has_breeds: 1,
    };

    try {
      const res = await api.get("/images/search", { params: query });

      set({
        loading: false,
        dogs: res.data,
        hasNextPage: res.data.length === pageLimit,
        page: currentPage ? currentPage : 1,
      });
    } catch (error) {
      set({
        loading: false,
        errorMessage: "Error fetching dogs",
      });
    }

    // set((state) => ({ bears: state.bears + 1 }));
  },
  fetchMore: async () => {
    const { limit, page, dogs } = get();

    set({ loading: true, errorMessage: null });

    const query = {
      limit: limit,
      page: page + 1,
      has_breeds: 1,
    };

    try {
      const res = await api.get("/images/search", { params: query });

      set({
        loading: false,
        dogs: [...dogs, ...res.data],
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
}));

export default useDogStore;
