import { memo } from "react";
import { Routes as RoutesDom, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const Routes = () => {
  return (
    <div className="p-4">
      <RoutesDom>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/video" element={<Results />} />
      </RoutesDom>
    </div>
  );
};

export default memo(Routes);
