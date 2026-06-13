import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/layout/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SERVICES = {
  laser: [
    { name: "Laser Hair Removal", desc: "Face, body & ears, tailored sessions", price: "from £18" },
    { name: "Eyebrow Waxing", desc: "Perfectly shaped brows", price: "£12" },
    { name: "Brazilian/Hollywood Waxing", desc: "Smooth, long-lasting results", price: "POA" },
    { name: "Full Leg Waxing", desc: "Silky smooth from hip to toe", price: "POA" },
    { name: "Arm & Underarm Waxing", desc: "Quick and effective", price: "POA" },
    { name: "Threading: Eyebrows", desc: "Precise eyebrow shaping", price: "£10" },
    { name: "Threading: Facial", desc: "Upper lip, chin & more", price: "POA" },
  ],
  beauty: [
    { name: "Manicure with Gel Polish", desc: "Long-lasting colour & shine", price: "£35" },
    { name: "Pedicure", desc: "Relaxing foot treatment", price: "from £30" },
    { name: "Full Set Acrylic with Gel", desc: "Durable acrylic with gel finish", price: "£50" },
    { name: "Nail Art", desc: "3D, Ombre, Chrome, Cat Eye designs", price: "from £10" },
    { name: "Eyebrow & Eyelash Tinting", desc: "Define and enhance your features", price: "POA" },
    { name: "Lash Lift", desc: "Natural curl enhancement", price: "£25" },
    { name: "Eyelash Extensions", desc: "Volume and length", price: "POA" },
    { name: "Makeup", desc: "Full face glam", price: "from £30" },
    { name: "Brow Lamination", desc: "Fluffy, defined brows", price: "POA" },
  ],
  massage: [
    { name: "Deep Tissue Massage", desc: "Targets deep muscle tension", price: "from £45" },
    { name: "Aromatherapy Massage", desc: "Relaxing scented oil massage", price: "POA" },
    { name: "Reflexology", desc: "Pressure-point foot therapy", price: "POA" },
    { name: "Lymphatic Drainage", desc: "Detoxifying gentle massage", price: "POA" },
    { name: "Back, Neck & Shoulders", desc: "Relief for daily tension", price: "POA" },
    { name: "Head Massage", desc: "Scalp & tension release", price: "POA" },
    { name: "Ear Candling", desc: "Soothing ear therapy", price: "POA" },
  ]
};

function ServiceGrid({ items }: { items: typeof SERVICES.laser }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Card className="h-full flex flex-col border-border/50 shadow-sm hover:shadow-md transition-shadow hover:border-primary/20">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="font-serif text-xl leading-tight">{item.name}</CardTitle>
                <span className="font-semibold text-primary whitespace-nowrap">{item.price}</span>
              </div>
              <CardDescription className="text-sm mt-2">{item.desc}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-6">
              <Button asChild variant="outline" className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground">
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
        title="Beauty Services | Laser, Nails & Massage | Kael Beauty Centre"
        description="Explore our full range of services: laser hair removal from £18, gel manicures from £35, deep tissue massage from £45. Based in Earl's Court, London."
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
            From precision laser treatments to luxurious massages, explore our comprehensive menu designed to make you look and feel your absolute best.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <Tabs defaultValue="laser" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto flex flex-row flex-wrap h-auto bg-transparent border-b border-border rounded-none p-0 mb-8">
            <TabsTrigger 
              value="laser" 
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 text-base font-serif"
            >
              Laser & Hair Removal
            </TabsTrigger>
            <TabsTrigger 
              value="beauty" 
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 text-base font-serif"
            >
              Beauty & Nails
            </TabsTrigger>
            <TabsTrigger 
              value="massage" 
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 text-base font-serif"
            >
              Massage & Wellness
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="laser" className="outline-none">
            <ServiceGrid items={SERVICES.laser} />
          </TabsContent>
          
          <TabsContent value="beauty" className="outline-none">
            <ServiceGrid items={SERVICES.beauty} />
          </TabsContent>
          
          <TabsContent value="massage" className="outline-none">
            <ServiceGrid items={SERVICES.massage} />
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
}
