import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Input"
      fields={[
        { key: 'inputName', label: 'Name:', defaultValue: data?.inputName || id.replace('customInput-', 'input_') },
        { key: 'inputType', label: 'Type:', defaultValue: data?.inputType || 'Text', type: 'select', options: ['Text', 'File'] }
      ]}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` }
      ]}
    />
  );
};
