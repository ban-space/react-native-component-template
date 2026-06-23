import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const Hscale = (size) => (width / BASE_WIDTH) * size;
const Vscale = (size) => (height / BASE_HEIGHT) * size;

const moderateScale = (size, factore = .3) => size + (Hscale(size) - size) * factore;

const fontScale = (size) => moderateScale(size, 0.3)
export const scale = { Hscale, Vscale, moderateScale, fontScale }

const fontSizes = {
    caption: fontScale(8),   // Timestamps, tiny footnotes, badge text
    subtext: fontScale(10),   // Secondary text, small labels
    bodySmall: fontScale(12),      // Primary reading text
    body: fontScale(14),
    bodyLarge: fontScale(16),
    listTitle: fontScale(18),
    subtitle: fontScale(20),  // Sub-headers (H3)
    title: fontScale(24),     // Main screen headers (H2)
    hero: fontScale(32),
};
const spacing = {
    wxs: Hscale(4),    // Extra small spacing for tight layouts
    wsm: Hscale(8),    // Small spacing for compact elements
    wmd: Hscale(16),   // Medium spacing for general use
    wlg: Hscale(24),   // Large spacing for separation
    wxl: Hscale(32),
    hxs: Vscale(4),    // Extra small vertical spacing
    hsm: Vscale(8),    // Small vertical spacing
    hmd: Vscale(16),   // Medium vertical spacing
    hlg: Vscale(24),   // Large vertical spacing
    hxl: Vscale(32),

};
const borderRadii = {
    none: 0,          // No border radius
    sm: moderateScale(4),    // Small border radius for subtle rounding
    md: moderateScale(8),    // Medium border radius for standard rounding
    lg: moderateScale(16),   // Large border radius for pronounced rounding
    pill: moderateScale(9999), // Pill-shaped border radius for fully rounded elements
};
const iconSizes = {
    xs: moderateScale(12),   // Extra small icons for tight spaces
    sm: moderateScale(16),   // Small icons for buttons and labels
    md: moderateScale(24),   // Medium icons for general use
    lg: moderateScale(32),   // Large icons for emphasis
    xl: moderateScale(48),   // Extra large icons for key actions
};

export const Size = { fontSizes, spacing, borderRadii, iconSizes };