import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const LogNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Log"
      fields={[
        { key: 'label', label: 'Label:', defaultValue: 'Debug Info' }
      ]}
      handles={[
        { type: 'target', position: Position.Left },
        { type: 'source', position: Position.Right }
      ]}
    />
  );
};
