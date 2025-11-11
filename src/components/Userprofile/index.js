import "./index.css";

const Userprofile = (props) => {
  const { user, deletUser } = props;

  const onDeleteUser = () => {
    deletUser(user.uniqueNo);
  };
  return (
    <div className="card p-3 m-5">
      <img src={user.imageUrl} alt={user.name} className="w-25" />
      <h1 className="text-primary">{user.name}</h1>
      <p className="text-warning">{user.role}</p>
      <delete className="btn btn-danger text-danger" onClick={onDeleteUser}>
        Delete
      </delete>
    </div>
  );
};

export default Userprofile;
