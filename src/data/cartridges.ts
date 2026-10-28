/**
 * SAMPLE CARTRIDGE CATALOGUE
 * --------------------------
 * These ten common inkjet, laser and toner cartridges are examples used to
 * demonstrate the finder. They are NOT a confirmed stock list.
 *
 * Before launch:
 *  - check every printer model and cartridge code;
 *  - set `priceFrom` to a number (e.g. 249) to show "Starting from ₹249";
 *  - leave a price as `null` to show "Price on request";
 *  - set `refillAvailable` to false for cartridges that are new-only.
 *
 * The website labels this list as sample data for visitors as well.
 */

export type CartridgeType = "ink" | "toner";

export type Cartridge = {
  id: string;
  brand: string;
  name: string;
  code: string;
  type: CartridgeType;
  printerModels: string[];
  refillAvailable: boolean;
  /** TODO: replace null with a starting price in rupees, e.g. 249. */
  priceFrom: number | null;
};

export const CARTRIDGE_CATALOGUE_IS_SAMPLE = true;

/** A few friendly queries shown as one-tap examples under the search box. */
export const sampleSearches = ["HP 1005", "Canon G2012", "Brother TN-2365"];

export const cartridges: Cartridge[] = [
  {
    id: "hp-12a",
    brand: "HP",
    name: "HP 12A Black Toner",
    code: "Q2612A",
    type: "toner",
    printerModels: [
      "HP LaserJet 1005",
      "HP LaserJet 1010",
      "HP LaserJet 1018",
      "HP LaserJet 1020",
      "HP LaserJet M1005",
    ],
    refillAvailable: true,
    priceFrom: null,
  },
  {
    id: "hp-88a",
    brand: "HP",
    name: "HP 88A Black Toner",
    code: "CC388A",
    type: "toner",
    printerModels: [
      "HP LaserJet P1007",
      "HP LaserJet P1008",
      "HP LaserJet P1102",
      "HP LaserJet M1136",
      "HP LaserJet M1213",
    ],
    refillAvailable: true,
    priceFrom: null,
  },
  {
    id: "hp-67",
    brand: "HP",
    name: "HP 67 Tri-colour Ink",
    code: "3YM55AA",
    type: "ink",
    printerModels: [
      "HP DeskJet 2320",
      "HP DeskJet 2720",
      "HP DeskJet 2723",
      "HP Envy 6020",
      "HP Envy 6022",
    ],
    refillAvailable: true,
    priceFrom: null,
  },
  {
    id: "canon-gi-71",
    brand: "Canon",
    name: "Canon GI-71 Ink Bottle",
    code: "GI-71",
    type: "ink",
    printerModels: [
      "Canon PIXMA G1010",
      "Canon PIXMA G2010",
      "Canon PIXMA G2012",
      "Canon PIXMA G3010",
      "Canon PIXMA G4010",
    ],
    refillAvailable: true,
    priceFrom: null,
  },
  {
    id: "canon-cl-925",
    brand: "Canon",
    name: "Canon CL-925 Colour Ink",
    code: "CL-925",
    type: "ink",
    printerModels: [
      "Canon PIXMA MP237",
      "Canon PIXMA MP287",
      "Canon PIXMA MX377",
      "Canon PIXMA MX397",
    ],
    refillAvailable: true,
    priceFrom: null,
  },
  {
    id: "canon-052",
    brand: "Canon",
    name: "Canon Cartridge 052 Toner",
    code: "CRG-052",
    type: "toner",
    printerModels: [
      "Canon i-SENSYS LBP212dw",
      "Canon i-SENSYS LBP214dw",
      "Canon i-SENSYS MF421dw",
      "Canon i-SENSYS MF426dw",
    ],
    refillAvailable: true,
    priceFrom: null,
  },
  {
    id: "epson-003",
    brand: "Epson",
    name: "Epson 003 Ink Bottle",
    code: "003",
    type: "ink",
    printerModels: [
      "Epson EcoTank L3110",
      "Epson EcoTank L3150",
      "Epson EcoTank L3250",
      "Epson EcoTank L3252",
      "Epson EcoTank L5190",
    ],
    refillAvailable: true,
    priceFrom: null,
  },
  {
    id: "epson-001",
    brand: "Epson",
    name: "Epson 001 Ink Bottle",
    code: "001",
    type: "ink",
    printerModels: [
      "Epson EcoTank L3210",
      "Epson EcoTank L3250",
      "Epson EcoTank L3260",
      "Epson EcoTank L5290",
    ],
    refillAvailable: true,
    priceFrom: null,
  },
  {
    id: "brother-tn-2365",
    brand: "Brother",
    name: "Brother TN-2365 Toner",
    code: "TN-2365",
    type: "toner",
    printerModels: [
      "Brother HL-L2321D",
      "Brother HL-L2361DN",
      "Brother HL-L2366DW",
      "Brother DCP-L2520D",
      "Brother MFC-L2701DW",
    ],
    refillAvailable: true,
    priceFrom: null,
  },
  {
    id: "samsung-mlt-d101s",
    brand: "Samsung",
    name: "Samsung MLT-D101S Toner",
    code: "MLT-D101S",
    type: "toner",
    printerModels: [
      "Samsung ML-2160",
      "Samsung SCX-3400",
      "Samsung SCX-3405",
      "Samsung SF-760P",
    ],
    refillAvailable: true,
    priceFrom: null,
  },
];
