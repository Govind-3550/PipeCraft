import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Output"
      fields={[
        { key: 'outputName', label: 'Name:', defaultValue: data?.outputName || id.replace('customOutput-', 'output_') },
        { key: 'outputType', label: 'Type:', defaultValue: data?.outputType || 'Text', type: 'select', options: ['Text', 'File'] }
      ]}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-value` }
      ]}
    />
  );
};
