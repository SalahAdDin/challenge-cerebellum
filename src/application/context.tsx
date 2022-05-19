import { Result } from '@domain/form.dto';
import { createContext } from 'react';

const initialState: Result = {
  hasBudget: false,
  budget: 0,
  recipe: [],
  price: 0,
};

type AppContextProps = {
  result: Result;
  setResult: (result: Result) => void;
};

const AppContext = createContext<AppContextProps>({
  result: initialState,
  setResult: () => undefined,
});

export type { AppContextProps };
export { initialState };
export default AppContext;
