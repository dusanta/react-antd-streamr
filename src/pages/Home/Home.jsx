import { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

import "./Home.css";

const defaultParams = {
  publicAccess: true,
};

const columns = [
  {
    title: "",
    dataIndex: "imageUrl",
    render: (val) => <img className="icon" src={val} alt=" " />,
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "State",
    dataIndex: "state",
  },
  {
    title: "Price per second",
    dataIndex: "pricePerSecond",
    sorter: true,
  },
  {
    title: "Owner",
    dataIndex: "owner",
  },
];

const Home = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(25);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    setLoading(true);

    (async () => {
      const { data } = await axios.get(
        "https://streamr.network/api/v1/products",
        {
          params: {
            ...defaultParams,
            max: limit,
            offset: limit * (page - 1),
            order,
            sortBy,
          },
        }
      );
      setLoading(false);
      setData(data.map((dt) => ({ ...dt, key: dt.id })));
    })();
  }, [limit, page, order, sortBy]);

  const handleTableChange = (pagination, filters, sorter, extra) => {
    const { order, field } = sorter;
    if (order === undefined) {
      setSortBy(null);
      setOrder(null);
      return;
    }
    const newOrder = { ascend: "asc", descend: "desc" }[order];
    field !== sortBy && setSortBy(field);
    newOrder !== order && setOrder(newOrder);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <h3>{selectedRowKeys.length} products selected</h3>{" "}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        loading={loading}
        onChange={handleTableChange}
        pagination={{
          pageSize: limit,
          current: page,
          total: 141,
          onChange: (newPage) => {
            setSelectedRowKeys([]);
            setPage(newPage);
          },
          onShowSizeChange: (current, size) =>{
            setLimit(size)
          },
          pageSizeOptions: [10, 25, 50, 100],
        }}
      />
    </div>
  );
};

export default Home;
