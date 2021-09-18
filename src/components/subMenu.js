import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
	display: flex;
	color: #ffffff;
	justify-content: space-between;
	align-items: center;
	padding: 25px;
	list-style: none;
	height: 70px;
	text-decoration: none;
	font-size: 1.5rem;
	&:hover {
		background: #7094db;
		border-left: 4px solid #fff;
		cursor: pointer;
	}
`;

const SidebarLabel = styled.span`
	margin-left: 20px;
`;

const DropdownLink = styled(Link)`
	background: #33b2cc;
	height: 60px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #f5f5f5;
	font-size: 1.2rem;
	&:hover {
		background: #70c9db;
		cursor: pointer;
	}
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav &&
            item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                );
            })}
        </>
    );
};

export default SubMenu;
