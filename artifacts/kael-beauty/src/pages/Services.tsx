import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/layout/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Search, X } from "lucide-react";
import { useState, useMemo } from "react";

type ServiceItem = {
  kind?: "standard";
  name: string;
  desc: string;
  price: string;
  duration: string;
};

type LaserItem = {
  kind: "laser";
  name: string;
  gender: "Female" | "Male";
  price1: string;
  price6: string;
  duration: string;
};

type AnyItem = ServiceItem | LaserItem;

const SERVICES: Record<string, AnyItem[]> = {
  hair: [
    { name: "Dry Cut for Men",                       desc: "Classic men's dry cut",                             price: "£25",  duration: "30 mins" },
    { name: "Ladies Wash and Cut",                    desc: "Wash and precision cut for ladies",                 price: "£45",  duration: "45 mins" },
    { name: "Wash & Blow Dry (Short Hair)",           desc: "Wash and blow dry for short hair",                  price: "£35",  duration: "30 mins" },
    { name: "Wash Cut and Blow Dry (Medium Hair)",    desc: "Full wash, cut and blow dry",                       price: "£45",  duration: "30 mins" },
    { name: "Wash & Blow Dry (Long Hair)",            desc: "Wash and blow dry for long hair",                   price: "£55",  duration: "45 mins" },
  ] as ServiceItem[],

  nails: [
    { name: "Manicure with Nail Polish",              desc: "Classic manicure with nail polish",                 price: "£28",  duration: "45 mins" },
    { name: "Manicure with Gel Polish",               desc: "Long-lasting gel manicure",                         price: "£35",  duration: "45 mins" },
    { name: "Female Manicure",                        desc: "Expert manicure by our therapists",                 price: "£25",  duration: "15–45 mins" },
    { name: "Shape and Shellac Polish",               desc: "Nail shape and shellac finish",                     price: "£28",  duration: "15 mins" },
    { name: "Full Set Acrylic with Gel Polish",       desc: "Durable acrylic with gel polish overlay",           price: "£50",  duration: "1 hr 15 mins" },
    { name: "Full Set Builder Gel with Gel Polish",   desc: "Builder gel set with gel polish finish",            price: "£55",  duration: "1 hr" },
    { name: "Acrylic Overlay",                        desc: "Acrylic overlay on natural nails",                  price: "£45",  duration: "45 mins" },
    { name: "Acrylic Infill",                         desc: "Infill for existing acrylic nails",                 price: "£35",  duration: "45 mins" },
    { name: "Acrylic / Hard Gel Removal",             desc: "Safe removal of acrylic or hard gel",               price: "£15",  duration: "30 mins" },
    { name: "Acrylic Removal + Re-apply",             desc: "Remove and re-apply acrylic nails",                 price: "£60",  duration: "1 hr 15 mins" },
    { name: "Gel Polish Removal",                     desc: "Gentle gel polish removal",                         price: "£12",  duration: "30 mins" },
    { name: "Single Nail Repair",                     desc: "Repair of a single broken nail",                    price: "£7",   duration: "15 mins" },
    { name: "Add Cat Eye Gel Polish",                 desc: "Cat eye effect gel polish add-on",                  price: "£10",  duration: "15 mins" },
    { name: "Add French Tip",                         desc: "Classic French tip add-on",                         price: "£10",  duration: "15–30 mins" },
    { name: "Add Chrome Powder",                      desc: "Chrome mirror effect add-on",                       price: "£10",  duration: "15 mins" },
    { name: "Add Ombre Nail Art",                     desc: "Gradient ombre nail art add-on",                    price: "£10",  duration: "15 mins" },
    { name: "Advanced Nail Art (3D)",                 desc: "3D nail art — 15 mins or 30 mins",                  price: "£10 / £25", duration: "15–30 mins" },
    { name: "Pedicure with Nail Polish",              desc: "Classic pedicure with nail polish",                 price: "£35",  duration: "45 mins" },
    { name: "Pedicure with Gel Polish",               desc: "Pedicure with long-lasting gel polish",             price: "£40",  duration: "45 mins" },
    { name: "Female Pedicure",                        desc: "Expert pedicure treatment",                         price: "£30",  duration: "30 mins" },
    { name: "Acrylic Extensions (Toes)",              desc: "Acrylic extensions for toes",                       price: "£40",  duration: "30–45 mins" },
    { name: "Express Facial",                         desc: "Quick revitalising facial treatment",               price: "£40",  duration: "45–60 mins" },
  ] as ServiceItem[],

  waxing: [
    { name: "Eyebrow Threading",                     desc: "Precise eyebrow shaping with thread",               price: "£10",  duration: "15 mins" },
    { name: "Eyebrow Shape Waxing",                  desc: "Perfectly shaped brows with wax",                   price: "£12",  duration: "15 mins" },
    { name: "Upper Lip Waxing",                      desc: "Quick and smooth upper lip wax",                    price: "£10",  duration: "15 mins" },
    { name: "Chin Waxing",                           desc: "Smooth chin wax treatment",                         price: "£10",  duration: "15 mins" },
    { name: "Nose Waxing",                           desc: "Comfortable and quick nose wax",                    price: "£10",  duration: "15 mins" },
    { name: "Side Face Area Waxing",                 desc: "Side face wax for a clean finish",                  price: "£12",  duration: "15 mins" },
    { name: "Forehead Waxing",                       desc: "Clean and smooth forehead wax",                     price: "£10",  duration: "15 mins" },
    { name: "Underarms Waxing",                      desc: "Long-lasting underarm waxing",                      price: "£19",  duration: "15–30 mins" },
    { name: "Belly Line Waxing",                     desc: "Neat belly line waxing",                            price: "£19",  duration: "15–30 mins" },
    { name: "Front Waxing (Female)",                 desc: "Front body waxing treatment",                       price: "£30",  duration: "30–45 mins" },
    { name: "Bikini Waxing",                         desc: "Classic bikini wax",                                price: "£29",  duration: "30 mins" },
    { name: "Bikini Extended Waxing",                desc: "Extended bikini wax treatment",                     price: "£29",  duration: "30 mins" },
    { name: "Bikini Line Waxing",                    desc: "Neat and precise bikini line wax",                  price: "£29",  duration: "15–30 mins" },
    { name: "Brazilian Waxing",                      desc: "Full Brazilian wax treatment",                      price: "£40",  duration: "30 mins" },
    { name: "Hollywood Waxing",                      desc: "Complete Hollywood wax",                            price: "£40",  duration: "30 mins" },
    { name: "Lower Legs Waxing",                     desc: "Smooth lower leg waxing",                           price: "£25",  duration: "30 mins" },
    { name: "Upper Legs Waxing",                     desc: "Upper leg waxing treatment",                        price: "£25",  duration: "30 mins" },
    { name: "Half Legs Waxing",                      desc: "Half leg waxing, knee to ankle",                    price: "£25",  duration: "30 mins" },
    { name: "Full Legs Waxing",                      desc: "Complete full leg waxing",                          price: "£55",  duration: "30–45 mins" },
    { name: "Full Arms Waxing",                      desc: "Full arm waxing treatment",                         price: "£29",  duration: "30 mins" },
    { name: "Buttocks Waxing",                       desc: "Smooth buttocks wax",                              price: "£25",  duration: "30 mins" },
    { name: "Back Waxing",                           desc: "Back wax treatment",                                price: "£29",  duration: "30 mins" },
    { name: "Full Back Waxing",                      desc: "Complete full back waxing",                         price: "£29",  duration: "30–45 mins" },
    { name: "Chest Waxing (Male)",                   desc: "Smooth chest wax for men",                          price: "£38",  duration: "30 mins" },
    { name: "Chest & Tummy Waxing (Male)",           desc: "Chest and tummy wax for men",                      price: "£40",  duration: "30–45 mins" },
    { name: "Back & Shoulder Waxing (Male)",         desc: "Back and shoulder wax for men",                     price: "£29",  duration: "30–45 mins" },
  ] as ServiceItem[],

  laser: [
    // Female
    { kind: "laser", name: "Ears Laser",              gender: "Female", price1: "£30",  price6: "£150",   duration: "15 mins" },
    { kind: "laser", name: "Upper Lip Laser",         gender: "Female", price1: "£30",  price6: "£150",   duration: "30 mins" },
    { kind: "laser", name: "Chin Laser",              gender: "Female", price1: "£18",  price6: "£100",   duration: "15 mins" },
    { kind: "laser", name: "Forehead Laser",          gender: "Female", price1: "£30",  price6: "£130",   duration: "15 mins" },
    { kind: "laser", name: "Side Face Laser",         gender: "Female", price1: "£40",  price6: "£220",   duration: "15 mins" },
    { kind: "laser", name: "Full Face Laser",         gender: "Female", price1: "£100", price6: "£500",   duration: "45 mins" },
    { kind: "laser", name: "Underarms Laser",         gender: "Female", price1: "£22",  price6: "£280",   duration: "45 mins" },
    { kind: "laser", name: "Stomach Laser",           gender: "Female", price1: "£60",  price6: "£325",   duration: "45 mins" },
    { kind: "laser", name: "Belly Line Laser",        gender: "Female", price1: "£15",  price6: "£75",    duration: "15 mins" },
    { kind: "laser", name: "Bikini Line Laser",       gender: "Female", price1: "£25",  price6: "£140",   duration: "30 mins" },
    { kind: "laser", name: "Brazilian Laser",         gender: "Female", price1: "£120", price6: "£600",   duration: "30 mins" },
    { kind: "laser", name: "Hollywood Laser",         gender: "Female", price1: "£120", price6: "£600",   duration: "30 mins" },
    { kind: "laser", name: "Half Arm Laser",          gender: "Female", price1: "£40",  price6: "£220",   duration: "30 mins" },
    { kind: "laser", name: "Full Arm Laser",          gender: "Female", price1: "£70",  price6: "£400",   duration: "45 mins" },
    { kind: "laser", name: "Half Legs Laser",         gender: "Female", price1: "£70",  price6: "£400",   duration: "45 mins" },
    { kind: "laser", name: "Full Legs Laser",         gender: "Female", price1: "£110", price6: "£550",   duration: "30 mins" },
    { kind: "laser", name: "Front Legs Laser",        gender: "Female", price1: "£120", price6: "£600",   duration: "45 mins" },
    { kind: "laser", name: "Back Laser",              gender: "Female", price1: "£25",  price6: "£250",   duration: "30 mins" },
    { kind: "laser", name: "Full Body Laser",         gender: "Female", price1: "£440", price6: "£2,400", duration: "1 hr 30 mins" },
    // Male
    { kind: "laser", name: "Ears Laser",              gender: "Male",   price1: "£30",  price6: "£150",   duration: "15 mins" },
    { kind: "laser", name: "Back Laser",              gender: "Male",   price1: "£25",  price6: "£250",   duration: "45 mins" },
    { kind: "laser", name: "Chest Laser",             gender: "Male",   price1: "£65",  price6: "£250",   duration: "30 mins" },
    { kind: "laser", name: "Full Back & Front Laser", gender: "Male",   price1: "£95",  price6: "£600",   duration: "1 hr 45 mins" },
  ] as LaserItem[],

  massage: [
    { name: "Deep Tissue Massage",    desc: "Targets deep muscle tension for lasting relief",    price: "£45",  duration: "POA" },
    { name: "Aromatherapy Massage",   desc: "Relaxing full-body scented oil massage",            price: "POA",  duration: "POA" },
    { name: "Reflexology",            desc: "Therapeutic pressure-point foot therapy",           price: "POA",  duration: "POA" },
    { name: "Lymphatic Drainage",     desc: "Gentle detoxifying massage",                        price: "POA",  duration: "POA" },
    { name: "Back, Neck & Shoulders", desc: "Targeted relief for everyday tension",              price: "POA",  duration: "POA" },
    { name: "Head Massage",           desc: "Scalp stimulation and tension release",             price: "POA",  duration: "POA" },
    { name: "Ear Candling",           desc: "Soothing and holistic ear therapy",                 price: "POA",  duration: "POA" },
  ] as ServiceItem[],
};

const PRICE_FILTERS = [
  { label: "All",       key: "all" },
  { label: "Under £25", key: "under25" },
  { label: "£25 – £50", key: "25to50" },
  { label: "Over £50",  key: "over50" },
  { label: "POA",       key: "poa" },
];

function parseNum(price: string): number {
  const match = price.match(/£(\d+)/);
  return match ? parseInt(match[1]) : -1;
}

function matchesPrice(item: AnyItem, filter: string): boolean {
  if (filter === "all") return true;
  const val = item.kind === "laser" ? parseNum(item.price1) : parseNum((item as ServiceItem).price);
  const raw = item.kind === "laser" ? item.price1 : (item as ServiceItem).price;
  if (filter === "poa") return raw === "POA";
  if (val === -1) return false;
  if (filter === "under25") return val < 25;
  if (filter === "25to50") return val >= 25 && val <= 50;
  if (filter === "over50") return val > 50;
  return true;
}

function matchesSearch(item: AnyItem, q: string): boolean {
  const lower = q.toLowerCase();
  if (item.kind === "laser") {
    return item.name.toLowerCase().includes(lower) || item.gender.toLowerCase().includes(lower);
  }
  return (item as ServiceItem).name.toLowerCase().includes(lower) ||
    (item as ServiceItem).desc.toLowerCase().includes(lower);
}

const TAB_CLASS =
  "flex-1 min-w-fit rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-sm md:text-base font-serif px-3";

function StandardCard({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <motion.div
      key={item.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: Math.min(index * 0.04, 0.4) }}
    >
      <Card className="h-full flex flex-col border-border/50 shadow-sm hover:shadow-md transition-shadow hover:border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-3">
            <CardTitle className="font-serif text-lg leading-tight">{item.name}</CardTitle>
            <span className="font-semibold text-primary whitespace-nowrap text-sm mt-0.5">{item.price}</span>
          </div>
          <CardDescription className="text-sm mt-1">{item.desc}</CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          {item.duration !== "POA" && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>{item.duration}</span>
            </div>
          )}
        </CardContent>
        <CardFooter className="mt-auto pt-5">
          <Button asChild variant="outline" className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground text-sm">
            <a href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function LaserCard({ item, index }: { item: LaserItem; index: number }) {
  const isFemale = item.gender === "Female";
  return (
    <motion.div
      key={`${item.name}-${item.gender}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: Math.min(index * 0.04, 0.4) }}
    >
      <Card className="h-full flex flex-col border-border/50 shadow-sm hover:shadow-md transition-shadow hover:border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="font-serif text-lg leading-tight">{item.name}</CardTitle>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
              isFemale ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"
            }`}>
              {item.gender}
            </span>
          </div>
        </CardHeader>
        <CardContent className="pb-2 space-y-3">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-[#f0eeeb] border border-[#e0dbd5] rounded-xl p-3 text-center">
              <div className="text-xs text-muted-foreground mb-1 font-medium">1 Session</div>
              <div className="font-bold text-primary text-xl">{item.price1}</div>
            </div>
            <div className="bg-[#e8e4df] border border-[#d0cbc4] rounded-xl p-3 text-center">
              <div className="text-xs text-muted-foreground mb-1 font-medium">6 Sessions</div>
              <div className="font-bold text-primary text-xl">{item.price6}</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>{item.duration} per session</span>
          </div>
        </CardContent>
        <CardFooter className="mt-auto pt-3">
          <Button asChild variant="outline" className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground text-sm">
            <a href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function ServiceGrid({ items, gridClass }: { items: AnyItem[]; gridClass?: string }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <Search className="w-10 h-10 mx-auto mb-4 opacity-30" />
        <p className="text-lg font-medium">No services found</p>
        <p className="text-sm mt-1">Try adjusting your search or filter.</p>
      </div>
    );
  }
  return (
    <div className={`grid gap-6 pt-6 ${gridClass ?? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
      <AnimatePresence>
        {items.map((item, index) =>
          item.kind === "laser"
            ? <LaserCard key={`${item.name}-${item.gender}`} item={item} index={index} />
            : <StandardCard key={(item as ServiceItem).name} item={item as ServiceItem} index={index} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter]  = useState("all");
  const isSearching = searchQuery.trim().length > 0;

  const filtered = useMemo(() => {
    const f = (items: AnyItem[]) =>
      items.filter((item) => matchesSearch(item, searchQuery) && matchesPrice(item, priceFilter));
    return {
      hair:    f(SERVICES.hair),
      nails:   f(SERVICES.nails),
      waxing:  f(SERVICES.waxing),
      laser:   f(SERVICES.laser),
      massage: f(SERVICES.massage),
    };
  }, [searchQuery, priceFilter]);

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    return Object.values(SERVICES).flat().filter(
      (item) => matchesSearch(item, searchQuery) && matchesPrice(item, priceFilter)
    );
  }, [searchQuery, priceFilter, isSearching]);

  const badgeFor = (key: keyof typeof SERVICES) => {
    const original = SERVICES[key].length;
    const shown    = filtered[key].length;
    return shown < original ? (
      <span className="ml-1.5 text-xs bg-[#dedad4] text-[#1b1e22] rounded-full px-1.5 py-0.5">{shown}</span>
    ) : null;
  };

  return (
    <PageTransition>
      <SEO
        title="Beauty Services | Hair, Nails, Laser & Massage | Kael Beauty Centre"
        description="Browse our full menu: hair styling, nails from £7, waxing & threading, laser hair removal from £18, and massage. Earl's Court, London."
        path="/services"
      />

      <div className="bg-card py-20 border-b border-border/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground">
            From precision laser treatments to luxurious massages — explore our full menu and book online instantly.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Conversion banner */}
        <div className="mb-8 rounded-2xl bg-[#f5f2ee] border border-[#ddd9d3] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">Ready to book a service?</p>
            <p className="text-sm text-muted-foreground">Instant online booking — no waiting, no phone tag.</p>
          </div>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/85 rounded-full px-7 shrink-0">
            <a href="https://www.treatwell.co.uk/place/kael-beauty-centre-earl-s-court-road/" target="_blank" rel="noopener noreferrer">
              Book on Treatwell
            </a>
          </Button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search services…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-9 bg-background border-border/60 focus-visible:ring-primary/30"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {PRICE_FILTERS.map((f) => (
              <button key={f.key} onClick={() => setPriceFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  priceFilter === f.key
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background border-border/60 text-foreground hover:border-[#c9c4be] hover:bg-[#f0eeec]"
                }`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        {isSearching ? (
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for{" "}
              <span className="font-medium text-foreground">"{searchQuery}"</span>
            </p>
            <ServiceGrid items={searchResults} />
          </div>
        ) : (
          /* Tabbed View */
          <Tabs defaultValue="hair" className="w-full">
            <TabsList className="w-full mx-auto flex flex-row flex-wrap h-auto bg-transparent border-b border-border rounded-none p-0 mb-2 gap-0">
              <TabsTrigger value="hair"    className={TAB_CLASS}>Hair{badgeFor("hair")}</TabsTrigger>
              <TabsTrigger value="nails"   className={TAB_CLASS}>Nails{badgeFor("nails")}</TabsTrigger>
              <TabsTrigger value="waxing"  className={TAB_CLASS}>Waxing & Threading{badgeFor("waxing")}</TabsTrigger>
              <TabsTrigger value="laser"   className={TAB_CLASS}>Laser (Permanent){badgeFor("laser")}</TabsTrigger>
              <TabsTrigger value="massage" className={TAB_CLASS}>Massage & Wellness{badgeFor("massage")}</TabsTrigger>
            </TabsList>

            <TabsContent value="hair"    className="outline-none"><ServiceGrid items={filtered.hair} /></TabsContent>
            <TabsContent value="nails"   className="outline-none"><ServiceGrid items={filtered.nails} /></TabsContent>
            <TabsContent value="waxing"  className="outline-none"><ServiceGrid items={filtered.waxing} /></TabsContent>
            <TabsContent value="laser"   className="outline-none">
              <div className="mt-4 mb-2 p-4 bg-[#f5f2ee] border border-[#ddd9d3] rounded-xl text-sm text-muted-foreground">
                <strong className="text-foreground">Session packages available.</strong> Book a single session or save with our 6-session packages.
              </div>
              <ServiceGrid items={filtered.laser} gridClass="grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" />
            </TabsContent>
            <TabsContent value="massage" className="outline-none"><ServiceGrid items={filtered.massage} /></TabsContent>
          </Tabs>
        )}
      </div>
    </PageTransition>
  );
}
