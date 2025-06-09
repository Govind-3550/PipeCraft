import { handleSubmit } from './submitHandler';
import { useStore } from './store';   // import your Zustand store
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
  // Select nodes and edges from Zustand store
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="submit" className='submit' onClick={() => handleSubmit(nodes, edges)}>
        Submit
      </button>
    </div>
  );
};
