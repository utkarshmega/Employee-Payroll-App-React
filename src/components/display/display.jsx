import React from "react";
import "./display.scss";
import deleteIcon from "../../assets/icons/delete-black-18dp.svg";
import editIcon from "../../assets/icons/create-black-18dp.svg";
import profile1 from "../../assets/profile-images/Ellipse -3.png";
import profile2 from "../../assets/profile-images/Ellipse -1.png";
import profile3 from "../../assets/profile-images/Ellipse -8.png";
import profile4 from "../../assets/profile-images/Ellipse -7.png";
import { withRouter } from "react-router-dom";
import EmployeeService from "../../services/employee-payroll-service";

const Display = (props) => {
  const employeeService = new EmployeeService();
  const remove = (element) => {
      employeeService.deleteEmployee(element.id).then(data => console.log('Success'))
                    .catch(err => console.log('Error'));
      window.location.reload();
  }

  const edit = (element) => {
      props.history.push(`/payroll-form/${element.id}`);
    
   }

  return (
    <table id="display" className="display">
      <tbody>
        <tr key={-1}>
          <th>Profile Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Start Date</th>
          <th>Actions</th>
        </tr>
        {props.employeeArray &&
          props.employeeArray.map((element, ind) => (
            <tr key={ind}>
              <td><img className="profile" 
              src={
                element.profilePic ===
                "../../assets/profile-images/Ellipse -3.png"
                  ? profile1
                  : element.profilePic ===
                    "../../assets/profile-images/Ellipse -1.png"
                  ? profile2
                  : element.profilePic ===
                    "../../assets/profile-images/Ellipse -8.png"
                  ? profile3
                  : profile4
              }
              alt=""
            />
              </td>
              <td>{element.name}</td>
              <td className="gender">{element.gender}</td>
              <td>
                {element.departments &&
                  element.departments.map((dept) => (
                    <div className="dept-label">{dept}</div>
                  ))}
              </td>
              <td> ₹ {element.salary}</td>
              <td>{element.startDate}</td>
              <td>
                <img onClick = {() => remove(element)}
                  src={deleteIcon}
                  alt="delete"
                />
                <img onClick = {() => edit(element)}
                  src={editIcon}
                  alt="edit"
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default withRouter(Display); 