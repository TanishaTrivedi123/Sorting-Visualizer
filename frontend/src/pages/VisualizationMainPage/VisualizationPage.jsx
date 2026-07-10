import React from "react";
import styles from "./VisualizationPage.module.css";
import PageHeader from "../../components/VisualizationPage/PageHeader/PageHeader";
import TopInfoBar from "../../components/VisualizationPage/TopInfoBar/TopInfoBar";
import VisualizationMessage from "../../components/VisualizationPage/VisualizationMessage/VisualizationMessage";
import StepTimeline from "../../components/VisualizationPage/StepTimeline/StepTimeline";
import ArrayVisualization from "../../components/VisualizationPage/ArrayVisualization/ArrayVisualization";
import TreeVisualization from "../../components/VisualizationPage/TreeVisualization/TreeVisualization";

const VisualizationPage = () => {
  return (
    <div className={styles.page}>
      <PageHeader />

      <main className={styles.main}>
        <TopInfoBar />
        <ArrayVisualization />
        {/* <TreeVisualization /> */}
        <VisualizationMessage />
        <StepTimeline />
      </main>
    </div>
  );
};

export default VisualizationPage;
