// draggableNode.js

import {
  FaTerminal,
  FaCode,
  FaFileAlt,
  FaCog,
  FaRobot,
  FaDatabase,
  FaBug,
  FaCheckCircle,
  FaFileCode,
} from "react-icons/fa";

const labelToIcon = {
  Input: <FaTerminal size={20} style={{ color: "oklch(0.61 0.11 222)" }} />,
  Output: <FaCode size={20} style={{ color: "oklch(0.61 0.11 222)" }} />,
  Text: <FaFileAlt size={20} style={{ color: "oklch(0.61 0.11 222)" }} />,
  validation: (
    <FaCheckCircle size={20} style={{ color: "oklch(0.61 0.11 222)" }} />
  ),
  Transform: <FaCog size={20} style={{ color: "oklch(0.61 0.11 222)" }} />,
  LogNode: <FaBug size={20} style={{ color: "oklch(0.61 0.11 222)" }} />,
  LLM: <FaRobot size={20} style={{ color: "oklch(0.61 0.11 222)" }} />,
  json: <FaDatabase size={20} style={{ color: "oklch(0.61 0.11 222)" }} />,
  APIRequest: (
    <FaFileCode size={20} style={{ color: "oklch(0.61 0.11 222)" }} />
  ),
};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "5.3rem",
        height: "5.3rem",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        justifyContent: "center",
        lineHeight: "1",
        backgroundColor: "white",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0.5px",
        fontSize: "13px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        gap: "0.8rem",
        fontWeight: 600,
      }}
      draggable
    >
      {labelToIcon[label] || <FaCode size={20} color="oklch(0.61 0.11 222)" />}
      <span style={{ color: "oklch(0.21 0.04 266)" }}>{label}</span>
    </div>
  );
};
