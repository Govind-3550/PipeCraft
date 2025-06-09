import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: `${id}-response` }
      ]}
    />
  );
};
