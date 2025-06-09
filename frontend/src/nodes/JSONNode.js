import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const JSONNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="JSON"
      fields={[
        { key: 'jsonInput', label: 'JSON:', defaultValue: '{"key": "value"}' }
      ]}
      handles={[
        { type: 'source', position: Position.Right },
        { type: 'target', position: Position.Left }
      ]}
    />
  );
};
