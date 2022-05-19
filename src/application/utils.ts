import {
  Feature,
  FeaturePlan,
  FeatureSize,
  Plan,
  Recipe,
} from '@domain/form.dto';
import { SyntheticEvent } from 'react';

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

const calculateBudget = (values: Recipe): number => {
  const { size, ...other } = values;

  const result = Object.entries(other).reduce((acc, item) => {
    const [key, value] = item as [Feature, Plan];

    switch (key) {
      case 'bathtub':
      case 'toilet':
      case 'sink':
        return acc + plans[key][value];
      case 'ceramic':
      case 'marble':
        return acc + plans[key][value] * sizeCost[size];
      default:
        return acc;
    }
  }, 0);

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

export { calculateBudget, onPromise };
