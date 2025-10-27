import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './common/MainLayout';
import HomeForms from './forms/HomeForms';
import Formik from './forms/Formik';
import UseForm from './forms/UseForm';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeForms />} />
          <Route path='forms/formik' element={<Formik />} />
          <Route path='forms/useform' element={<UseForm />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
