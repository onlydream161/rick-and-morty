import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { pageRoutes } from "../routes";
import { CARACTERS } from "../utils/consts";

const AppRouter = () => {
  return (
    <main className="caracters__body">
      <Routes>
        {pageRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        <Route path="*" element={<Navigate to={CARACTERS} />} />
      </Routes>
    </main>
  );
};

export default AppRouter;
