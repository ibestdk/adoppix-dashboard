import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { WithNav } from './routes/navcontroller/with-navbar';
import { WithOutNav } from './routes/navcontroller/without-navbar';
import { SummaryData } from './routes/summaryData/summarydata';
import { ProtectedRoute } from './routes/AuthProvider/authProvider';
import { Login } from './routes/AuthProvider/login';
import { BannerManager } from './routes/MediaManagement/banner-management';

function App() {

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="" element={<WithNav />}>
          <Route index element={<SummaryData />} />
          <Route path='banner' element={<BannerManager />} />
        </Route>
        <Route element={<WithOutNav />}></Route>
      </Route>
      <Route path='login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
