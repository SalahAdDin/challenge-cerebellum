import { number, object } from 'yup';

const schema = object({
  budget: number().min(0, 'Your budget must be higher than 0.'),
});

export default schema;
