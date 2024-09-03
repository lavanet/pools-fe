'use client';

import { INavItemLink } from '@/types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, ButtonProps, Menu, MenuItem, styled } from '@mui/material';
import { MouseEvent, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { left } from '@popperjs/core';

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
    <>
      <StyledButton
        id="nav-dropdown"
        variant='contained'
        color='ghost'
        className={clsx(open && 'is-open')}
        aria-controls={open ? 'nav-dropdown-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        endIcon={links ? <KeyboardArrowDownIcon /> : undefined}
        onClick={handleClick}
      >
        {title}
      </StyledButton>

      {links && (
        <StyledMenu
          className='nav-menu'
          aria-labelledby="nav-dropdown"
          anchorEl={anchorEl}
          variant="menu"
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          MenuListProps={{
            component: 'div'
          }}
          open={open}
          onClose={handleClose}
        >

          {links.map((link) => (
            <MenuItem
              key={link.title}
              component={Link}
              href={link.link}
              title={link.title}
            >
              {link.title}
            </MenuItem>
          ))}
        </StyledMenu>
      )}
    </>
  );
};

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  padding: '14px 20px',
  borderRadius: '40px',
  gap: '8px',
  fontSize: 16,

  [theme.breakpoints.down('lg')]: {
    padding: '14px',
  },

  '& .MuiButton-endIcon': {
    transition: 'transform 0.3s ease'
  },

  '&.is-open': {
    color: theme.palette.common.white,

    '& .MuiButton-endIcon': {
      transform: 'rotate(180deg)'
    }
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  // width: 'calc(100vw - 48px)',
  // left: 0,
  // right: 0,
  // top: '22px',
  //
  // '& .MuiPaper-root': {
  //   width: '100%',
  //   maxWidth: '1360px',
  //   margin: '0 auto',
  //   borderRadius: '0 0 32px 32px',
  //   backgroundColor: 'blue',
  // },

  '& .MuiMenuItem-root': {
    padding: '12px 24px'
  },
}));