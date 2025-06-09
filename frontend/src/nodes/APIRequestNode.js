import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const APIRequestNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="API Request"
      fields={[
        { key: 'url', label: 'URL:', defaultValue: 'https://api.example.com' },
        { key: 'method', label: 'Method:', defaultValue: 'GET', type: 'select', options: ['GET', 'POST', 'PUT', 'DELETE'] }
      ]}
      handles={[
        { type: 'target', position: Position.Left },
        { type: 'source', position: Position.Right }
      ]}
    />
  );
};
