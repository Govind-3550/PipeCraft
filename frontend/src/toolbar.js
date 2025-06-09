// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {



    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '5px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

                <DraggableNode type='json' label='json' />
                <DraggableNode type='validation' label='validation' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='log' label='LogNode' />
                <DraggableNode type='apiRequest' label='APIRequest' />

            </div>
        </div>
    );
};
