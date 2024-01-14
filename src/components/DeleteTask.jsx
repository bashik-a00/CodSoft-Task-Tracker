const DeleteTask = ({ items, onDelete, onToggle }) => {
  return (
    <div>
      <ul type="none">
        <div className="li-items">
          {items.map((item) => (
            <li key={item.id} className={item.completed?'completed':''}>
              <div className="li-values">{item.value}</div>
              <div className="btn">
                <button onClick={()=> onToggle(item.id)}>Toggle</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default DeleteTask;
