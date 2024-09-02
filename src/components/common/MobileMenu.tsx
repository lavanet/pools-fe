'use client';
import React, { MouseEvent, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Drawer,
  styled,
  Typography,
} from '@mui/material';
import Link from '@mui/material/Link';
import { navItems } from '@/utils/variables';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleToggle = (event: MouseEvent<HTMLElement>) => {
    setMobileMenuOpen((prev) => !prev); // Toggle the drawer state
  };

  const handleClose = () => {
    setMobileMenuOpen(false);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <StyledButton
        className={mobileMenuOpen? 'is-open' : ""}
        aria-expanded={mobileMenuOpen}
        aria-haspopup="true"
        onClick={handleToggle}
        title={mobileMenuOpen? 'Close menu' : "Open menu"}
      >
        <span className="mobile-menu-icon"/>
      </StyledButton>

      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={handleClose}
        hideBackdrop={true}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: '100%',
            height: '100vh',
          },
        }}
      >
        <DrawerContent>
          {navItems.map((accordion, accordionIdx) => {
            return (
              <StyledAccordion
                disableGutters
                square
                key={accordionIdx}
                expanded={expanded === `panel${accordionIdx}`}
                onChange={handleChange(`panel${accordionIdx}`)}
              >
                <StyledAccordionSummary
                  className={expanded === `panel${accordionIdx}`?'is-open' : ""}
                  expandIcon={<KeyboardArrowDownIcon/>}
                  aria-controls={`panel${accordionIdx}-content`}
                  id={`panel${accordionIdx}-header`}
                >
                  <Typography>{accordion.title}</Typography>

                </StyledAccordionSummary>

                <StyledAccordionDetails>
                  {accordion.links.map((link, linkIdx) => (
                    <Link key={linkIdx} href="#">
                      {link.title}
                    </Link>
                  ))}
                </StyledAccordionDetails>
              </StyledAccordion>
            )
          })}

        </DrawerContent>
      </Drawer>

    </>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: '36px',
  padding: '10px 20px',
  border: '1px solid grey',
  boxShadow: 'none',
  color: "#ffffff",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '1',

  '& .mobile-menu-icon': {
    flexShrink: '0',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10px',
    height: '1.5px',
    backgroundColor: 'currentColor',

    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '1.5px',
      backgroundColor: 'currentColor',
      transition: 'transform 0.3s ease'
    },

    '&:before': {
      top: '-2.5px'
    },

    '&:after': {
      top: '2.5px'
    }
  },

  '&.is-open': {
    '& .mobile-menu-icon': {
      backgroundColor: 'transparent',

      '&:before, &:after': {
        inset: '0',
        margin: 'auto',
      },

      '&:before': {
        transform: 'rotate(-45deg)'
      },
      '&:after': {
        transform: 'rotate(45deg)'
      },
    }

  }
}));

const DrawerContent = styled('div')(({ theme }) => ({
  zIndex: 9998,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '76px',
  backgroundColor: theme.palette.background.default,
  height: '100%',
  maxHeight: '100%',
  overflowY: 'auto',
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
  borderTop: '1px solid #212630',
  borderBottom: '1px solid #212630',
  boxShadow: 'none',

  '&:not(:last-child)': {
    borderBottom: 0,
  },

  '&:before': {
    display: 'none',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,

  '&.is-open': {
    backgroundColor: theme.palette.secondary.main,
  }
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: theme.palette.secondary.main,
}));