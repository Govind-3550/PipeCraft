import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const TransformNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Transform"
      fields={[
        { key: 'operation', label: 'Operation:', defaultValue: 'toUpperCase', type: 'select', options: ['toUpperCase', 'toLowerCase', 'trim'] }
      ]}
      handles={[
        { type: 'target', position: Position.Left },
        { type: 'source', position: Position.Right }
      ]}
    />
  );
};
