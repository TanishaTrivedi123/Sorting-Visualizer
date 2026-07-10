import React from "react";
import { TbBinaryTree2 } from "react-icons/tb";
import styles from "./TreeVisualization.module.css";

const TreeVisualization = () => {
  // Dummy Nodes
  const nodes = [
    { id: 1, value: 45, x: 450, y: 45, type: "current" },
    { id: 2, value: 12, x: 250, y: 130, type: "compare" },
    { id: 3, value: 25, x: 650, y: 130, type: "normal" },
    { id: 4, value: 8, x: 170, y: 235, type: "normal" },
    { id: 5, value: 30, x: 330, y: 235, type: "normal" },
    { id: 6, value: 17, x: 570, y: 235, type: "normal" },
    { id: 7, value: 19, x: 730, y: 235, type: "normal" },
    { id: 8, value: 2, x: 110, y: 340, type: "normal" },
    { id: 9, value: 17, x: 230, y: 340, type: "normal" },
    { id: 10, value: 19, x: 390, y: 340, type: "normal" },
  ];

  // Dummy Edges
  const edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },

    { from: 2, to: 4 },
    { from: 2, to: 5 },

    { from: 3, to: 6 },
    { from: 3, to: 7 },

    { from: 4, to: 8 },
    { from: 4, to: 9 },

    { from: 5, to: 10 },
  ];

  return (
    <section className={styles.treeContainer}>
      <div className={styles.heading}>
        <TbBinaryTree2 />
        <h3>Tree Visualization</h3>
      </div>

      <div className={styles.treeContent}>
        <div className={styles.treeArea}>
          <svg className={styles.treeSvg} viewBox="0 0 900 420">
            {/* Draw Lines */}

            {edges.map((edge) => {
              const parent = nodes.find((node) => node.id === edge.from);
              const child = nodes.find((node) => node.id === edge.to);

              return (
                <line
                  key={`${edge.from}-${edge.to}`}
                  x1={parent.x}
                  y1={parent.y}
                  x2={child.x}
                  y2={child.y}
                  className={styles.edge}
                />
              );
            })}

            {/* Draw Nodes */}

            {nodes.map((node) => (
              <TreeNode key={node.id} node={node} />
            ))}
          </svg>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendColor} ${styles.current}`}></span>
            <p>Current Node</p>
          </div>

          <div className={styles.legendItem}>
            <span className={`${styles.legendColor} ${styles.compare}`}></span>
            <p>Comparing Node</p>
          </div>

          <div className={styles.legendItem}>
            <span className={`${styles.legendColor} ${styles.normal}`}></span>
            <p>Sorted / Other Nodes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

function TreeNode({ node }) {
  return (
    <g>
      <circle
        cx={node.x}
        cy={node.y}
        r="24"
        className={
          node.type === "current"
            ? styles.currentNode
            : node.type === "compare"
              ? styles.compareNode
              : styles.normalNode
        }
      />

      <text
        x={node.x}
        y={node.y + 7}
        textAnchor="middle"
        className={styles.nodeText}
      >
        {node.value}
      </text>
    </g>
  );
}

export default TreeVisualization;
