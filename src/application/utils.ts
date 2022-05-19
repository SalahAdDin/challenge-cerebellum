import {
  Feature,
  FeaturePlan,
  FeatureSize,
  Plan,
  Recipe,
  RecipeItem,
} from '@domain/form.dto';
import { SyntheticEvent } from 'react';

const defaultRecipe: Recipe = {
  hasBudget: false,
  budget: 0,
  sanitary: false,
  floorTiling: false,
  size: 'small',
};

const plans: FeaturePlan = {
  toilet: {
    economy: 200,
    standard: 1000,
    premium: 3000,
  },
  sink: {
    economy: 350,
    standard: 700,
    premium: 1500,
  },
  bathtub: {
    economy: 800,
    standard: 1500,
    premium: 4650,
  },
  ceramic: {
    economy: 15,
    standard: 35,
    premium: 75,
  },
  marble: {
    economy: 50,
    standard: 95,
    premium: 150,
  },
};

const sizeCost: FeatureSize = {
  small: 9,
  medium: 12,
  large: 16,
};

const calculateRecipeList = (values: Recipe): RecipeItem[] => {
  const { size, ...other } = values;

  const result = Object.entries(other).reduce<RecipeItem[]>((acc, item) => {
    const [key, value] = item as [Feature, Plan];

    if (value === undefined) return acc;

    switch (key) {
      case 'bathtub':
      case 'toilet':
      case 'sink':
        return [
          ...acc,
          { feature: key, plan: value, price: plans[key][value] },
        ];
      case 'ceramic':
      case 'marble':
        return [
          ...acc,
          {
            feature: key,
            plan: value,
            price: plans[key][value] * sizeCost[size],
          },
        ];
      default:
        return acc;
    }
  }, []);

  return result;
};

function onPromise<T>(promise: (event: SyntheticEvent) => Promise<T>) {
  return (event: SyntheticEvent) => {
    if (promise) {
      promise(event).catch((error) => {
        console.log('Unexpected error', error);
      });
    }
  };
}

export { calculateRecipeList, onPromise, defaultRecipe };
