import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import UnifiedCaseStudy from '../components/case-studies/UnifiedCaseStudy';

const ProjectPage = () => {
  const { id } = useParams();
  const { t } = useLang();

  // Find the project data in translations
  const projectData = t.caseStudies?.[id];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!projectData) {
    return <Navigate to="/" replace />;
  }

  return <UnifiedCaseStudy data={projectData} />;
};

export default ProjectPage;
