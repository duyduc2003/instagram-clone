import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    maxWidth: 220,
    padding: '8px 16px',
    borderRadius: 9,
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.background.default,
  },
}));
