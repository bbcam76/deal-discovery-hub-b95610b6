## Goal

Take the pasted React code as the working baseline for SG Auction, port it into the project's TanStack Start structure, and polish the UI to more closely match the uploaded reference (dark navy + gold luxury aesthetic, dense 3-column dashboard layout).

## Build

**1. Design tokens (`src/styles.css`)**
- Replace default palette with SG Auction dark theme in `:root`:
  - background `#020711`-ish (oklch deep navy)
  - foreground near-white
  - primary = gold (`oklch(0.78 0.14 85)`), primary-foreground = near-black
  - accent = electric blue (`oklch(0.55 0.20 260)`)
  - destructive = warm orange for timers
  - card = translucent black surface
- Add custom tokens: `--gold`, `--gold-glow`, `--gradient-gold`, `--gradient-bg` (radial navy + amber), `--shadow-luxury`.
- Default site to dark (apply `.dark` on `<html>` via root layout) so the theme reads as luxury-dark by default.

**2. Route**
- Replace `src/routes/index.tsx` placeholder with the SG Auction homepage.
- Update `head()` meta: title "SG Auction — Bid. Win. Save.", description, og tags.
- Update `__root.tsx` `head()` defaults to SG Auction branding.

**3. Componentization** (under `src/components/sg/`)
- `TopNav.tsx` — logo, search, links, icons, user avatar
- `BrandSidebar.tsx` — left column: SG logo, tagline, feature icons, auction types list
- `HeroBanner.tsx` — Luxury Stays hero
- `LiveAuctionCard.tsx` — single auction card
- `LiveAuctionsGrid.tsx` — wraps the 4 cards + "View all" header
- `AiPricingEngine.tsx` — left panel of mid row with brain visual + signal chips + AI recommendation sub-card
- `BusinessDashboard.tsx` — revenue card
- `PhoneMockup.tsx` — right column phone preview
- `LiveAuctionsStats.tsx` — right column stats (128 live, totals)
- `PremiumCard.tsx` — SG Premium upgrade card
- `AppDownloadCard.tsx` — QR + store badges
- `FeatureStrip.tsx` — bottom 5-icon trust strip
- `PlaceBidDialog.tsx` — bid modal (use shadcn Dialog)

Page composes them in the 3-column grid (`340px | 1fr | 330px`) matching the reference; on mobile collapses to single column.

**4. UI improvements vs. the pasted code**
- Use semantic tokens everywhere (no hard-coded `bg-[#020711]`, `text-yellow-400`, etc.) — gold/blue/orange come from CSS variables.
- Add the AI Recommendation sub-card (Starting/Reserve/Buy Now prices) shown in the reference, currently missing.
- Add the bottom 5-feature trust strip (Global Reach, Secure & Safe, AI-Powered, Real-Time, Maximize Revenue).
- Add the Download App card with QR + App Store / Google Play badges.
- Add the Auto Bid toggle row inside the phone mockup.
- Improve typography: tighter tracking on "SG", display serif feel on hero (use existing system stack; just weight/size tuning).
- Real auction-card layout matching reference: type chip on image, two-column price grid, orange monospace-feel timer, gold highest bid, blue "Place Bid" full-width.
- Subtle gold border glow on premium cards via `--shadow-luxury`.
- Remove the "Design Reference Image" debug card and the "Turn Unsold Inventory" form (not in reference) — keep the page focused on the reference composition.
- Wire the existing `useState` bid logic into shadcn Dialog; preserve `placeBid` behavior.

**5. Assets**
- Copy `user-uploads://sg-auction-reference.png` into `src/assets/` only as internal reference (not rendered). Hero/card images use the Unsplash URLs already in the prototype data.

## Technical notes

- TanStack route only; no server functions, no Lovable Cloud needed.
- Icons from `lucide-react` (already used).
- shadcn `Dialog`, `Button`, `Input`, `Badge` reused where appropriate.
- Responsive: `xl:grid-cols-[340px_1fr_330px]`, stacks under `xl`. Cards reflow `md:grid-cols-2 xl:grid-cols-4`.
- No new deps required.

## Out of scope

- Real-time bidding backend, auth, payments, publish-auction form, persistence. Bid state stays client-only as in the prototype.
