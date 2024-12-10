// material-ui
import { alpha } from '@mui/material/styles';

// ==============================|| DEFAULT THEME - CUSTOM SHADOWS ||============================== //
/**
 * The function `CustomShadows` returns an object with custom shadow styles for different elements
 * based on the provided theme.
 * @returns The function `CustomShadows` is returning an object with three key-value pairs. The keys
 * are `button`, `text`, and `z1`, each representing a different type of shadow effect. The values are
 * the CSS shadow styles for each type.
 */
export default function CustomShadows(theme) {
  return {
    button: `0 2px #0000000b`,
    text: `0 -1px 0 rgb(0 0 0 / 12%)`,
    z1: `0px 2px 8px ${alpha(theme.palette.grey[900], 0.15)}`
    // only available in paid version
  };
}
