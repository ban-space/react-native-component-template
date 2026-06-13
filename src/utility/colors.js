import { SystemBars } from "react-native-edge-to-edge";

export const light = {
    // ── core surfaces ──
    bg: '#f5f5f5',   // app background
    card: '#ffffff',   // cards, surfaces
    text: '#0a0a0a',   // primary text
    textMuted: '#555555',   // secondary / meta text
    border: '#e0e0e0',   // hairlines, dividers
    tabbar: '#ffffff',   // bottom nav background

    SystemBar: 'dark',
    // ── actions / status ──
    accent: '#2563eb',   // links, active states, primary buttons, bookmark fill
    danger: '#dc2626',   // destructive (unfollow, delete, errors)

    // ── inputs / controls ──
    inputBg: '#f3f3f5',   // text input background
    inputText: '#0a0a0a',
    placeholder: '#717182',
    switchTrack: '#cbced4',   // toggle off track
    switchOn: '#2563eb',   // toggle on track

    // ── skeleton loaders ──
    skeleton: '#e0e0e0',   // skeleton base
    skeletonHi: '#f0f0f0',   // shimmer highlight

    // ── press / ripple ──
    pressOverlay: 'rgba(0,0,0,0.04)',

    // ── on-image / on-color (text & icons over photos or accent) ──
    onColor: '#ffffff',                 // white text/icons on accent, category chips, featured
    onColorMuted: 'rgba(255,255,255,0.75)',  // muted white text on featured image
    onColorFaint: 'rgba(255,255,255,0.70)',  // faint white (category count labels)
    imageScrim: 'rgba(0,0,0,0.5)',         // dark circle behind back/bookmark icon-buttons on images
    backdrop: 'rgba(0,0,0,0.5)',         // modal / drawer backdrop

    // ── featured image gradient (the one allowed gradient) ──
    featuredGradientFrom: 'rgba(0,0,0,0)',   // top
    featuredGradientTo: 'rgba(0,0,0,0.75)',// bottom

    // ── category brand colors (fixed — identical in both themes) ──
    catAI: '#1D4ED8',
    catStartups: '#047857',
    catSecurity: '#B91C1C',
    catGadgets: '#6D28D9',
    catSpace: '#0E7490',
    catDevtools: '#92400E',
};

export const dark = {
    // ── core surfaces ──
    bg: '#0d0d0d',
    card: '#1a1a1a',
    text: '#f0f0f0',
    textMuted: '#888888',
    border: '#2a2a2a',
    tabbar: '#111111',
    SystemBar: 'light',
    // ── actions / status ──
    accent: '#2563eb',   // same blue, meets contrast on dark too
    danger: '#ef4444',   // brighter red for dark background

    // ── inputs / controls ──
    inputBg: '#1a1a1a',
    inputText: '#f0f0f0',
    placeholder: '#888888',
    switchTrack: '#2a2a2a',
    switchOn: '#2563eb',

    // ── skeleton loaders ──
    skeleton: '#1a1a1a',
    skeletonHi: '#2a2a2a',

    // ── press / ripple ──
    pressOverlay: 'rgba(255,255,255,0.06)',

    // ── on-image / on-color (same over photos regardless of theme) ──
    onColor: '#ffffff',
    onColorMuted: 'rgba(255,255,255,0.75)',
    onColorFaint: 'rgba(255,255,255,0.70)',
    imageScrim: 'rgba(0,0,0,0.5)',
    backdrop: 'rgba(0,0,0,0.5)',

    // ── featured image gradient ──
    featuredGradientFrom: 'rgba(0,0,0,0)',
    featuredGradientTo: 'rgba(0,0,0,0.75)',

    // ── category brand colors (fixed — identical in both themes) ──
    catAI: '#1D4ED8',
    catStartups: '#047857',
    catSecurity: '#B91C1C',
    catGadgets: '#6D28D9',
    catSpace: '#0E7490',
    catDevtools: '#92400E',
};

export const themes = {
    light,
    dark,
}