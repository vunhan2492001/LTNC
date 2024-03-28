import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Dropdown, Button, Row, Col } from "antd";
import "./index.scss";

const HeaderPage = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Trang chủ",
      key: "main",
    },
    {
      label: "Tra cứu học phần",
      key: "termSearch",
    },
    {
      label: "Thời khóa biểu",
      key: "schedule",
    },
  ];

  const items = [
    {
      key: null,
      label: " 12345789 | Nguyen Van A",
      children: [
        {
          key: "personalInfor",
          label: "Xem thông tin cá nhân",
        },
        {
          key: "logout",
          label: "Đăng xuất",
        },
      ],
    },
  ];
  const onHeaderMenuClick = (value) => {
    console.log(value);
  };
  const onInforMenuClick = (value) => {
    console.log(value);
  };
  return (
    <div className="header-container">
      <Menu
        theme={{
          token: {
            activeBarBorderWidth: 0,
            horizontalItemHoverColor: "none",
            horizontalItemSelectedColor: "none",
          },
        }}
        mode="horizontal"
        items={menuItems}
        className="header-menu"
        onClick={onHeaderMenuClick}
      />
      <Menu
        mode="inline"
        items={items}
        className="header-infor"
        onClick={onInforMenuClick}
      />
    </div>
  );
};
export default HeaderPage;
