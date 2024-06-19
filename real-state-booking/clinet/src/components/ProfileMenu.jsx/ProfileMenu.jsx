import { Avatar, Menu, MenuItem } from '@mantine/core';
import React, { useState } from 'react';

const ProfileMenu = ({ user, logout }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <Menu opened={menuOpened} onToggle={setMenuOpened}>
      <Menu.Target>
        <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
          <Avatar
            src={user?.picture}
            alt="user image"
            radius="50%"
            defaultSrc="/path/to/fallback-image.jpg"
            onClick={handleMenuToggle} // Toggle the menu on image click
          />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <MenuItem onClick={logout}>Logout</MenuItem>
        {/* Add other menu items here */}
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
