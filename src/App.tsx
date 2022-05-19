import AppProvider from '@application/provider';
import { Container } from '@nextui-org/react';
import Home from '@presentation/screens/Home';
import Layout from '@presentation/widgets/Layout';
import LoadingWidget from '@presentation/widgets/LoadingWidget';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const Results = React.lazy(() => import('./screens/Results'));

const App = () => (
  <Container
    responsive
    md
    as="section"
    justify="center"
    alignContent="center"
    direction="column"
    gap={20}
  >
    <Suspense fallback={<LoadingWidget />}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/result" />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </Suspense>
  </Container>
);

export default App;
