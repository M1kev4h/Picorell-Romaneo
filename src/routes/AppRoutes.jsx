import React from "react";
import {  Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { LastTable } from "../pages/LastTable.jsx";
import { DataBase } from "../pages/DataBase.jsx"; 

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/last-table" element={ <LastTable/> } />
        <Route path="/database" element={ <DataBase/> } />
    </Routes>
  )
}
