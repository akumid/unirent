import IGeo from "./IGeo";

export default interface IAddress {
  country: string;
  postalCode: string;
  unitNo: string;
  aptName: string;
  geo: IGeo;
  street: string;
}
