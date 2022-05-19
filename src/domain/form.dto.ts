type Feature = 'toilet' | 'sink' | 'bathtub' | 'ceramic' | 'marble';

type Size = 'small' | 'medium' | 'large';

type Plan = 'economy' | 'standard' | 'premium';

type TilingType = 'ceramic' | 'marble';

type PlanCost = {
  [key in Plan]: number;
};

type FeaturePlan = {
  [key in Feature]: PlanCost;
};

type FeatureSize = {
  [key in Size]: number;
};

interface Recipe {
  hasBudget: boolean;
  budget?: number;
  sanitary: boolean;
  toilet?: Plan;
  sink?: Plan;
  bathtub?: Plan;
  floorTiling: boolean;
  tilingType?: TilingType;
  ceramic?: Plan;
  marble?: Plan;
  size: Size;
}

export type { Feature, FeaturePlan, FeatureSize, Plan, Recipe };
