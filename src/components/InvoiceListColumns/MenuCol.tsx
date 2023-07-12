/** @jsxImportSource @emotion/react */
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { MenuOptionBox } from "./style";

const optionsBgColor = {
  edit: "rgb(58, 54, 219, 0.05000000074505806)",
  delete: "rgb(255, 105, 180, 0.05000000074505806)",
};

const optionsColor = {
  edit: "rgb(58, 54, 219)",
  delete: "rgb(255, 105, 180)",
};

function MenuCol() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizRoundedIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <MenuOptionBox
            bgColor={optionsBgColor.edit}
            color={optionsColor.edit}
          >
            <DriveFileRenameOutlineRoundedIcon />
            <span>Edit</span>
          </MenuOptionBox>
        </MenuItem>
        <MenuItem>
          <MenuOptionBox
            bgColor={optionsBgColor.delete}
            color={optionsColor.delete}
          >
            <DeleteRoundedIcon />
            <span>Delete</span>
          </MenuOptionBox>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MenuCol;
