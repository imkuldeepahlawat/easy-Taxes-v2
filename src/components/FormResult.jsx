import React from "react";
import { Button, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setResetForm } from "../store/formActions";

const FormResult = () => {
  const dispatch = useDispatch();
  const formDone = useSelector((state) => state.fullFormDone);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const ssnNumber = useSelector((state) => state.ssnNumber);
  const dependencies = useSelector((state) => state.dependencies);
  const nameOfDependent = useSelector((state) => state.nameOfDependent);
  const maritalStatus = useSelector((state) => state.maritalStatus);
  const children = useSelector((state) => state.children);
  const navigate = useNavigate();
  return (
    <div className="bg-white w-[100vw] h-[100vh]">
      {formDone ? (
      <Result
        status="success"
        title="Form is Submited Successfully"
        subTitle=""
        extra={[
          ,
          <Button
            onClick={() => {
              dispatch(setResetForm());
              navigate("/");
            }}
          >
            Home
          </Button>,
          <table className="w-[80vw] border my-3 ">
            <tr className="flex gap-4 p-3 border bg-slate-500 ">
              <th className="w-[25%]">Full Name</th>
              <th className="w-[25%]">SSN Number</th>
              <th className="w-[20%]">Any Dependencies</th>
              {dependencies === true ? (
                <th className="w-[20%]">Dependent Name</th>
              ) : null}
              <th className="w-[20%]">Marital Status</th>
              {maritalStatus === true ? (
                <th className="w-[20%]">Children</th>
              ) : null}
            </tr>
            <tr className="flex gap-4 p-3 border">
              <td className="w-[25%] uppercase ">{`${firstName} ${lastName}`}</td>
              <td className="w-[25%] uppercase">{ssnNumber}</td>
              <td className="w-[20%] uppercase">
                {dependencies === false ? "No" : "Yes"}
              </td>
              {dependencies === true ? (
                <td className="w-[20%] uppercase">{nameOfDependent}</td>
              ) : null}
              <td className="w-[20%] uppercase">
                {maritalStatus === false ? "Single" : "Married"}
              </td>
              {children === true && maritalStatus === true ? (
                <td className="w-[20%] uppercase">Yes</td>
              ) : null}
            </tr>
          </table>,
        ]}
      />
      ) : (
      <Result
        status="403"
        title="403"
        subTitle="Sorry, But Cheating is not allowed here"
        extra={<Button onClick={() => navigate("/")}>Back Home</Button>}
      />
      )}
    </div>
  );
};

export default FormResult;
