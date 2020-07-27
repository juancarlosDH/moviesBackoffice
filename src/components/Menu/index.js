import React from 'react';
import MenuItem from './MenuItem';
//import './menu.css';

function Menu() {
	const menuItems = [
		{ active : "active", href: "/", fa : "fa-tachometer-alt", name : "Dashboard" },
		{ active : "", href: "/", fa : "fa-folder", name : "Pages" },
		{ active : "", href: "/", fa : "fa-chart-area", name : "Charts" },
		{ active : "", href: "/", fa : "fa-table", name : "Reports" },
		{ active : "", href: "/", fa : "fa-envelope", name : "Emails" },
	];

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>
			
			<hr className="sidebar-divider my-0" />
			
			{
				menuItems.map( (menuItem, index) => {
					return <MenuItem active={menuItem.active}
					 href={menuItem.href}
					 fa={menuItem.fa}
					 name={menuItem.name} 
					 key={index} />
				})
			}

			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    );
}

export default Menu;