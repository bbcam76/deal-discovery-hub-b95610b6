import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Plane,
  Hotel,
  Utensils,
  Watch,
  Globe,
  ShieldCheck,
  Brain,
  Gavel,
  Zap,
  Crown,
  Bell,
  Heart,
  Search,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Repeat,
  Cpu,
  Wifi,
  Home,
  Briefcase,
  User,
  ArrowLeft,
  Apple,
  Play,
  QrCode,
  Activity,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SG Auction — Bid. Win. Save. Extraordinary Deals." },
      {
        name: "description",
        content:
          "SG Auction connects businesses with millions of buyers through real-time auctions, AI pricing, and global last-minute deals.",
      },
      { property: "og:title", content: "SG Auction — Bid. Win. Save." },
      {
        property: "og:description",
        content: "Real-time auctions, AI pricing, and last-minute luxury deals.",
      },
    ],
  }),
  component: SGAuctionPage,
});

type Auction = {
  id: number;
  title: string;
  type: string;
  icon: typeof Plane;
  normal: string;
  start: string;
  highest: number;
  bids: number;
  time: string;
  image: string;
  startColor?: string;
};

const auctionsData: Auction[] = [
  {
    id: 1,
    title: "Málaga → Bangkok",
    type: "FLIGHT",
    icon: Plane,
    normal: "€850",
    start: "€300",
    highest: 425,
    bids: 23,
    time: "04:12:45",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "5★ Resort Thailand",
    type: "HOTEL",
    icon: Hotel,
    normal: "€240 / night",
    start: "€60 / night",
    highest: 110,
    bids: 15,
    time: "02:45:30",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "20 Tables Tonight",
    type: "RESTAURANT",
    icon: Utensils,
    normal: "50% Off",
    start: "10% Off",
    highest: 45,
    bids: 8,
    time: "01:15:20",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Premium Smartwatch",
    type: "PRODUCT",
    icon: Watch,
    normal: "€399",
    start: "€120",
    highest: 210,
    bids: 12,
    time: "03:22:10",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
];

function SGLogo({ size = "lg" }: { size?: "lg" | "md" | "sm" }) {
  const cls =
    size === "lg"
      ? "text-6xl"
      : size === "md"
      ? "text-3xl"
      : "text-xl";
  return (
    <span
      className={`${cls} font-black tracking-tight leading-none`}
      style={{
        backgroundImage: "var(--gradient-gold)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      SG
    </span>
  );
}

function SGAuctionPage() {
  const [auctions, setAuctions] = useState<Auction[]>(auctionsData);
  const [selected, setSelected] = useState<number | null>(null);
  const [bidAmount, setBidAmount] = useState("");

  const placeBid = (id: number) => {
    const amount = Number(bidAmount);
    if (!amount) return;
    setAuctions((prev) =>
      prev.map((a) =>
        a.id === id && amount > a.highest
          ? { ...a, highest: amount, bids: a.bids + 1 }
          : a,
      ),
    );
    setSelected(null);
    setBidAmount("");
  };

  return (
    <div className="min-h-screen text-foreground">
      <main className="max-w-[1600px] mx-auto p-4 lg:p-6 grid grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)_320px] gap-5">
        {/* LEFT — BRAND SIDEBAR */}
        <aside className="rounded-3xl border border-primary/30 bg-card/70 backdrop-blur-xl p-6 shadow-[var(--shadow-luxury)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 opacity-30 pointer-events-none"
               style={{ background: "var(--gradient-gold)", filter: "blur(60px)" }} />
          <div className="relative">
            <div className="flex items-end gap-1">
              <SGLogo size="lg" />
            </div>
            <div className="text-2xl tracking-[0.25em] text-primary font-semibold mt-1">
              AUCTION
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-tight">
              Bid. Win. Save.
              <span className="block text-primary italic font-serif">
                Extraordinary Deals.
              </span>
            </h1>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              SG Auction connects businesses with millions of smart buyers through
              real-time auctions, AI pricing, and global opportunities.
            </p>

            <div className="grid grid-cols-4 gap-2 mt-6">
              {[
                [Sparkles, "Real-Time", "Auctions"],
                [Cpu, "AI Pricing", "Engine"],
                [ShieldCheck, "Secure", "Payments"],
                [Globe, "Global", "Marketplace"],
              ].map(([Icon, l1, l2]: any, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center shadow-[var(--shadow-glow-blue)]">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <p className="mt-2 text-[10px] leading-tight text-foreground/80">
                    {l1}<br />{l2}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-primary/40 px-4 py-3 bg-primary/5 text-primary text-sm font-medium flex items-start gap-2">
              <ArrowRight size={14} className="mt-1 shrink-0" />
              <span>Every Empty Seat, Room, Table, Product, and Opportunity Becomes Revenue.</span>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs tracking-widest text-muted-foreground">AUCTION TYPES</p>
                <button className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                  View all <ArrowRight size={12} />
                </button>
              </div>
              <div className="space-y-2">
                {[
                  [Gavel, "Standard Auction", "Highest bid wins the item.", "text-accent"],
                  [Repeat, "Reverse Auction", "Businesses compete for you.", "text-pink-400"],
                  [Zap, "Flash Auction", "Short time. Big savings.", "text-primary"],
                  [Brain, "AI Smart Auction", "AI negotiates the best deal.", "text-success"],
                ].map(([Icon, title, desc, color]: any, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-secondary/40 border border-border p-3 flex gap-3 items-center hover:border-primary/40 transition"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-background/60 border border-border flex items-center justify-center ${color}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{title}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER */}
        <section className="space-y-5 min-w-0">
          {/* TOP NAV */}
          <nav className="rounded-2xl bg-card/60 border border-border backdrop-blur-xl px-4 py-3 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SGLogo size="md" />
              <span className="text-sm font-bold tracking-[0.2em] text-primary">AUCTION</span>
            </div>
            <div className="flex-1 min-w-[200px] flex items-center gap-2 bg-secondary/60 rounded-xl px-4 py-2 border border-border">
              <Search size={16} className="text-muted-foreground" />
              <input
                placeholder="Search flights, hotels, experiences, products..."
                className="bg-transparent outline-none w-full text-sm placeholder:text-muted-foreground"
              />
            </div>
            <div className="hidden lg:flex items-center gap-5 text-sm text-foreground/80">
              <a className="hover:text-primary cursor-pointer">Auctions</a>
              <a className="hover:text-primary cursor-pointer">Deals</a>
              <a className="hover:text-primary cursor-pointer">Categories</a>
              <a className="hover:text-primary cursor-pointer">AI Assistant</a>
            </div>
            <button className="text-muted-foreground hover:text-primary"><Heart size={18} /></button>
            <button className="relative text-muted-foreground hover:text-primary">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 bg-destructive text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">3</span>
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-border">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/40" />
              <div className="hidden md:block">
                <p className="text-sm font-bold leading-tight">Sara J.</p>
                <p className="text-[10px] text-primary leading-tight">Premium</p>
              </div>
              <ChevronDown size={14} />
            </div>
          </nav>

          {/* HERO */}
          <div className="rounded-3xl overflow-hidden border border-primary/30 shadow-[var(--shadow-luxury)] relative">
            <div className="relative h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
                alt="Luxury beach resort at sunset"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
              <div className="absolute left-8 top-7">
                <span className="bg-accent px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  LAST MINUTE DEALS
                </span>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                  Luxury Stays<br />Up to 80% Off
                </h2>
                <p className="mt-2 text-foreground/80 text-sm">Hotels, Resorts & Experiences</p>
                <button className="mt-5 px-5 py-2.5 rounded-xl bg-background/80 border border-border text-foreground text-sm font-bold inline-flex items-center gap-2 hover:bg-background">
                  Explore Auctions <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* LIVE AUCTIONS */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Live Auctions</h2>
            <button className="text-sm text-primary inline-flex items-center gap-1 hover:underline">
              View all <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {auctions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden bg-card/80 border border-border hover:border-primary/50 transition shadow-xl flex flex-col"
                >
                  <div className="relative h-32">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <span className="absolute left-3 bottom-3 text-[10px] bg-accent px-2 py-1 rounded-md font-bold tracking-wider inline-flex items-center gap-1">
                      <Icon size={11} /> {item.type}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base font-bold">{item.title}</h3>
                    <div className="grid grid-cols-2 gap-y-3 mt-3 text-xs">
                      <div>
                        <p className="text-muted-foreground">Normal Price</p>
                        <p className="font-semibold">{item.normal}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">Starting Bid</p>
                        <p className="text-success font-semibold">{item.start}</p>
                      </div>
                      <div>
                        <p className="text-timer text-lg font-bold font-mono leading-none">{item.time}</p>
                        <p className="text-muted-foreground mt-1">Time Left</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">Highest Bid</p>
                        <p className="text-primary font-bold text-base">€{item.highest}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      {item.bids} Bids
                    </p>
                    <button
                      onClick={() => setSelected(item.id)}
                      className="mt-3 w-full py-2.5 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-sm"
                    >
                      Place Bid
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI ENGINE + BUSINESS DASHBOARD */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
            {/* AI Engine */}
            <div className="rounded-2xl border border-accent/30 bg-card/80 p-5 relative overflow-hidden">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-accent uppercase tracking-wider flex items-center gap-2">
                    <Brain size={16} /> SG AI Pricing Engine
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 max-w-[280px]">
                    Our AI analyzes market data in real-time to recommend the perfect pricing strategy.
                  </p>
                </div>
                <div className="relative shrink-0">
                  <div className="w-24 h-24 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shadow-[var(--shadow-glow-blue)]">
                    <Brain className="text-accent" size={40} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {[
                  ["Demand", "High", "text-success"],
                  ["Competition", "Medium", "text-timer"],
                  ["Seasonality", "High", "text-success"],
                  ["Trend", "Rising", "text-success"],
                ].map(([k, v, c]: any) => (
                  <div key={k} className="rounded-lg bg-secondary/50 border border-border px-3 py-2 flex items-center gap-2">
                    <Activity size={14} className={c} />
                    <div>
                      <p className="text-[10px] text-muted-foreground leading-none">{k}</p>
                      <p className={`text-xs font-bold ${c}`}>{v}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-border bg-secondary/30 p-3">
                <p className="text-[10px] tracking-widest text-muted-foreground">AI RECOMMENDATION</p>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  <div>
                    <p className="text-[10px] text-muted-foreground">Starting Bid</p>
                    <p className="font-bold">€300</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">Reserve Price</p>
                    <p className="font-bold">€650</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">Buy Now Price</p>
                    <p className="font-bold text-primary">€780</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Dashboard */}
            <div className="rounded-2xl border border-primary/30 bg-card/80 p-5">
              <p className="text-[10px] tracking-widest text-muted-foreground">BUSINESS DASHBOARD</p>
              <p className="mt-3 text-xs text-muted-foreground">Revenue Today</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">€12,450</p>
                <span className="text-success text-xs font-bold">+18.2%</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div>
                  <p className="text-[10px] text-muted-foreground">Active Auctions</p>
                  <p className="text-xl font-bold">24</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">Conversion Rate</p>
                  <p className="text-xl font-bold text-success">32.5%</p>
                </div>
              </div>
              <button className="mt-5 w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm inline-flex items-center justify-center gap-2">
                Manage Auctions <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* TRUST STRIP */}
          <div className="rounded-2xl border border-border bg-card/60 p-5 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              [Globe, "Global Reach", "Connect with millions of buyers worldwide."],
              [ShieldCheck, "Secure & Safe", "Escrow payments and fraud protection."],
              [Cpu, "AI-Powered", "Smart pricing and automated bidding."],
              [Wifi, "Real-Time", "Live bidding and instant notifications."],
              [TrendingUp, "Maximize Revenue", "Turn unsold inventory into profit."],
            ].map(([Icon, t, d]: any, i) => (
              <div key={i} className="text-left">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center shadow-[var(--shadow-glow-blue)]">
                  <Icon className="text-accent" size={18} />
                </div>
                <p className="mt-3 font-bold text-sm">{t}</p>
                <p className="text-xs text-muted-foreground mt-1">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RIGHT */}
        <aside className="space-y-5">
          {/* Live stats */}
          <div className="rounded-2xl border border-border bg-card/70 p-5">
            <div className="flex items-center justify-between">
              <p className="text-[10px] tracking-widest text-muted-foreground">LIVE AUCTIONS</p>
              <span className="text-destructive text-xs font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" /> 128
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4 text-center">
              {[
                [Plane, "Flights", 48],
                [Hotel, "Hotels", 32],
                [Briefcase, "Experiences", 21],
                [Watch, "Products", 27],
              ].map(([Icon, l, n]: any) => (
                <div key={l} className="rounded-lg bg-secondary/40 border border-border py-2">
                  <Icon size={16} className="mx-auto text-accent" />
                  <p className="text-[9px] text-muted-foreground mt-1">{l}</p>
                  <p className="font-bold text-sm">{n}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-[10px] tracking-widest text-muted-foreground">TOTAL SAVINGS TODAY</p>
              <p className="text-2xl font-bold mt-1">€2,453,789</p>
              <p className="text-success text-xs font-semibold">+24.6%</p>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="rounded-[2rem] border-[6px] border-foreground/20 bg-background p-4 shadow-2xl">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-2">
              <span>9:41</span>
              <span className="flex items-center gap-1">••• ●</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <SGLogo size="sm" /> <span className="text-[10px] tracking-widest text-primary">AUCTION</span>
              <Home size={14} className="text-muted-foreground" />
            </div>
            <button className="text-[10px] text-muted-foreground flex items-center gap-1 mb-2">
              <ArrowLeft size={10} /> Back to Auctions
            </button>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
                alt="Flight to Bangkok"
                className="h-32 w-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-destructive text-[9px] px-2 py-0.5 rounded font-bold">● LIVE</span>
            </div>
            <h3 className="mt-3 font-bold">Málaga → Bangkok</h3>
            <div className="grid grid-cols-2 gap-y-2 mt-2 text-[11px]">
              <div>
                <p className="text-muted-foreground">Normal Price</p>
                <p className="font-bold">€850</p>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground">Starting Bid</p>
                <p className="font-bold text-primary">€300</p>
              </div>
              <div>
                <p className="text-muted-foreground">Time Left</p>
                <p className="font-bold text-timer font-mono">04:12:45</p>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground">Highest Bid</p>
                <p className="font-bold text-primary">€425</p>
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> 23 Bids
            </p>
            <button className="mt-3 w-full py-2 rounded-xl bg-accent text-accent-foreground font-bold text-sm">
              Place Bid €450
            </button>
            <div className="mt-3 flex items-center justify-between rounded-lg bg-secondary/50 border border-border p-2">
              <div>
                <p className="text-[11px] font-semibold">Auto Bid</p>
                <p className="text-[9px] text-muted-foreground">Set max bid</p>
              </div>
              <div className="w-9 h-5 bg-accent rounded-full relative">
                <span className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white" />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between rounded-lg bg-secondary/50 border border-border p-2">
              <div>
                <p className="text-[11px] font-semibold">Max Bid Amount</p>
                <p className="text-[9px] text-muted-foreground">We'll bid automatically for you.</p>
              </div>
              <p className="text-primary font-bold text-sm">€500</p>
            </div>
            <div className="mt-3 flex justify-around text-muted-foreground text-[9px] pt-2 border-t border-border">
              <div className="flex flex-col items-center"><Home size={14} /><span>Home</span></div>
              <div className="flex flex-col items-center text-primary"><Gavel size={14} /><span>Auctions</span></div>
              <div className="flex flex-col items-center"><Sparkles size={14} /><span>Deals</span></div>
              <div className="flex flex-col items-center"><Heart size={14} /><span>Watchlist</span></div>
              <div className="flex flex-col items-center"><User size={14} /><span>Profile</span></div>
            </div>
          </div>

          {/* App download */}
          <div className="rounded-2xl border border-border bg-card/70 p-5">
            <p className="text-xs tracking-widest text-muted-foreground">DOWNLOAD THE SG APP</p>
            <p className="text-xs text-muted-foreground mt-1">Scan QR code to download</p>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-20 h-20 rounded-lg bg-foreground flex items-center justify-center">
                <QrCode className="text-background" size={56} />
              </div>
              <div className="space-y-2 flex-1">
                <button className="w-full bg-foreground text-background rounded-lg px-3 py-2 text-xs font-bold flex items-center gap-2">
                  <Apple size={16} /> <span>Download on the<br /><b>App Store</b></span>
                </button>
                <button className="w-full bg-foreground text-background rounded-lg px-3 py-2 text-xs font-bold flex items-center gap-2">
                  <Play size={16} /> <span>GET IT ON<br /><b>Google Play</b></span>
                </button>
              </div>
            </div>
          </div>

          {/* Premium */}
          <div className="rounded-2xl border border-primary/40 bg-card/80 p-5 shadow-[var(--shadow-luxury)]">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <Crown size={18} /> SG PREMIUM
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {["Early access to deals", "AI bidding assistant", "Exclusive auctions", "VIP customer support"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-foreground/85">{x}</span>
                </li>
              ))}
            </ul>
            <button className="mt-5 w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-bold">
              Upgrade Now
            </button>
          </div>
        </aside>
      </main>

      <footer className="text-center text-muted-foreground py-8 text-sm">
        Created by Robert Andersson — SG Ecosystem
      </footer>

      {/* Bid Dialog */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card border border-primary/40 rounded-3xl p-6 w-full max-w-md shadow-[var(--shadow-luxury)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold">Place Your Bid</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Enter an amount higher than the current highest bid.
            </p>
            <input
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder="Enter bid amount in €"
              type="number"
              autoFocus
              className="mt-5 w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary"
            />
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => placeBid(selected)}
                className="flex-1 py-3 bg-accent text-accent-foreground rounded-xl font-bold"
              >
                Confirm Bid
              </button>
              <button
                onClick={() => setSelected(null)}
                className="flex-1 py-3 bg-secondary text-foreground rounded-xl font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
