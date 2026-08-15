export type ServiceCategory = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  details: string[];
};

export const SERVICES: ServiceCategory[] = [
  {
    id: "tv-display",
    title: "TV & Display",
    subtitle: "OLED, QLED, Smart TVs, Monitors",
    icon: "Tv",
    details: [
      "Screen & panel diagnostics",
      "Backlight & power board repair",
      "Smart TV software fixes",
      "Wall-mount & calibration",
    ],
  },
  {
    id: "audio-sound",
    title: "Audio & Sound",
    subtitle: "Soundbars, AV Receivers",
    icon: "Speaker",
    details: [
      "Amplifier & receiver repair",
      "Speaker driver replacement",
      "Bluetooth & connectivity fixes",
      "Soundbar diagnostics",
    ],
  },
  {
    id: "home-appliances",
    title: "Home Appliances",
    subtitle: "Microwave Ovens",
    icon: "Refrigerator",
    details: [
      "Heating element repair",
      "Control panel & timer fixes",
      "Door seal & latch replacement",
      "Safety & performance testing",
    ],
  },
  {
    id: "cleaning-appliances",
    title: "Cleaning Appliances",
    subtitle: "Vacuum Cleaners, Air Purifiers",
    icon: "Wind",
    details: [
      "Motor & suction repair",
      "Filter replacement & servicing",
      "Battery & charging fixes",
      "Air purifier sensor calibration",
    ],
  },
  {
    id: "personal-appliances",
    title: "Personal Appliances",
    subtitle: "Hair Dryers, Grooming Kits",
    icon: "Wind",
    details: [
      "Heating element repair",
      "Motor & switch replacement",
      "Cord & plug safety checks",
      "Battery servicing for cordless kits",
    ],
  },
  {
    id: "fans-cooling",
    title: "Fans & Cooling",
    subtitle: "Tower Fans, Ceiling Fans",
    icon: "Fan",
    details: [
      "Motor & bearing repair",
      "Blade balancing & replacement",
      "Speed control & switch fixes",
      "Remote & sensor troubleshooting",
    ],
  },
  {
    id: "ophthalmic-equipment",
    title: "Ophthalmic Equipment",
    subtitle: "Autorefractor",
    icon: "Eye",
    details: [
      "Precision optical calibration",
      "Sensor & lens diagnostics",
      "Software & firmware updates",
      "Preventive maintenance checks",
    ],
  },
  {
    id: "printed-circuit-board",
    title: "Printed Circuit Board",
    subtitle: "Consumer Electronics PCB",
    icon: "CircuitBoard",
    details: [
      "Component-level diagnostics",
      "Trace & solder repair",
      "Chip-level replacement",
      "Board re-flow & testing",
    ],
  },
  {
    id: "multi-brand",
    title: "Multi Brand General Services",
    subtitle: "Home Appliances",
    icon: "Settings",
    details: [
      "Cross-brand diagnostics",
      "Genuine & compatible parts",
      "On-site & workshop repair",
      "Warranty-backed service",
    ],
  },
];
