import { useState } from "react";
import { Tabs, Button, Modal, Input, Radio, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import  users  from "../db/users.db";
const { TabPane } = Tabs;
import Navbar from "./Navbar";
import {
  setChildren,
  setDependencies,
  setDependentName,
  setFirstName,
  setFullFormDone,
  setLastName,
  setMaritalStatus,
  setResetForm,
  setSSNNumber,
} from "../store/formActions";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const ssnNumber = useSelector((state) => state.ssnNumber);
  const dependencies = useSelector((state) => state.dependencies);
  const nameOfDependent = useSelector((state) => state.nameOfDependent);
  const maritalStatus = useSelector((state) => state.maritalStatus);
  const children = useSelector((state) => state.children);
  const formDone = useSelector((state) => state.fullFormDone);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  // tabs
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (key) => {
    console.log(key);
    setActiveTab(key);
  };

  const handleNextButtonClick = () => {
    if (activeTab === "1") {
      setActiveTab("2");
    } else if (activeTab === "2") {
      setActiveTab("3");
    }
  };
  const handleBackButtonClick = () => {
    if (activeTab === "2") {
      setActiveTab("1");
    } else if (activeTab === "3") {
      setActiveTab("2");
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (!formDone) {
      messageApi.info("Please Complete Form or You can Discard The Form");
    } else {
      setIsModalOpen(false);
      navigate("/submit")
    }
  };
  const handleCancel = () => {
    dispatch(setResetForm());
    setIsModalOpen(false);
  };
  return (
    <div>
      {contextHolder}
      <Navbar modalAction={showModal} />
      <div className="">
        <Modal
          title="User Form"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{
            style: { backgroundColor: "green", borderColor: "green" },
          }}
          cancelButtonProps={{
            style: {
              backgroundColor: "red",
              borderColor: "red",
              color: "white",
            },
          }}
          okText="Save"
          cancelText="Discard Form"
        >
          <Tabs activeKey={activeTab} onChange={handleTabChange}>
            {/* Tab 1 */}
            <TabPane tab="Personal Info" key="1">
              <div className="flex flex-col gap-3">
                <ul className="flex">
                  <li className="flex gap-3">
                    <p className="text-lg font-semibold">First Name:-</p>
                    <Input
                      className="w-[50%] outline-none"
                      placeholder="First Name"
                      name="firstName"
                      onChange={(e) => {
                        dispatch(setFirstName(e.target.value));
                      }}
                    />
                  </li>
                  <li className="flex gap-3">
                    <p className="text-lg font-semibold">Last Name:-</p>
                    <Input
                      className="w-[50%] outline-none"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={(e) => {
                        dispatch(setLastName(e.target.value));
                      }}
                    />
                  </li>
                </ul>
                <div className="flex justify-between p-2">
                  <div></div>
                  <Button
                    onClick={() => {
                      console.log(firstName);
                      if (firstName === "") {
                        messageApi.info("Please enter first name");
                        return;
                      } else if (lastName === "") {
                        messageApi.info("Please enter Last name");
                        return;
                      } else {
                        handleNextButtonClick();
                      }
                    }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </TabPane>
            {/* Tab 2 */}
            <TabPane tab="Additional Info" key="2">
              <div className="flex flex-col gap-3">
                <ul className="flex flex-col gap-3">
                  {/* SSN Number */}
                  <li className="flex gap-3">
                    <p className="text-lg font-semibold">SSN Number:-</p>
                    <Input
                      className="w-[50%] outline-none"
                      placeholder="SSN Number"
                      name="firstName"
                      onChange={(e) => {
                        dispatch(setSSNNumber(e.target.value));
                      }}
                    />
                  </li>
                  {/* dependecies */}
                  <li className="flex gap-3">
                    <p className="text-lg font-semibold">Dependencies</p>
                    <Radio.Group
                      onChange={(e) => {
                        dispatch(setDependencies(e.target.value));
                      }}
                    >
                      <Radio value={true}>Yes</Radio>
                      <Radio value={false}>No</Radio>
                    </Radio.Group>
                  </li>
                  {dependencies ? (
                    <li className="flex gap-3">
                      <p className="text-lg font-semibold">Dependent Name</p>
                      <Input
                        className="w-[50%] outline-none"
                        placeholder="Dependent Name"
                        name="lastName"
                        onChange={(e) => {
                          dispatch(setDependentName(e.target.value));
                        }}
                      />
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
                <div className="flex justify-between p-2">
                  <Button className="" onClick={handleBackButtonClick}>
                    Back
                  </Button>
                  <Button className="" onClick={handleNextButtonClick}>
                    Next
                  </Button>
                </div>
              </div>
            </TabPane>
            {/* Tab 3 */}
            <TabPane tab="Dependent Info" key="3">
              <div className="flex flex-col gap-3">
                <ul className="flex flex-col gap-3">
                  {/* martial */}
                  <li className="flex gap-3">
                    <p className="text-lg font-semibold">Marital Status</p>
                    <Radio.Group
                      onChange={(e) => {
                        dispatch(setMaritalStatus(e.target.value));
                      }}
                    >
                      <Radio value={true}>Married</Radio>
                      <Radio value={false}>Single</Radio>
                    </Radio.Group>
                  </li>
                  {maritalStatus ? (
                    <li className="flex gap-3">
                      <p className="text-lg font-semibold">Children</p>
                      <Radio.Group
                        onChange={(e) => {
                          dispatch(setChildren(e.target.value));
                        }}
                      >
                        <Radio value={true}>Yes</Radio>
                        <Radio value={false}>No</Radio>
                      </Radio.Group>
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
                <div className="flex justify-between p-2">
                  <Button className="" onClick={handleBackButtonClick}>
                    Back
                  </Button>
                  <Button
                    className=""
                    onClick={() => {
                      dispatch(setFullFormDone(true));
                      // const data = {
                      //   fullName: `${firstName} ${lastName}`,
                      //   ssnNumber: ssnNumber,
                      // };
                      // if (dependencies === true) {
                      //   data.dependencies = dependencies;
                      //   data.nameOfDependent = nameOfDependent;
                      // }
                      // if (maritalStatus === true) {
                      //   data.maritalStatus = maritalStatus;
                      //   data.children = children;
                      // }
                      // if (dependencies === false) {
                      //   data.dependencies = dependencies;
                      //   data.nameOfDependent = nameOfDependent;
                      // }
                      // if (maritalStatus === false) {
                      //   data.maritalStatus = maritalStatus;
                      // }
                      // users.push(data);
                    }}
                  >
                    Complete
                  </Button>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    </div>
  );
};

export default UserForm;
