import { Loading } from '@nextui-org/react';
import React from 'react';

const LoadingWidget: React.FC = () => (
  <Loading loadingCss={{ $$loadingSize: '100px', $$loadingBorder: '10px' }} />
);

export default LoadingWidget;
