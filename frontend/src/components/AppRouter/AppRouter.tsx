import { Routes, Route } from 'react-router-dom';

import MyExercises from '../MyExercises';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Main</h1>} />
      <Route path="/my-exercises" element={<MyExercises />} />
    </Routes>
  );
};

export default AppRouter;
