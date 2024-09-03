'use client';

import {
  Button,
  ButtonProps,
  Drawer,
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  ListProps,
  styled,
} from '@mui/material';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { INavItemLink } from '@/types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type HeaderDropdownProps = {
  id?: string,
  title: string;
  links?: INavItemLink[];
};

export const HeaderDropdown = ({ links, title, id }: HeaderDropdownProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      handleCloseDrawer();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <StyledButton
        id="nav-drawer-toggle"
        variant='contained'
        color='ghost'
        className={clsx(isDrawerOpen && 'is-open')}
        aria-controls={isDrawerOpen ? 'nav-drawer' : undefined}
        aria-expanded={isDrawerOpen ? 'true' : undefined}
        aria-haspopup="true"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleToggleDrawer}
      >
        {title}
      </StyledButton>

      <StyledDrawer
        anchor="top"
        open={isDrawerOpen}
        id={`nav-drawer-toggle-${title}`}
        onClose={handleCloseDrawer}
        variant="persistent"
        ModalProps={{
          keepMounted: true,
          disablePortal: true,
          hideBackdrop: true,
        }}
        PaperProps={{
          ref: drawerRef,
        }}
      >
        <div className={clsx("styled-drawer-grid",id)}>

          <div className='styled-grid-item menu'>

            {links && (
              <StyledList component='div'>
                {links.map((link) => (
                  <StyledListItem
                    component={Link}
                    href={link.link}
                    key={link.title}
                    onClick={handleCloseDrawer}
                  >
                    {link.icon && (<i>{link.icon}</i>)}
                    <span>
                      {link.title}
                      {link.description && (<small>{link.description}</small>)}
                    </span>
                  </StyledListItem>
                ))}
              </StyledList>
            )}

          </div>

          <div className='styled-grid-item banner'>
            hello
          </div>

        </div>

      </StyledDrawer>
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

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  position: 'fixed',
  zIndex: '-1',
  width: '100%',
  maxWidth: '100%',
  height: 'fit-content',
  margin: '0 auto',
  backgroundColor: 'transparent',

  '.MuiDrawer-paper': {
    width: '100%',
    maxWidth: '1360px',
    margin: '0 auto',
    paddingTop: '88px',
    backgroundColor: theme.palette.secondary.main,
    borderWidth: '0 1px 1px 1px',
    borderStyle: 'solid',
    borderRadius: '0 0 32px 32px',
    borderColor: theme.palette.grey[400],
    boxShadow: 'none',
  },

  '& .styled-drawer-grid': {
    display: 'grid',
    gridTemplateColumns: '1fr 335px',
    alignItems: 'stretch',
    width: '100%',
    maxWidth: '100%',

    '& .styled-grid-item': {
      display: 'flex',
      flexDirection: 'column',
      padding: 24,

      '&.banner': {
        backgroundColor: 'red',
      },
    },
  },
}));

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gridAutoFlow: 'column',
  gridTemplateRows: 'auto auto auto',
  gap: '20px 24px',
  padding: 0,
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 0,
}));

const StyledListItem = styled(Link)<ListItemProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  padding: '16px 24px',

  '& span': {
    display: 'flex',
    flexDirection: 'column',
  },
}));