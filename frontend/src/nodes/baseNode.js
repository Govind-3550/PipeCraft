// BaseNode.js

import { useState } from 'react';
import { MdMargin } from 'react-icons/md';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, fields = [], handles = [] }) => {
  const [state, setState] = useState(
    Object.fromEntries(fields.map(f => [f.key, f.defaultValue]))
  );

  const handleChange = (key, value) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ width: 200, height: 100 + fields.length * 30, border: '1px solid black', padding: 8 }}>
      <h4 style={{margin:'0 0 1rem 0'}}><strong>{title}</strong></h4>
      <div>
        {fields.map(field => {
          if (field.type === 'select') {
            return (
              <label className='labelContainer' key={field.key}>
                {field.label}
                <select
                  value={state[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                >
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            );
          }
          return (
            <label className='labelContainer' key={field.key}>
              {field.label}
              <input
                type="text"
                value={state[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
              />
            </label>
          );
        })}
      </div>

      {handles.map((h, i) => (
        <Handle
          key={i}
          type={h.type}
          position={h.position}
          id={h.id || `${id}-${h.key || i}`}
          style={h.style || {}}
        />
      ))}
    </div>
  );
};
