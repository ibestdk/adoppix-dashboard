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
import { DockerManager } from './routes/MediaManagement/banner-management';
import { Report } from './routes/Excel/report';
import { Withdraw } from './routes/Withdraw/withdraw';
import { AdminManange } from './routes/UserManagement/adminManage';
import { AdminRegister } from './routes/UserManagement/adminRegister';
import { QA } from './routes/QA/qa';
import { ExcelIndex } from './routes/Excel';
import { ExcelUploadTeacher } from './routes/Excel/upload-teacher';
import { ExcelUploadStudent } from './routes/Excel/upload-student';
import { ExcelItem } from './routes/Excel/excel-item';
import { BlogIndex } from './routes/blog/blog-index';
import { DockerAnswers } from './routes/MediaManagement/docker-register';
import { BlogCreate } from './routes/blog/blog-create';
import { BlogGeneral } from './routes/blog/blog-general';
import { BlogCourse } from './routes/blog/blog-course';

function App() {
  return (
    <Routes>
      <Route path="" element={<WithNav />}>
        <Route index element={<SummaryData />} />
        <Route path="docker" element={<DockerManager />} />
        <Route path="docker/item" element={<ExcelItem />} />
        <Route path="upload-docker-answer" element={<DockerAnswers />} />
        <Route path="excel" element={<ExcelIndex />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/general" element={<BlogGeneral />} />
        <Route path="blog/course" element={<BlogCourse />} />
        <Route path="blog/create" element={<BlogCreate />} />
        <Route path="excel/item" element={<ExcelItem />} />
        <Route path="upload-student-csv" element={<ExcelUploadStudent />} />
        <Route path="upload-teacher-answer" element={<ExcelUploadTeacher />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="user/management" element={<AdminManange />} />
        <Route path="admin/register user" element={<AdminRegister />} />
        <Route path="qa" element={<QA />} />
      </Route>
      <Route element={<WithOutNav />}></Route>

      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
