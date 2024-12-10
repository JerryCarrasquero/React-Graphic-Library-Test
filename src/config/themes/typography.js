// ==============================|| DEFAULT THEME - TYPOGRAPHY ||============================== //
/**
 * The function `Typography` returns an object containing typography styles such as font sizes, line
 * heights, and font weights based on the provided `fontFamily`.
 * @param fontFamily - The code you provided is a function that generates a typography object with
 * various font styles and sizes. The `fontFamily` parameter is used to set the overall font family for
 * the typography styles. When you call this function, you can pass a specific font family as an
 * argument to customize the typography styles based
 * @returns The function `Typography` returns an object containing various typographic styles such as
 * font sizes, line heights, font weights, and other text-related properties for different elements
 * like headings (h1-h6), captions, body text, subtitles, overline, and buttons. The `fontFamily`
 * parameter is used to set the overall font family for the typography styles.
 */
export default function Typography(fontFamily) {
  return {
    htmlFontSize: 16,
    fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: '2.375rem',
      lineHeight: 1.21
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.27
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.33
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5
    },
    h6: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.57
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.57
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: 1.66
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.57
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66
    },
    overline: {
      lineHeight: 1.66
    },
    button: {
      textTransform: 'capitalize'
    }
  };
}
