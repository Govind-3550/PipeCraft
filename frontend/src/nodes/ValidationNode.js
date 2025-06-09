import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const ValidationNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Validation"
      fields={[
        { key: 'fieldName', label: 'Field:', defaultValue: 'email' },
        { key: 'rule', label: 'Rule:', defaultValue: 'required', type: 'select', options: ['required', 'email', 'number'] }
      ]}
      handles={[
        { type: 'target', position: Position.Left },
        { type: 'source', position: Position.Right }
      ]}
    />
  );
};
