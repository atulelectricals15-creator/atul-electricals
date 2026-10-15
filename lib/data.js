export const I = {wire:'<path d="M6 14c10 0 10 20 20 20s10-20 16-20"/><circle cx="6" cy="14" r="2"/><circle cx="42" cy="14" r="2"/>',
mcb:'<rect x="8" y="8" width="32" height="32" rx="4"/><path d="M16 16h6v10h-6zM26 16h6v10h-6zM16 32h16"/>',
led:'<path d="M24 5a11 11 0 0 0-6 20c2 2 2 4 2 6h8c0-2 0-4 2-6A11 11 0 0 0 24 5zM20 36h8M21 41h6"/>',
chk:'<path d="M24 5l15 6v11c0 10-7 17-15 21C16 39 9 32 9 22V11z"/><path d="M17 24l5 5 9-10"/>'};

export const C = [['sw','Electrical','Switches & Sockets','Modular switches, sockets, plates and accessories for homes, offices and renovation projects.',['Power & USB sockets','Plates & boxes','Modern finishes']],
['wire','Electrical','Wires & Cables','ISI-marked copper wires, flexible and multicore cables for safe wiring.',['House wiring','Multicore cable','Conduits']],
['mcb','Safety','MCB & Distribution Boards','MCBs, RCCBs, isolators and DB boxes for complete circuit protection.',['MCB & RCCB','Single & 3-phase DBs','By pole & rating']],
['led','Lighting','Lighting & LED','LED bulbs, tubes, panel lights, decorative and smart lighting.',['Bulbs & battens','Panel lights','Emergency lights']],
['fan','Cooling','Ceiling Fans','High-speed, decorative and energy-saving fans from top brands.',['Decorative finishes','Energy-saving BLDC','Wall & exhaust fans']],
['ac','Cooling','Air Conditioners','Split and window ACs, inverter models, 3-star to 5-star.',['Split & window','Inverter','Room-size tonnage']],
['tv','Electronics','LED TVs','HD, Full HD and Smart LED TVs in all sizes with warranty.',['Smart TV','HD, Full HD & 4K','Many sizes']],
['fr','Appliances','Refrigerators','Single and double-door fridges and frost-free models for every home.',['Direct-cool','Frost-free','Star ratings']],
['wm','Appliances','Washing Machines','Semi and fully-automatic top and front-load washing machines.',['Semi & fully auto','Top & front load','Wash programs']],
['geyser','Appliances','Water Geysers','Storage and instant geysers, plus induction cooktops, kettles and irons.',['Storage & instant','Induction','Kettles & irons']],
['groom','Electronics','Personal Grooming','Trimmers, hair dryers, straighteners and grooming essentials.',['Trimmers','Hair dryers','Straighteners']],
['inv','Electrical','Inverters & Batteries','Home inverters and tubular batteries for reliable power backup.',['Sinewave inverters','Tubular batteries','By load']]];

export const T = [['Homes & renovations','Plan room by room for wiring, switches, lighting, fans, protection devices and essential appliances.',['New home electrical lists','Room-wise lighting choices','Appliance size comparison']],
['Electricians','Everyday installation materials and protection products for repair work, rewiring and new projects.',['Wires, conduits and accessories','MCBs, RCCBs and DBs','Switches, sockets and fittings']],
['Shops & offices','Durable lighting, cooling and distribution options for practical commercial spaces.',['Bright, efficient lighting','Fans and cooling options','Distribution and safety products']],
['Projects','Bring your item list to discuss suitable product types, quantities and alternatives.',['List-based selection','Multiple sizes and finishes','Budget-wise comparison']]];

export const G = [['Wiring & electrical safety','Choose wire size by connected load. Compare copper quality, insulation, safety markings and the right MCB or RCCB rating.',['Load and wire size','Safety marking','Circuit protection']],
['Lighting & fans','Compare brightness, wattage, colour temperature and room size. For fans, check sweep, air delivery and energy use.',['Room size','Air delivery','Energy use']],
['TVs & home appliances','Match capacity and features to family size. Ask about dimensions, power use, accessories and warranty.',['Capacity & size','Energy rating','Warranty']],
['ACs & cooling','Room area, sunlight, floor level and occupancy affect cooling. Compare tonnage, inverter, star rating and installation.',['Correct tonnage','Star rating','Installation']],
['Personal grooming','Compare corded or cordless use, battery runtime, settings, attachments and cleaning ease.',['Runtime','Settings','Easy cleaning']],
['Inverters, geysers & more','Note required load or capacity, space, safety features and expected usage before asking for options.',['Capacity','Safety features','Space & usage']]];


export const BRANDS = {
  sw: ['Orient', 'Anchor Penta', 'Indo Asian'],
  wire: ['Havells', 'KEI', 'Polycab', 'Kunthcab'],
  mcb: ['Orient', 'Polycab', 'Bajaj'],
  led: ['Bajaj', 'Sturlite', 'Clair'],
  fan: ['V-Guard', 'Bajaj', 'Lazer Air'],
  ac: ['Blue Star'],
  tv: ['BPL', 'Daenyz', 'TCL'],
  fr: ['Lloyd', 'Daenyx'],
  wm: ['Lloyd'],
  geyser: ['Havells', 'V-Guard', 'Bajaj', 'Lazer'],
  groom: ['Havells'],
  inv: ['V-Guard', 'Luminous', 'Luminous Trolley', 'Livtech Trolley']
};

export const DETAILS = {
  sw: ['Modular switches, sockets, switch plates and accessories for homes, offices and renovation projects.', ['Modular switches and plates', 'Power sockets and USB sockets', 'Finishes and styles for different interiors']],
  wire: ['Electrical wires and cables for house wiring, repairs and projects. Choose cable size and type based on the connected load and installation.', ['House wiring and flexible wires', 'Copper quality and insulation', 'Suitable cable size for the load']],
  mcb: ['MCBs and distribution boxes for organised electrical distribution and circuit protection.', ['MCBs and suitable ratings', 'Distribution boxes and DBs', 'Ask a qualified electrician to select protection devices']],
  led: ['LED and general lighting options for rooms, workspaces and outdoor areas.', ['Bulbs, battens and panel lights', 'Brightness and colour temperature', 'Wattage and energy use']],
  fan: ['Ceiling fans for bedrooms, living rooms, shops and other spaces.', ['Sweep size and air delivery', 'Decorative and practical styles', 'Energy use and room size']],
  ac: ['Air conditioners for different room sizes and cooling needs.', ['Room-size and tonnage selection', 'Inverter options and star ratings', 'Installation and warranty questions']],
  tv: ['LED TVs and smart TV options in different screen sizes and feature ranges.', ['Screen size and viewing distance', 'Smart features and resolution', 'Ports, warranty and service']],
  fr: ['Refrigerators for everyday home storage in different capacities and configurations.', ['Capacity and family needs', 'Direct-cool and frost-free options', 'Energy rating and dimensions']],
  wm: ['Washing machines for different household sizes, wash loads and laundry needs.', ['Top-load and front-load options, subject to availability', 'Capacity and wash programs', 'Water use, dimensions and warranty']],
  geyser: ['Water geysers for bathrooms and kitchens, with storage and instant options.', ['Storage and instant models', 'Capacity based on usage', 'Installation and safety requirements']],
  groom: ['Personal grooming appliances for everyday home use.', ['Trimmers and grooming tools', 'Corded or cordless features', 'Attachments, cleaning and warranty']],
  inv: ['Power-backup options including inverters, batteries and compatible trolley accessories.', ['Inverter and battery capacity', 'Luminous trolley options', 'Livtech trolley options and fitment']]
};
