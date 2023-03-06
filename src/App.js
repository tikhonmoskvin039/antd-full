import { PoweroffOutlined, UserOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Progress,
  Select,
  Space,
  Spin,
  Table,
  TimePicker,
} from "antd";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setDataSource(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // const onButtonclick = (e) => {
  //   console.log("clicked");
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // };

  // const fruits = ["banana", "cherry", "orange"];

  // const data = [
  //   {
  //     name: "One",
  //     age: 10,
  //     address: "Address one",
  //     key: "1",
  //   },
  //   {
  //     name: "two",
  //     age: 12,
  //     address: "Address two",
  //     key: "2",
  //   },
  //   {
  //     name: "Three",
  //     age: 22,
  //     address: "Address three",
  //     key: "3",
  //   },
  // ];

  // const columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     key: 'key',
  //     render: (name) => {
  //       return <a>{name}</a>
  //     }
  //   },
  //   {
  //     title: 'Age',
  //     dataIndex: 'age',
  //     key: 'key',
  //     sorter: (a,b) => a.age - b.age
  //   },
  //   {
  //     title: 'Address',
  //     dataIndex: 'address',
  //     key: 'key'
  //   },
  //   {
  //     title: 'Graduated?',
  //     key: 'key',
  //     render: (payload) => {
  //       return <p>{payload.age >= 18 ? 'True' : 'False'}</p>
  //     }
  //   },
  // ]

  // const [showAlert, setShowAlert] = useState(false);

  // const onFinish = (e) => {
  //   console.log("e", e);
  //   setTimeout(() => {
  //     // message.success('Login success')
  //     // message.error('Login error')
  //     // message.warning("Login warning");
  //     setShowAlert(true);
  //   }, 1000);
  // };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "2",
      sorter: (record1, record2) => {
        return record1.userId > record2.userId;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "3",
    },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "4",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In progress"}</p>;
      },
      filters: [
        { text: "Complete", value: true },
        { text: "In progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* <Button
          type="primary"
          block
          onClick={onButtonclick}
          loading={loading}
          icon={<PoweroffOutlined />}
          className="my-button"
          style={{ backgroundColor: "orange", color: "black" }}
        >
          My button
        </Button> */}

        {/* <Input.Search
          placeholder="Name"
          maxLength={10}
          type="password"
          prefix={<UserOutlined />}
          allowClear
          // disabled
        /> */}

        {/* <p>Which is your favorite fruit?</p>
        <Select allowClear maxTagCount={2}  mode="multiple" placeholder="Select fruit" style={{width: '50%'}}>
          {fruits.map((fr, idx) => {
            return <Select.Option key={idx} value={fr} />;
          })}
        </Select> */}

        {/* {showAlert && <Alert type="error" message='error' description='Login error' closable />}
        <Form onFinish={onFinish}>
          <Form.Item label="User name" name="username">
            <Input required placeholder="User name" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password required placeholder="Password" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form> */}

        {/* <Table dataSource={data} columns={columns}>

        </Table> */}

        {/* <DatePicker picker="month" />
        <DatePicker.RangePicker picker="month" />
        <TimePicker /> */}

        {/* <Spin spinning={loading} />
        <Button onClick={() => setLoading((prev) => !prev)}>Toggle spin</Button>
        <Spin spinning={loading}>
          <p>P tag 1</p>
          <p>P tag 1</p>
          <p>P tag 1</p>
        </Spin> */}

        {/* <Space direction="vertical">
          <Progress percent={33} />
          <Progress percent={33} type="circle" strokeColor={"red"} />
          <Progress
            percent={33}
            type="line"
            strokeColor={"red"}
            status="success"
          />
          <Progress
            percent={33}
            type="line"
            strokeColor={"red"}
            status="exception"
          />
          <Progress
            percent={33}
            type="circle"
            strokeColor={"red"}
            status="success"
          />
          <Progress
            percent={33}
            type="circle"
            strokeColor={"red"}
            status="exception"
          />
          <Progress percent={33} type="line" strokeColor={"red"} />
          <Progress
            percent={33}
            type="line"
            strokeColor={"red"}
            status="active"
          />
          <Progress
            percent={33}
            type="line"
            strokeColor={"red"}
            strokeWidth={50}
          />
          <Progress
            percent={33}
            type="line"
            steps={3}
            strokeColor={"red"}
            // strokeWidth={50}
          />
        </Space> */}

        <Table
          columns={columns}
          loading={loading}
          dataSource={dataSource}
          // pagination={true}
          pagination={{
            current: page,
            pageSize: pageSize,
            total: 500,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
              // * make the API call here with page and pageSize
            },
          }}
        ></Table>
      </header>
    </div>
  );
}

export default App;
