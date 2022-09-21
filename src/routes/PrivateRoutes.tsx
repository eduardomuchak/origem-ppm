import { Routes, Route } from "react-router-dom";

import { ActivitiesRegistration } from "pages/ActivitiesRegistration";
import { ActivitiesSchedule } from "pages/ActivitiesSchedule";
import DetalhamentoProjeto from "pages/DetalhamentoProjeto";
import { GanttPage } from "pages/Gantt";
import { Home } from "pages/Home";
import { Infographics } from "pages/Infographics";
import { Fornecedores } from "pages/ListaDosFornecedores";
import { NotFound } from "pages/NotFound";
import { Permissions } from "pages/Permissions";
import { PermissionsList } from "pages/PermissionsList";
import { Profile } from "pages/Profile";
import { Projects } from "pages/Projects";
import { ProjectsRegistration } from "pages/ProjectsRegistration";
import { ProvidersRegistration } from "pages/ProvidersRegistration";
import { Reports } from "pages/Reports";
import { Settings } from "pages/Settings";
import { ShareRegister } from "pages/ShareRegister";
import VisaoPorArea from "pages/VisaoPorArea";

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects-registration" element={<ProjectsRegistration />} />
      <Route
        path="/providers-registration"
        element={<ProvidersRegistration />}
      />
      <Route
        path="/activities-registration"
        element={<ActivitiesRegistration />}
      />
      <Route path="/share-register" element={<ShareRegister />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/infographics" element={<Infographics />} />
      <Route path="/permissions" element={<PermissionsList />} />
      <Route path="permissions/:id" element={<Permissions />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/gantt" element={<GanttPage />} />
      <Route path="/fornecedores" element={<Fornecedores />} />
      <Route path="/detalhamento/:id" element={<DetalhamentoProjeto />} />
      <Route path="/atividade/:id" element={<ActivitiesSchedule />} />
      <Route path="/atividade/:id/visao-por-area" element={<VisaoPorArea />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
