import { deleteItem } from './api';

export default function ItemList({ items, onItemsUpdated }) {
  const handleDelete = async (id) => {
    await deleteItem(id);
    onItemsUpdated();
  };

  if (!items.length) {
    return <p>No items yet.</p>;
  }

  return (
    <div>
      <h2>Items</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item._id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              textAlign: 'left',
            }}
          >
            <h3 style={{ marginTop: 0 }}>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button type="button" onClick={() => handleDelete(item._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
