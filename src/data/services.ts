export interface ServiceItem {
  name: string;
  level: 'ADVANCED' | 'EXPERT' | 'MASTERY';
  price: string;
  desc: string;
  recommended: string;
}

export const hairServices: ServiceItem[] = [
  {
    level: 'ADVANCED',
    name: 'MOD CUT',
    price: '£35',
    desc: 'A structured, bowl-adjacent shape with heavy fringe presence and clean interior texturing. Requires exact scissor control to balance weight and movement.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'ADVANCED',
    name: 'FLOW CUT',
    price: '£40',
    desc: 'Long, sweeping layers designed to move naturally. The challenge lies in achieving seamless graduation and removing bulk without losing the fluid shape.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'EXPERT',
    name: 'WOLF CUT',
    price: '£45',
    desc: 'A bold hybrid of the shag and mullet, featuring heavy layers and a choppy texture. Requires precise sectioning to maintain volume on top while keeping the edges aggressive.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'ADVANCED',
    name: 'MULLET',
    price: '£35',
    desc: 'The modern classic. Tight fades on the sides with deliberate length and flow at the back. Masterful texturing required to blend the opposing lengths smoothly.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'ADVANCED',
    name: 'FRENCH CROP',
    price: '£30',
    desc: 'A sharp, textured top with a blunt fringe, perfectly contrasted against tight sides. The architecture of a flawless crop lies in the weight distribution.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'EXPERT',
    name: 'BURST FADE',
    price: '£35',
    desc: 'A rounded fade dropping behind the ear, preserving bulk at the nape. Requires highly technical clipper work to ensure a symmetrical, flawless gradient curve.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'EXPERT',
    name: 'DROP FADE',
    price: '£35',
    desc: 'A low gradient that arches down behind the ear. This fade requires exact clipper techniques to trace the natural curvature of the head dynamically.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'MASTERY',
    name: 'SKIN FADE (MED/HIGH)',
    price: '£40',
    desc: 'Taking the clipper work down to the bone. The true mark of a master barber is a skin fade with no visible weight lines—just a seamless gradient from skin to hair.',
    recommended: 'Solomon Vane'
  },
];

export const beardServices: ServiceItem[] = [
  {
    level: 'ADVANCED',
    name: 'FULL BEARD SCULPT',
    price: '£25',
    desc: 'Shaping and defining the beard to complement your facial structure. Includes precision trimming, line work, and deep conditioning.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'EXPERT',
    name: 'BEARD FADE',
    price: '£20',
    desc: 'Fading the beard into the skin fade seamlessly. A highly technical blend that bridges the gap between the scalp and facial hair.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'MASTERY',
    name: 'SKIN FADE BEARD BLEND',
    price: '£35',
    desc: 'Seamlessly connecting the head fade into the beard—arguably the hardest technical exercise in barbering. The two must read as one continuous gradient.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'EXPERT',
    name: 'BEARD COLOUR AND TINT',
    price: '£30',
    desc: 'Covering greys or adding depth for a fuller, richer appearance. Exact color matching applied with meticulous brushwork.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'MASTERY',
    name: 'STRAIGHT RAZOR HOT TOWEL SHAVE',
    price: '£40',
    desc: 'Ritual as much as service. Hot towels, pre-shave oil, single-pass blade work across the grain. A clean head shave or face shave delivered the old way.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'EXPERT',
    name: 'HEAD SHAVE',
    price: '£35',
    desc: 'Full head shave with a hot towel finish. Executed with a straight razor for an immaculately smooth result.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'ADVANCED',
    name: 'BEARD WASH AND CONDITION',
    price: '£15',
    desc: 'Deep clean and moisturise treatment. Restores natural oils and softens coarse facial hair using premium Sovereign grade products.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'ADVANCED',
    name: 'MOUSTACHE TRIM AND SHAPE',
    price: '£15',
    desc: 'Precision sculpting for the standalone moustache. Detailed scissor work to maintain a sharp, deliberate shape.',
    recommended: 'Dorian Cross'
  },
];

export const treatments: ServiceItem[] = [
  {
    level: 'ADVANCED',
    name: 'SCALP TREATMENT',
    price: '£20',
    desc: 'Exfoliating and moisturising scalp massage to promote circulation and healthy hair growth.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'ADVANCED',
    name: 'BLACK MASK FACIAL',
    price: '£25',
    desc: 'Deep pore cleansing face mask to extract impurities and rejuvenate the skin beneath.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'EXPERT',
    name: 'EYEBROW THREADING OR WAXING',
    price: '£15',
    desc: 'Clean, defined brows perfectly structured to frame the face. Executed with razor-sharp precision.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'EXPERT',
    name: 'HAIR TONING',
    price: '£30',
    desc: 'Removing brassiness or adding cool tones. Perfect for enhancing grey or artificially lightened hair.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'MASTERY',
    name: 'KERATIN TREATMENT',
    price: '£80',
    desc: 'A premium smoothing and strengthening treatment to tame frizz and lock in a polished, effortless finish for weeks.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'EXPERT',
    name: 'FADE REFRESH',
    price: '£25',
    desc: 'A mid-appointment tidy up. We redefine the perimeter and bring the skin fade back to absolute zero without altering the top.',
    recommended: 'Solomon Vane'
  },
];

export const allServices: ServiceItem[] = [...hairServices, ...beardServices, ...treatments];
