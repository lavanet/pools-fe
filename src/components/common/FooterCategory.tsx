'use client';

import { INavItemLink } from '@/types';
import { Stack, styled, Typography } from '@mui/material';
import Link from 'next/link';

type FooterCategoryProps = {
  links: INavItemLink[];
  title?: string;
};

export const FooterCategory = ({ links, title }: FooterCategoryProps) => (
  <StyledStack spacing={3}>
    <StyledTitle>{title}</StyledTitle>

    <Stack spacing={2} useFlexGap>
      {links.map(({ link, title }) => (
        <Link href={link} key={title} title={title}>
          <StyledTypography>{title}</StyledTypography>
        </Link>
      ))}
    </Stack>
  </StyledStack>
);

const StyledStack = styled(Stack)({ flex: 1 });

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[200],
  fontWeight: 500,
  minHeight: 22,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
  fontWeight: 500,
  transition: 'color 0.3s',

  '&:hover': { color: theme.palette.common.white },
}));
