import React from "react";

const TeamEventDropdown = () => {
  const [list, setList] = useState([{ id: "", name: "--- กรุณาเลือก ---" }]);
  const getDropdownData = () => {
    axios
      .get("https://itreuionapi.herokuapp.com/team/all")
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data) {
          setList(list.concat(res.data.teams));
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    getDropdownData();
  }, []);

  return (
    <Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        className="form-control"
        id={props.id}
        required
        value={props.value}
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
      >
        {list &&
          list.map((val) => {
            return (
              <option key={val.id} value={val.id}>
                {val.name}
              </option>
            );
          })}
      </select>
    </Fragment>
  );
};

export default TeamEventDropdown;
