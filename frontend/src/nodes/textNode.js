// Updated TextNode.js

import { useState, useEffect } from 'react';
import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variableHandles, setVariableHandles] = useState([]);

  const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
    return [...new Set(matches)];
  };

  const handleTextChange = (e) => {
    const updatedText = e.target.value;
    setCurrText(updatedText);
    const vars = extractVariables(updatedText);
    setVariableHandles(
      vars.map((v, idx) => ({
        type: 'target',
        position: Position.Left,
        id: `${id}-${v}`,
        style: { top: 60 + idx * 20 }
      }))
    );
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      fields={[
        {
          key: 'text',
          label: 'Text:',
          defaultValue: currText,
          onChange: handleTextChange
        }
      ]}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-output` }
      ]}
      extraHandles={variableHandles}
    />
  );
};
