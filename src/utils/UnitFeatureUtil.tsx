import IUnitFeature from "../model/IUnitFeature";

export const convertUnitFeatureToArray = (unitFeature: IUnitFeature) => {
  const featureArray = [];

  for (const feature in unitFeature) {
    if (unitFeature[feature]) {
      featureArray.push(feature);
    }
  }

  return featureArray;
};
