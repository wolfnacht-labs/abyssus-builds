const primaryDescriptions = {
    'Engine Rifle': {
        'Automatic Fire': 'Fast automatic fire.',
        'Burst Fire': 'Semi-automatic bursts.',
        'Gatling Fire': 'Increases Fire Rate the longer you shoot.'
    },
    'Shotgun': {
        'Semi-automatic': 'Semi-automatic pump shotgun.',
        'Full-automatic': 'Fully automatic shotgun.',
        'Superheavy Slug': 'Precise shots with increased Weakspot damage.'
    },
    'Tesla Gun': {
        'Electrical Beam': 'A continuous beam of electricity.',
        'Charge Beam': 'Overload targets when hitting their Weakspots.',
        'Unstable Coil': 'Lock on to nearby enemies.'
    },
    'Brine Revolver': {
        'Semi-automatic': 'Semi-automatic fire.',
        'Burst Fire': 'Fires a burst of bullets.',
        'Large Caliber': 'Deals high damage and increased Weakspot damage.'
    },
    'Disc Thrower': {
        'Automatic': 'Fires discs that return after a hit.',
        'Fan Fire': 'Fires discs in a fan pattern.',
        'Dynamo': 'Fires discs that bounce between enemies before returning.'
    },
    'Combat Bow': {
        'Precision Shot': 'Charged arrow that deals more damage when shot during its Sweetspot.',
        'Pierce': 'A piercing arrow that deals increased damage per enemy hit.',
        'Return Arrow': 'Gain increased damage and Fire Rate when picking up arrows or shooting during Sweetspots.'
    },
    'Plasma Launcher': {
        'Semi-automatic': 'Fires explosive plasma orbs.',
        'Flak Cannon': 'Fires fast plasma orbs.',
        'Seekers': 'Hold to acquire targets and release a barrage of plasma orbs.'
    },
    'Fish Deity': {
        'Rapid Goo': 'Fires multiple arching orbs of goop.',
        'Fish Spit': 'Fires an arching orb of goop that makes enemies more susceptible to stabs.',
        'Hazardous Goo': 'Fires an arching orb of goop that deals damage over time to targets hit. The effect stacks but disappears after a short duration.'
    },
    'Harpoon Gun': {
        'Piercing Harpoons': 'Piercing harpoons with high knockback on Weakspot hits. Generates Combo Points on hit.',
        'Ricocheting Harpoons': 'Harpoons that ricochet to a new target on Weakspot hits. Generates Combo Points on hit.',
        'Pinning Harpoons': 'Harpoons that attach to enemies, dealing damage over time. Generates Combo Points while attached.'
    }
};

const secondaryDescriptions = {
    // Engine Rifle
    'Engine Rev': 'High Fire Rate but increases Heat.',
    'Split Shot': 'Fires multiple shots in an unpredictable pattern but increases Heat.',
    'Concentrated Shot': 'Semi-automatic fire that knocks enemies back but increases Heat.',

    // Shotgun
    'Buckshot': 'Fires a powerful blast, knocking yourself backwards.',
    'Unload': 'Fires all bullets in quick succession, dealing more damage with each shot.',
    'Pressure Shot': 'Stuns and knocks enemies back.',

    // Tesla Gun
    'Spark Orb': 'Charge up a slow moving orb that zaps nearby enemies.',
    'Charge Orb': 'Charge up an orb that explodes on impact and deals damage over time.',
    'Magnetic Storm': 'Charge up a storm of electricity.',

    // Disc Thrower
    'Inferno Discs': 'Causes an explosion around discs.',
    'Electron Conductors': 'Creates arcs of electricity between discs.',
    'Search and Destroy': 'Redirects discs towards their nearest enemy and destroy them on impact.',

    // Combat Bow
    'Multi-Shot': 'Fires a barrage of arrows.',
    'Smart Arrow': 'An arrow that bounces between enemies and surfaces.',
    'Exploding Arrow': 'An arrow that explodes on hit.',

    // Plasma Launcher
    'Disintegration Beam': 'Fires a devastating beam of plasma that pierces through enemies.',
    'Void Infusion': 'Creates a black hole on impact that damages and slows.',
    'Adhesive Compound': 'Fires a plasma orb which sticks to the target and explodes continuously.',

    // Fish Deity
    'Piercing Stab': 'Stabs forward, piercing enemies and dealing high Weakspot damage.',
    'Wide Stab': 'Wide stab that knocks enemies back.',
    'Chainsaw': 'Repeatedly slashes, dealing more damage each time the same target is hit.',

    // Brine Revolver
    'Steady Scope': 'Reliable damage while scoped.',
    'Quick Scope': 'Fire quickly after scoping for increased damage.',
    'Charge Scope': 'Deals more damage on full charge.',

    // Harpoon Gun
    'Barbed Harpoons': 'Consumes Combo Points to deal damage over a short duration.',
    'Binding Harpoons': 'Pull enemies toward the harpoon when it hits. Deals more damage and targets more enemies per Combo Point consumed.',
    'Brine-Powered Harpoons': 'A large piercing harpoon that deals increased damage and knockback per Combo Point consumed.'
};
