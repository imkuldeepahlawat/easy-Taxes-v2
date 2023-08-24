import { useEffect, useState } from "react";
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
      navigate("/submit");
    }
  };
  const handleCancel = () => {
    dispatch(setResetForm());
    setIsModalOpen(false);
  };
  useEffect(() => {
    dispatch(setResetForm());
  }, [isModalOpen]);
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
          okText="Submit"
          cancelText="Discard Form"
        >
          <Tabs activeKey={activeTab} onChange={handleTabChange}>
            {/* Tab 1 */}
            <TabPane  key="1">
              <div className="flex flex-col gap-3">
                <ul className="flex">
                  <li className="flex gap-3">
                    <p className="text-lg font-semibold">First Name:-</p>
                    <Input
                      className="w-[50%] outline-none"
                      placeholder="First Name"
                      name="firstName"
                      value={firstName}
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
                      value={lastName}
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
            <TabPane  key="2">
              <div className="flex flex-col gap-3">
                <ul className="flex flex-col gap-3">
                  {/* SSN Number */}
                  <li className="flex gap-3">
                    <p className="text-lg font-semibold">SSN Number:-</p>
                    <Input
                      className="w-[50%] outline-none"
                      placeholder="SSN Number"
                      name="ssnnumber"
                      value={ssnNumber}
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
                      value={dependencies}
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
                        name="depnedent name"
                        value={nameOfDependent}
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
                  <Button
                    className=""
                    onClick={() => {
                      if (ssnNumber === "") {
                        messageApi.info("Please enter SSN Number");
                      } else if (dependencies === null) {
                        messageApi.info("Please Your dependency type");
                      } else if (
                        dependencies === true &&
                        nameOfDependent === ""
                      ) {
                        messageApi.info("Please enter dependent name");
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
            {/* Tab 3 */}
            <TabPane  key="3">
              <div className="flex flex-col gap-3">
                <ul className="flex flex-col gap-3">
                  {/* martial */}
                  <li className="flex gap-3">
                    <p className="text-lg font-semibold">Marital Status</p>
                    <Radio.Group
                      value={maritalStatus}
                      onChange={(e) => {
                        console.log(e.target.value);

                        dispatch(setMaritalStatus(e.target.value));
                      }}
                    >
                      <Radio value={true}>Married</Radio>
                      <Radio value={false}>Single</Radio>
                    </Radio.Group>
                  </li>
                  {maritalStatus == true ? (
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
                      if (maritalStatus === null) {
                        messageApi.info("Please Select Your Marital Status");
                      } else if (maritalStatus === true && children === null) {
                        messageApi.info("Please Select do you have Childrens");
                      } else {
                        messageApi.info("Form is Filled Correctly");
                        dispatch(setFullFormDone(true));
                        messageApi.info("Now you can press the Submit Button");
                      }
                    }}
                  >
                    Click here after select options
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
