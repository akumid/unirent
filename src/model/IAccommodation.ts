import EPropertyType from "./EPropertyType";
import IAddress from "./IAddress";
import IUnitFeature from "./IUnitFeature";

export default interface IAccommodation {
  id: string;
  title: string;
  propertyType: EPropertyType;
  price: number;
  shortDescription: string;
  fullDescription: string;
  rented: boolean;
  unitFeature?: string[];
  address: IAddress;
  availableDate: string;
  images: any[];
  listedBy: string;
}
