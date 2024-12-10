/**
 * This allowest to distribute the providers to the entire app
 * The Providers component renders children within a ThemeCustomization component in a JavaScript React
 * application, this themeCustomization provides a custom theme to the whole app.
 * @returns The Providers component is being returned, which wraps the children components with the
 * ThemeCustomization component.
 */
import ThemeCustomization from "../config/themes";
const Providers = ({ children }) => {
  return <ThemeCustomization>{children}</ThemeCustomization>;
};

export default Providers;
