import { useState } from 'react';
import { Tabs, Button, Input, Select } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;

const FormX = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ssnNumber, setSSNNumber] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [hasDependents, setHasDependents] = useState(false);
  const [dependentName, setDependentName] = useState('');

  const handleTabChange = (key) => {
    console.log(key);
    setActiveTab(key);
  };

  const handleNextButtonClick = () => {
    if (activeTab === '1') {
      setActiveTab('2');
    } else if (activeTab === '2') {
      setActiveTab('3');
    }
  };

  const renderDependentSection = () => {
    if (hasDependents) {
      return <Input placeholder="Dependent's Name" value={dependentName} onChange={(e) => setDependentName(e.target.value)} />;
    }
    return <div>Summary page with user info and submit button</div>;
  };

  return (
    <div>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        {/* Tab 1 */}
        <TabPane  key="1">
          <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <Button onClick={handleNextButtonClick}>Next</Button>
        </TabPane>
        {/* Tab 2 */}
        <TabPane  key="2">
          <Input placeholder="SSN Number" value={ssnNumber} onChange={(e) => setSSNNumber(e.target.value)} />
          <Select placeholder="Marital Status" value={maritalStatus} onChange={(value) => setMaritalStatus(value)}>
            <Option value="single">Single</Option>
            <Option value="married">Married</Option>
          </Select>
          <Button onClick={handleNextButtonClick}>Next</Button>
        </TabPane>
        {/* Tab 3 */}
        <TabPane tab="Dependent Info" key="3">
          <Select placeholder="Do you have dependents?" value={hasDependents} onChange={(value) => setHasDependents(value)}>
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
          {renderDependentSection()}
          <Button onClick={handleNextButtonClick}>Next</Button>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default FormX;
