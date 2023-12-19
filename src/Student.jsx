function Student(props) {
  return (
    <div className="col-4 p-4 text-white">
      <div className="row border">
        <div className="col-2">
          <img className="w-100" src={props.headshot} alt="No name" />
        </div>
        <div className="col-10">
          {props.name}
          <br />
          Coding Experience {props.experience} years
        </div>
      </div>
    </div>
  );
}
export default Student;
