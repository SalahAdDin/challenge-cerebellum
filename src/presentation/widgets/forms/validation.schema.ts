import { bool, number, object, string } from 'yup';

const schema = object({
  hasBudget: bool().required('Do you have?'),
  budget: number().when('hasBudget', {
    is: true,
    then: number()
      .required('How much?')
      .min(100, 'Your budget must be higher than $100.'),
  }),
  sanitary: bool().required('Sanitary?'),
  toilet: string().when('sanitary', {
    is: true,
    then: string().required('Which one?'),
  }),
  sink: string().when('sanitary', {
    is: true,
    then: string().required('Which one?'),
  }),
  bathtub: string().when('sanitary', {
    is: true,
    then: string().required('Which one?'),
  }),
  floorTiling: bool().required('Do you want a change?'),
  tilingType: string().when('floorTiling', {
    is: true,
    then: string().required('What do you prefer?'),
  }),
  ceramic: string().when('tilingType', {
    is: 'ceramic',
    then: string().required('Which one?'),
  }),
  marble: string().when('tilingType', {
    is: 'marble',
    then: string().required('Which one?'),
  }),
  size: string().required('Which size?'),
});

export default schema;
