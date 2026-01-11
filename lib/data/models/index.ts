import aurora from "./aurora.json";
import delanie from "./delanie.json";
import duplex from "./duplex.json";
import emelia from "./emelia.json";
import langdon from "./langdon.json";
import louisiana from "./louisiana.json";
import viana from "./viana.json";

export interface Model {
  key: string;
  name: string;
  sqft: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  price: string;
  description: string;
  imagesFolder: string;
}

export const models: Model[] = [
  aurora as Model,
  delanie as Model,
  duplex as Model,
  emelia as Model,
  langdon as Model,
  louisiana as Model,
  viana as Model,
];

