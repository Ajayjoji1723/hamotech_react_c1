import "./index.css";

const Userprofile = (props) => {
  const { user } = props;
  return (
    <div className="card p-3">
      <img src={user.imageUrl} alt={user.name} className="w-25" />
      <h1 className="text-primary">{user.name}</h1>
      <p className="text-warning">{user.role}</p>
    </div>
  );
};

export default Userprofile;
