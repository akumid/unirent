import { create } from "zustand";
import IAddress from "../model/IAddress";

interface HostState {
  propertyType: string;
  // maxGuest: number;
  // maxBed: number;
  // maxBath: number;
  address: IAddress;
  images: any[];
  title: string;
  description: string;
  price: number;

  updatePropertyType: (input: string) => void;
  // updateMaxGuest: (input: number) => void;
  // updateMaxBed: (input: number) => void;
  // updateMaxBath: (input: number) => void;
  updateAddress: (input: IAddress) => void;
  updateImages: (input: any[]) => void;
  updateTitle: (input: string) => void;
  updateDescription: (input: string) => void;
  updatePrice: (input: number) => void;
}

export const useHostStore = create<HostState>()((set) => ({
  propertyType: "",
  // maxGuest: 0,
  // maxBed: 0,
  // maxBath: 0,
  address: {
    country: "",
    postalCode: "",
    unitNo: "",
    aptName: "",
  },
  images: [],
  title: "",
  description: "",
  price: 0,

  updatePropertyType: (input) => set(() => ({ propertyType: input })),
  // updateMaxGuest: (input) => set(() => ({ maxGuest: input })),
  // updateMaxBed: (input) => set(() => ({ maxBed: input })),
  // updateMaxBath: (input) => set(() => ({ maxBath: input })),
  updateAddress: (input) => set(() => ({ address: input })),
  updateImages: (input) => set(() => ({ images: input })),
  updateTitle: (input) => set(() => ({ title: input })),
  updateDescription: (input) => set(() => ({ description: input })),
  updatePrice: (input) => set(() => ({ price: input })),
}));
