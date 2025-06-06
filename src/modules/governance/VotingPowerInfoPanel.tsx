import { Trans } from '@lingui/macro';
import { Box, Paper, Skeleton, Typography } from '@mui/material';
import { AvatarSize } from 'src/components/Avatar';
import { CompactMode } from 'src/components/CompactableTypography';
import { FormattedNumber } from 'src/components/primitives/FormattedNumber';
import { Link } from 'src/components/primitives/Link';
import { TextWithTooltip } from 'src/components/TextWithTooltip';
import { UserDisplay } from 'src/components/UserDisplay';
import { usePowers } from 'src/hooks/governance/usePowers';
import { GENERAL } from 'src/utils/events';

export function VotingPowerInfoPanel() {
  const { data: powers } = usePowers();
  return (
    <Paper sx={{ px: 6, pb: 6, pt: 4 }}>
      <Typography
        variant="h3"
        sx={{ height: '36px', display: 'flex', alignItems: 'center', mb: 4 }}
      >
        <Trans>Your info</Trans>
      </Typography>
      <UserDisplay
        withLink={true}
        avatarProps={{ size: AvatarSize.LG }}
        titleProps={{ variant: 'h4', addressCompactMode: CompactMode.MD }}
        subtitleProps={{
          variant: 'caption',
          addressCompactMode: CompactMode.XXL,
          color: 'text.secondary',
        }}
        funnel={'Your info: Governance'}
      />
      {powers ? (
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', mr: '25%' }}>
            <TextWithTooltip
              text="Voting power"
              variant="description"
              textColor="text.secondary"
              event={{
                eventName: GENERAL.TOOL_TIP,
                eventParams: {
                  tooltip: 'Voting Power',
                  funnel: 'Governance Page',
                },
              }}
            >
              <>
                <Typography variant="subheader2">
                  <Trans>
                    Your voting power is based on your AAVE/stkAAVE balance and received
                    delegations.
                  </Trans>
                </Typography>
                <Typography variant="subheader2" mt={4}>
                  <Trans>Use it to vote for or against active proposals.</Trans>
                </Typography>
              </>
            </TextWithTooltip>
            <FormattedNumber
              data-cy={`voting-power`}
              value={powers.votingPower}
              variant="h2"
              visibleDecimals={2}
            />
          </Box>
          <Box>
            <TextWithTooltip
              text="Proposition power"
              variant="description"
              textColor="text.secondary"
              event={{
                eventName: GENERAL.TOOL_TIP,
                eventParams: {
                  tooltip: 'Proposition Power',
                  funnel: 'Governance Page',
                },
              }}
            >
              <>
                <Typography variant="subheader2">
                  <Trans>
                    Your proposition power is based on your AAVE/stkAAVE balance and received
                    delegations.
                  </Trans>
                </Typography>
                <Typography variant="subheader2" mt={4}>
                  <Trans>
                    To submit a proposal for minor changes to the protocol, you&apos;ll need at
                    least 80.00K power. If you want to change the core code base, you&apos;ll need
                    320k power.
                    <Link
                      href="https://docs.aave.com/developers/v/2.0/protocol-governance/governance"
                      target="_blank"
                      variant="description"
                      sx={{ textDecoration: 'underline', ml: 1 }}
                    >
                      <Trans>Learn more.</Trans>
                    </Link>
                  </Trans>
                </Typography>
              </>
            </TextWithTooltip>
            <FormattedNumber
              data-cy={`proposition-power`}
              value={powers.propositionPower}
              variant="h2"
              visibleDecimals={2}
            />
          </Box>
        </Box>
      ) : (
        <Skeleton />
      )}
    </Paper>
  );
}
