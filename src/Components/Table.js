import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table } from 'antd';


const data = [
  {
    key: "1",
    exercise: "Bench Press",
    sets: 3,
  },
];

for(let i = 2; i < 100; i++){
    data.push({

    })
    
}

const columns = [
  {
    title: "Exercise",
    dataIndex: "exercise",
    key: "exercise",
    width : '17%',
  },
  {
    title: "Sets",
    dataIndex: "sets",
    key: "sets",
    width : '6%',
  },
  {
    title: "Target Reps",
    dataIndex: "target",
    key: "target",
    width : '8%',
  },
  {
    title: "RPE",
    dataIndex: "rpe",
    key: "rpe",
    width: "6%",
  },
  {
    title: "Reps Hit",
    dataIndex: "repshit",
    key: "repshit",
    colSpan: 4,

  }
];

function PageNumber() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
}

const WorkoutTable = () => (
  <>
    <Table 
    columns={columns} 
    dataSource={data} 
    title={() => <div style = {{fontWeight: "bold", fontSize: "30px"}}> Week {PageNumber} </div>}
    size="small" 
    bordered
    />
  </>
);
export default WorkoutTable;
