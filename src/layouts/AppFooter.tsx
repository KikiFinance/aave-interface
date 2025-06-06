import { Trans } from '@lingui/macro';
import { GitHub, Telegram, Twitter } from '@mui/icons-material';
import { Box, styled, SvgIcon, Typography } from '@mui/material';
import { Link } from 'src/components/primitives/Link';

interface StyledLinkProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const StyledLink = styled(Link)<StyledLinkProps>(({ theme }) => ({
  color: theme.palette.text.muted,
  '&:hover': {
    color: theme.palette.text.primary,
  },
  display: 'flex',
  alignItems: 'center',
}));

const FOOTER_ICONS = [
  // {
  //   href: 'https://hey.xyz/u/aave',
  //   icon: <LensLogoIcon />,
  //   title: 'Aave',
  // },
  {
    href: 'https://x.com/KiKi_Finance',
    icon: <Twitter />,
    title: 'Lens',
  },
  // {
  //   href: 'https://discord.com/invite/aave',
  //   icon: <DiscordIcon />,
  //   title: 'Discord',
  // },
  {
    href: 'https://github.com/KikiFinance',
    icon: <GitHub />,
    title: 'Github',
  },
  {
    href: 'https://t.me/KiKiFinance_official',
    icon: <Telegram />,
    title: 'Telegram',
  },
];

export function AppFooter() {
  // const [setAnalyticsConfigOpen, setFeedbackOpen] = useRootStore(
  //   useShallow((store) => [store.setAnalyticsConfigOpen, store.setFeedbackOpen])
  // );

  const FOOTER_LINKS = [
    // {
    //   href: 'https://aave.com/terms-of-service',
    //   label: <Trans>Terms</Trans>,
    //   key: 'Terms',
    // },
    // {
    //   href: 'https://aave.com/privacy-policy/',
    //   label: <Trans>Privacy</Trans>,
    //   key: 'Privacy',
    // },
    {
      href: 'https://docs.kiki.finance/',
      label: <Trans>Docs</Trans>,
      key: 'Docs',
    },
    // {
    //   href: 'https://docs.aave.com/faq/',
    //   label: <Trans>FAQS</Trans>,
    //   key: 'FAQS',
    // },
    // {
    //   href: 'https://discord.com/invite/aave',
    //   label: <Trans>Send feedback</Trans>,
    //   key: 'Send feedback',
    //   onClick: (event: React.MouseEvent) => {
    //     event.preventDefault();
    //     setFeedbackOpen(true);
    //   },
    // },
    // {
    //   href: '/',
    //   label: <Trans>Manage analytics</Trans>,
    //   key: 'Manage analytics',
    //   onClick: (event: React.MouseEvent) => {
    //     event.preventDefault();
    //     setAnalyticsConfigOpen(true);
    //   },
    // },
  ];

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        padding: ['22px 0px 40px 0px', '0 22px 0 40px', '20px 22px'],
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '22px',
        flexDirection: ['column', 'column', 'row'],
        boxShadow:
          theme.palette.mode === 'light'
            ? 'inset 0px 1px 0px rgba(0, 0, 0, 0.04)'
            : 'inset 0px 1px 0px rgba(255, 255, 255, 0.12)',
      })}
    >
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {FOOTER_LINKS.map((link) => (
          <StyledLink key={link.key} href={link.href}>
            <Typography variant="caption">{link.label}</Typography>
          </StyledLink>
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {FOOTER_ICONS.map((icon) => (
          <StyledLink href={icon.href} key={icon.title}>
            <SvgIcon
              sx={{
                fontSize: [24, 24, 20],
              }}
            >
              {icon.icon}
            </SvgIcon>
          </StyledLink>
        ))}
      </Box>
    </Box>
  );
}
