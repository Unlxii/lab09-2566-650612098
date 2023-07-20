export const Task = ({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}) => {
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const DoneBtnOnclick = () => {
    toggleDoneTaskFunc(completed);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {completed ? (
        <span className="text-decoration-line-through">{title}</span>
      ) : (
        <span>{title}</span>
      )}
      <button className="btn btn-success" onClick={DoneBtnOnclick}>
        Done
      </button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
};
