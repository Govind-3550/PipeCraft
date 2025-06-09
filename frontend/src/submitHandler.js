// submithandler.js
import axios from 'axios';

export const handleSubmit = async (nodes, edges) => {
  try {
    const response = await axios.post('http://localhost:8000/pipelines/parse', {
      nodes: nodes.map(n => ({ id: n.id })),
      edges: edges.map(e => ({ source: e.source, target: e.target }))
    });

    const { num_nodes, num_edges, is_dag } = response.data;

    alert(`Nodes: ${num_nodes}, Edges: ${num_edges}, DAG: ${is_dag ? 'Yes' : 'No'}`);
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
};
