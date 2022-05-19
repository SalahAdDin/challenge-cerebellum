import { Result } from '@domain/form.dto';
import React, { useMemo, useState } from 'react';
import AppContext, { initialState } from './context';

const AppProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [result, setResult] = useState<Result>(initialState);
  const memo = useMemo(() => ({ result, setResult }), [result, setResult]);

  return <AppContext.Provider value={memo}>{children}</AppContext.Provider>;
};

export default AppProvider;
