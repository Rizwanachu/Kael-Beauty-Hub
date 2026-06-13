import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/layout/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

type ServiceItem = {
  name: string;
  desc: string;
  price: string;
  duration: string;
};

const SERVICES: Record<string, ServiceItem[]> = {
  hair: [
    { name: "Dry Cut for Men", desc: "Classic men's dry cut", price: "£25", duration: "30 mins" },
    { name: "Ladies Wash and Cut", desc: "Wash and precision cut for ladies", price: "£45", duration: "45 mins" },
    { name: "Wash & Blow Dry (Short Hair)", desc: "Wash and blow dry for short hair", price: "£35", duration: "30 mins" },
    { name: "Wash Cut and Blow Dry (Medium Hair)", desc: "Full wash, cut and blow dry", price: "£45", duration: "30 mins" },
    { name: "Wash & Blow Dry (Long Hair)", desc: "Wash and blow dry for long hair", price: "£55", duration: "45 mins" },
  ],
  nails: [
    { name: "Manicure with Nail Polish", desc: "Classic manicure with nail polish finish", price: "£28", duration: "45 mins" },
    { name: "Manicure with Gel Polish", desc: "Long-lasting gel manicure", price: "£35", duration: "45 mins" },
    { name: "Female Manicure", desc: "Expert manicure tailored to you", price: "from £25", duration: "15–45 mins" },
    { name: "Shape and Shellac Polish", desc: "Shape and shellac finish", price: "£28", duration: "15 mins" },
    { name: "Full Set Acrylic with Gel Polish", desc: "Durable acrylic with long-lasting gel finish", price: "£50", duration: "1 hr 15 mins" },
    { name: "Full Set Builder Gel with Gel Polish", desc: "Builder gel set with gel polish overlay", price: "£55", duration: "1 hr" },
    { name: "Acrylic Overlay", desc: "Acrylic overlay on natural nails", price: "£45", duration: "45 mins" },
    { name: "Acrylic Infill", desc: "Infill for existing acrylic nails", price: "£35", duration: "45 mins" },
    { name: "Acrylic/Hard Gel Removal", desc: "Safe and gentle removal of acrylic or hard gel", price: "£15", duration: "30 mins" },
    { name: "Acrylic Removal + Re-apply", desc: "Remove and re-apply acrylic nails", price: "£60", duration: "1 hr 15 mins" },
    { name: "Gel Polish Removal", desc: "Gentle gel polish removal", price: "£12", duration: "30 mins" },
    { name: "Single Nail Repair", desc: "Repair of a single broken nail", price: "£7", duration: "15 mins" },
    { name: "Add Cat Eye Gel Polish", desc: "Mesmerising cat eye effect gel polish add-on", price: "£10", duration: "15 mins" },
    { name: "Add French Tip", desc: "Classic French tip add-on", price: "from £10", duration: "15–30 mins" },
    { name: "Add Chrome Powder", desc: "Stunning chrome mirror effect add-on", price: "£10", duration: "15 mins" },
    { name: "Add Ombre Nail Art", desc: "Gradient ombre nail art add-on", price: "£10", duration: "15 mins" },
    { name: "Advanced Nail Art (3D)", desc: "3D nail art designs and embellishments", price: "from £10", duration: "15–30 mins" },
    { name: "Pedicure with Nail Polish", desc: "Classic pedicure with nail polish", price: "£35", duration: "45 mins" },
    { name: "Pedicure with Gel Polish", desc: "Pedicure with long-lasting gel polish", price: "£40", duration: "45 mins" },
    { name: "Female Pedicure", desc: "Expert pedicure treatment", price: "£30", duration: "30 mins" },
    { name: "Acrylic Extensions Toes", desc: "Acrylic extensions for toes", price: "from £40", duration: "30–45 mins" },
  ],
  waxing: [
    { name: "Eyebrow Threading", desc: "Precise eyebrow shaping with thread", price: "£10", duration: "15 mins" },
    { name: "Eyebrow Shape Waxing", desc: "Perfectly shaped brows with wax", price: "£12", duration: "15 mins" },
    { name: "Upper Lip Waxing", desc: "Quick and smooth upper lip wax", price: "POA", duration: "15 mins" },
    { name: "Chin Waxing", desc: "Smooth chin wax treatment", price: "POA", duration: "15 mins" },
    { name: "Nose Waxing", desc: "Comfortable and quick nose wax", price: "POA", duration: "15 mins" },
    { name: "Side Face Area Waxing", desc: "Side face waxing for a clean look", price: "£12", duration: "15 mins" },
    { name: "Forehead Waxing", desc: "Clean forehead wax treatment", price: "POA", duration: "15 mins" },
    { name: "Underarms Waxing", desc: "Long-lasting underarm waxing", price: "from £19", duration: "15–30 mins" },
    { name: "Belly Line Waxing", desc: "Neat belly line waxing", price: "POA", duration: "15–30 mins" },
    { name: "Bikini Line Waxing", desc: "Neat and precise bikini line wax", price: "POA", duration: "15–30 mins" },
    { name: "Bikini Extended Waxing", desc: "Extended bikini wax treatment", price: "POA", duration: "30 mins" },
    { name: "Brazilian Waxing", desc: "Full Brazilian wax treatment", price: "POA", duration: "30 mins" },
    { name: "Hollywood Waxing", desc: "Complete Hollywood wax", price: "POA", duration: "30 mins" },
    { name: "Buttocks Waxing", desc: "Smooth buttocks wax", price: "POA", duration: "30 mins" },
    { name: "Lower Legs Waxing", desc: "Smooth lower leg waxing", price: "POA", duration: "30 mins" },
    { name: "Upper Legs Waxing", desc: "Upper leg waxing treatment", price: "POA", duration: "30 mins" },
    { name: "Half Legs Waxing", desc: "Half leg waxing, knee to ankle", price: "POA", duration: "30 mins" },
    { name: "Full Legs Waxing", desc: "Complete full leg waxing", price: "POA", duration: "30–45 mins" },
    { name: "Full Arms Waxing", desc: "Full arm waxing treatment", price: "POA", duration: "30 mins" },
    { name: "Back Waxing", desc: "Smooth back wax treatment", price: "POA", duration: "30 mins" },
    { name: "Full Back Waxing", desc: "Complete full back waxing", price: "POA", duration: "30–45 mins" },
    { name: "Chest Waxing (Male)", desc: "Smooth chest wax for men", price: "POA", duration: "30 mins" },
    { name: "Chest & Tummy Waxing (Male)", desc: "Chest and tummy wax for men", price: "POA", duration: "30–45 mins" },
    { name: "Back & Shoulder Waxing (Male)", desc: "Back and shoulder wax for men", price: "POA", duration: "30–45 mins" },
  ],
  laser: [
    { name: "Ears Laser (Female)", desc: "6 sessions from £150", price: "from £30", duration: "15 mins" },
    { name: "Ears Laser (Male)", desc: "6 sessions from £150", price: "from £30", duration: "15 mins" },
    { name: "Upper Lip Laser (Female)", desc: "6 sessions from £150", price: "from £30", duration: "30 mins" },
    { name: "Chin Laser (Female)", desc: "6 sessions from £100", price: "from £18", duration: "15 mins" },
    { name: "Side Face Laser (Female)", desc: "6 sessions from £220", price: "from £40", duration: "15 mins" },
    { name: "Underarms Laser (Female)", desc: "6 sessions from £280", price: "from £22", duration: "45 mins" },
    { name: "Stomach Laser (Female)", desc: "6 sessions from £325", price: "from £60", duration: "45 mins" },
    { name: "Bikini Line Laser (Female)", desc: "6 sessions from £140", price: "from £25", duration: "30 mins" },
    { name: "Hollywood Laser (Female)", desc: "6 sessions from £600", price: "from £120", duration: "30 mins" },
    { name: "Half Legs Laser (Female)", desc: "6 sessions from £400", price: "from £70", duration: "45 mins" },
    { name: "Full Legs Laser (Female)", desc: "6 sessions from £550", price: "from £110", duration: "30 mins" },
    { name: "Front Legs Laser (Female)", desc: "6 sessions from £600", price: "from £120", duration: "45 mins" },
    { name: "Back Laser (Female)", desc: "6 sessions from £250", price: "from £25", duration: "30 mins" },
    { name: "Back Laser (Male)", desc: "6 sessions from £250", price: "from £25", duration: "45 mins" },
    { name: "Chest Laser (Male)", desc: "6 sessions from £250", price: "from £65", duration: "30 mins" },
    { name: "Full Back & Front Laser (Male)", desc: "6 sessions from £600", price: "from £95", duration: "1 hr 45 mins" },
  ],
  massage: [
    { name: "Deep Tissue Massage", desc: "Targets deep muscle tension for lasting relief", price: "from £45", duration: "POA" },
    { name: "Aromatherapy Massage", desc: "Relaxing full-body scented oil massage", price: "POA", duration: "POA" },
    { name: "Reflexology", desc: "Therapeutic pressure-point foot therapy", price: "POA", duration: "POA" },
    { name: "Lymphatic Drainage", desc: "Gentle detoxifying massage", price: "POA", duration: "POA" },
    { name: "Back, Neck & Shoulders", desc: "Targeted relief for everyday tension", price: "POA", duration: "POA" },
    { name: "Head Massage", desc: "Scalp stimulation and tension release", price: "POA", duration: "POA" },
    { name: "Ear Candling", desc: "Soothing and holistic ear therapy", price: "POA", duration: "POA" },
  ],
};

const TAB_TRIGGER_CLASS =
  "flex-1 min-w-fit rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-sm md:text-base font-serif px-3";

function ServiceGrid({ items }: { items: ServiceItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04 }}
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
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <PageTransition>
      <SEO
        title="Beauty Services | Hair, Nails, Laser & Massage | Kael Beauty Centre"
        description="Browse our full menu: hair styling, nails from £7, waxing & threading, laser hair removal from £18, and massage. Earl's Court, London."
        path="/services"
      />

      <div className="bg-card py-20 border-b border-border/50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            From precision laser treatments to luxurious massages — explore our full menu and book online instantly.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <Tabs defaultValue="hair" className="w-full">
          <TabsList className="w-full mx-auto flex flex-row flex-wrap h-auto bg-transparent border-b border-border rounded-none p-0 mb-8 gap-0">
            <TabsTrigger value="hair" className={TAB_TRIGGER_CLASS}>Hair</TabsTrigger>
            <TabsTrigger value="nails" className={TAB_TRIGGER_CLASS}>Nails</TabsTrigger>
            <TabsTrigger value="waxing" className={TAB_TRIGGER_CLASS}>Waxing & Threading</TabsTrigger>
            <TabsTrigger value="laser" className={TAB_TRIGGER_CLASS}>Laser (Permanent)</TabsTrigger>
            <TabsTrigger value="massage" className={TAB_TRIGGER_CLASS}>Massage & Wellness</TabsTrigger>
          </TabsList>

          <TabsContent value="hair" className="outline-none">
            <ServiceGrid items={SERVICES.hair} />
          </TabsContent>

          <TabsContent value="nails" className="outline-none">
            <ServiceGrid items={SERVICES.nails} />
          </TabsContent>

          <TabsContent value="waxing" className="outline-none">
            <ServiceGrid items={SERVICES.waxing} />
          </TabsContent>

          <TabsContent value="laser" className="outline-none">
            <div className="mt-8 mb-6 p-4 bg-primary/5 border border-primary/15 rounded-xl text-sm text-muted-foreground">
              <strong className="text-foreground">Session packages available.</strong> Prices shown are per single session. Save with our 6-session packages — see details when booking.
            </div>
            <ServiceGrid items={SERVICES.laser} />
          </TabsContent>

          <TabsContent value="massage" className="outline-none">
            <ServiceGrid items={SERVICES.massage} />
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
}
