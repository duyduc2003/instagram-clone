import React from 'react';
import { useAppStyle } from './components/GlobalStyles';
import Pages from './pages';

function App() {
  const classes = useAppStyle();
  return (
    <>
      <Pages />
      <div className={classes.bgApp} />
    </>
  );
}

export default App;
