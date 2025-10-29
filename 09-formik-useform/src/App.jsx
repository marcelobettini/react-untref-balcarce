import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './common/MainLayout';
import HomeForms from './forms/HomeForms';
import FormFormik from './forms/FormFormik';
import FormUseForm from './forms/FormUseForm';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeForms />} />
          <Route path='forms/formik' element={<FormFormik />} />
          <Route path='forms/useform' element={<FormUseForm />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
