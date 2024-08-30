'use client';

import { INavItemLink } from '@/types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, ButtonProps, Menu, MenuItem, styled } from '@mui/material';
import { MouseEvent, useState } from 'react';

type HeaderDropdownProps = {
  title: string;
  links?: INavItemLink[];
};

export const HeaderDropdown = ({ links, title }: HeaderDropdownProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton
        variant='contained'
        color='ghost'
        aria-controls={open ? 'nav-dropdown-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        endIcon={links ? <KeyboardArrowDownIcon /> : undefined}
        id="nav-dropdown"
        onClick={handleClick}
      >
        {title}
      </StyledButton>

      {links && (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          aria-labelledby="nav-dropdown"
          className='nav-menu'
          open={open}
          onClose={handleClose}
        >
          {links.map((link) => (
            <MenuItem key={link.title} onClick={handleClose}>
              {link.title}
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
};

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  padding: '14px 20px',
  borderRadius: '40px',
  gap: '8px',

  [theme.breakpoints.down('lg')]: {
    padding: '14px',
  },
}));
