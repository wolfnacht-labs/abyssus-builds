const weaponForgeDescriptions = {
    // Engine Rifle
    'Prolonged Revving': 'Shooting enemies reduces Heat.',
    'Greased Barrel': 'Increases damage the longer you fire without letting go of your Primary or Secondary.',
    'Insulated Barrel': 'Increases fire rate by up to 100% the higher your Heat is.',
    'Heat Converter': 'Deal up to 100% more damage the higher your Heat is.',
    'Binary Cooling': 'Heat no longer decreases over time after Overheating, but is cleared after 5 sec.',
    'Burst Cooling': 'Stops Heat from increasing for 5 sec. after Overheated is cleared.',
    'Large Capacity': 'Increases the max clip size and the Overheat threshold by 100%.',
    'Heat Expulsion': 'Explodes in a 15-meter radius once Overheated, dealing 1000% weapon damage.',

    // Shotgun
    'Light Frame': 'Moving during combat builds Momentum that increases fire rate by up to 80% and movement speed by up to 80%. Clears outside of combat and drains while standing still.',
    'Long Barrel': 'Reduces spread by 50% and increases Weakspot damage by 50%.',
    'Sawed-Off Barrel': 'Increases damage by 50%, but also increases spread by 50%.',
    'Heavy Shell': 'Secondary Fire applies Slow and Weak on enemies hit.',
    'Compact Shell': 'Killing an enemy makes the next shot deal 100% more damage. Does not stack.',
    'Optimized Gauge': 'Deal 50% additional damage to Stunned, Slowed or Frozen enemies.',
    'Automatic Trigger': 'Using your Primary makes the next Secondary attack deal 80% more damage.',
    'Automatic Action': 'Using your Secondary makes the next Primary attack deal 80% more damage.',

    // Tesla Gun
    'Spark Gap': 'Increase fire rate the longer you fire without letting go of your Primary.',
    'Streamlined Transistor': 'Increase damage the longer you fire without letting go of your Primary.',
    'Compact Transformer': 'Secondary charges twice as fast.',
    'Larger Battery': 'Secondary can be charged an additional 2 steps, increasing its effect.',
    'Wireless Transmitter': 'Your Secondary\'s duration is increased by 20% for each active Secondary effect.',
    'High Voltage': 'Deal 20% more Primary damage to enemies currently being hit by the Secondary.',
    'High-Frequency': 'Increases range/radius of your Secondary by 50%.',
    'Backup Battery': 'Increase magazine size by 50. Killing enemies grants 10 stacks of Backup Battery. When you run out of ammo, stacks of Backup Battery are consumed to instantly refund 1 ammo per stack.',

    // Plasma Launcher
    'Seismic Fuel': 'Hitting 3 enemies increases the explosion radius for 5 sec.',
    'Molotov Fuel': 'Enemies take 50% continuous weapon damage for 5 sec. after being hit.',
    'Revolving Valve': 'Lasting attacks have doubled duration, charged attacks have halved buildup.',
    'Explosive Valve': 'Damage now scales with the projectile\'s explosion radius.',
    'Accelerating Core': 'Explosions increase in size the further the projectile travels. Up to 100%.',
    'Bouncy Core': 'Projectiles bounce 2 times or until an enemy is directly hit, exploding each bounce and dealing 25% more damage.',
    'Spreading Heat': 'Hitting an enemy suffering from status effects or that are Stunned, Slowed or Frozen deals the same damage to a nearby enemy.',
    'Repeating Blasts': 'Plasma Launcher explosions have a 60% chance of triggering again. Additional explosions can also trigger again, but have a 20% decreased chance per explosion.',

    // Combat Bow
    'Spined Arrow': 'Arrows deal 25% weapon damage as damage over time. Can stack, but all stacks disappear after 5 sec.',
    'Pressure Arrow': 'Arrows have an aura around them that damages enemies it passes through, dealing 50% weapon damage.',
    'True Form': 'Sweetspots always count as Weakspot hits.',
    'Consistent Scope': 'Sweetspots shoot an additional arrow that deals 50% less damage.',
    'Stable String': 'Each consecutive Weakspot hit deals 10% increased damage. Stacks 25 times.',
    'Elastic String': 'You can charge further before the Sweetspot, dealing up to 50% more damage.',
    'Longbow': 'Arrows deal up to 50% more Weakspot damage based on the distance traveled.',
    'Shortbow': 'Arrows are automatically shot once fully charged. Can be held to shoot continuously.',

    // Disc Thrower
    'Spare Discs': '+3 maximum stored discs.',
    'Slim Discs': 'Increases disc speed by 100% and reduces spread and damage falloff.',
    'Halting Discs': 'Discs spin in place for 2 sec. after hitting an enemy, then continue their arc. They deal continuous damage to nearby enemies while spinning.',
    'Twin Discs': 'Weakspot hits fire an additional disc that deals 70% less damage and is destroyed on impact.',
    'Whetting Bounce': 'Discs deal 120% more damage if they bounce on the environment before hitting an enemy.',
    'Elemental Overcharge': 'Your Secondary deals 50% more damage each time the same disc triggers its effect.',
    'Automatic Detonation': 'Weakspot hits with your Primary automatically trigger your Secondary.',
    'Priming Flight': 'Primary and Secondary deals up to 100% increased damage based on distance traveled.',

    // Brine Revolver
    'Combustion Muzzle': 'Reloading empowers the next bullet, making it deal 50% more damage.',
    'Critical Cylinder': 'Weakspot hits have a chance to recover 1 ammo.',
    'Fast Trigger': 'A bullet fired within 0.8 sec. of the last one deals 25% increased damage. Damage stacks until reload.',
    'Boosted Cylinder': 'Hitting an enemy with your Secondary increases fire rate for 3 sec.',
    'Overload Bullets': 'Adds stacks of "Overload" to the player. Overload stacks are consumed when shooting an enemy with your Secondary. Your Secondary deals 25% additional damage per stack of Overload at the time of firing.',
    'Critical Bullets': 'Each consecutive Weakspot hit increases damage by 5%. Damage bonus resets when reloading and between Depths.',
    'Exploitative Bullets': 'Your damage over time multiplier is increased by 50% while scoped.',
    'Accelerating Bullets': 'Deals 50% more Weakspot damage to enemies beyond 20 meters.',

    // Fish Deity
    'Elastic Goo': 'Projectiles bounce, exploding and dealing 25% more damage for each bounce.',
    'Softening Acid': 'Enemies hit by your Primary take 50% more damage from your next Secondary.',
    'Weakening Jabs': 'Enemies hit by your Secondary are Weakened and Slowed.',
    'Repeating Jabs': 'Weakspot stabs create a second stab.',
    'Pursuing Horn': 'Killing an enemy refreshes Dash. Dashing increases your Secondary damage by 25% for 2 sec.',
    'Long Horn': 'Secondary range increases by 50%.',
    'Stunning Strike': 'Increase the Fish Deity\'s Stun duration by 300%.',
    'Discharging Reload': 'A discarded Fish Deity explodes in a 8-meter radius after reloading, dealing 2000 damage and stunning enemies hit.',

    // Harpoon Gun
    'Charged Harpoons': 'Primary and Secondary can be charged, causing up to 6 harpoons to be fired in quick succession.',
    'Rapid Harpoons': 'Increases fire rate by 50%.',
    'Splitting Harpoons': 'Weakspots create an additional harpoon that seeks out a new target.',
    'Blessed Harpoons': 'Primary and Secondary deals 10% more damage for every Minor and Major Blessing.',
    'Charmed Harpoons': 'Gain buffs based on your Charms.\n\nCommon: +20% fire rate and +20% damage.\nRare: +30% reload speed and +20% Blessing trigger chance.\nLegendary: Shoot an extra harpoon.',
    'Increased Combo': 'Increases maximum Combo Points by 1.',
    'Precise Combo': 'Marks a random Combo Point. Spending that amount of Combo Points increases the effect as if it consumed the maximum amount +1.',
    'Plentiful Combo': 'For each consumed Combo Point, refill 1 ammo.'
};

const abilityForgeDescriptions = {
    // Shared (available across multiple abilities)
    'Extra Pockets': 'Gain 3 Ability stacks.',
    'Increased Efficiency': 'Kills lower the cooldown of your Ability.',
    'Rich Get Richer': 'Decreases cooldown by 10% for every Ability stack.',
    'Investment': 'Increases Ability damage by 10% for each Blessing on your Ability.',
    'Double Trouble': 'Blessings on your Ability have a 30% chance to trigger twice.',
    
    // Anchor
    'Anchored': 'Flying enemies fall when hit by the anchor, and take 100% more damage for 5 sec.',
    'Bonebreaker': 'Enemies hit by the anchor deal 25% less damage for 5 sec.',
    'Bulwark': 'Gain brief invulnerability while swinging the anchor.',
    'Geyser': 'Causes a delayed explosion where the anchor hits, dealing 150% of the anchor\'s damage.',
    'Brine': 'Creates a toxic pool on the ground that repeatedly deals 25% of the anchor\'s damage to nearby enemies.',
    'Grenanchor': 'The anchor is now thrown.',
    'Self-sustaining': '10% ability cooldown reduction for every enemy hit by the anchor.',
    'Mighty': 'Enemies hit by the anchor are knocked back.',
    'The Thrill': 'Increases movement speed by 10% for 5 sec. per enemy hit by the anchor.',
    'Fearless': 'Deal 50% more damage to enemies within 5 meters.',
    'Death Slam': 'Deal 50% additional damage to enemies at full Health.',

    // Brine Field
    'End With a Bang!': 'The Brine Field explodes when it\'s destroyed, dealing 300 damage in a 10-meter radius.',
    'Lingering Field': 'The effects of the Brine Field linger for 5 sec. after the player or enemy leaves it.',
    'Mobility Field': 'Decreases the Brine Field’s size by 20%, but it\'s attached to you.',
    'Personal Space': 'Enemies within the Brine Field take 15% more damage from all sources.',
    'Quality Over Quantity': 'Buffs the currently active Brine Field instead of placing a new one, increasing its benefits by 20% and its area by 20%.',
    'Safety Dance': 'The Brine Field increases your Fire Rate by 30%.',
    'Steady Field': 'Players deal 30% more Weakspot damage when inside the Brine Field.',
    'Time Warp': 'Brine Field Slows enemies 20% more and enemy projectiles within its area are Slowed by 70%.',
    'Noxious Bubble': 'Status effects tick at a speed of 200% on enemies within the Brine Field.',
    'Expanding Territory': 'The Brine Field continuously increases in size when placed.',
    'Sanctum': 'Blessings on your Brine Field trigger 3% more frequently for every meter of the radius.',

    // Frag Grenade
    'Cluster Bomb': 'Grenades split into explosive fragments on detonation.',
    'Domino': 'Enemies killed by your grenade\'s explosion or killed shortly after being hit by your grenade also explode, dealing 60% ability damage.',
    'Explosive Culling': 'Your grenade deals bonus damage based on enemies\' missing Health.',
    'Exposure Blast': 'Enemies hit by grenade explosions take 15% additional damage.',
    'Implosive Force': 'Grenade explosions pull enemies in and stun them for 1 sec.',
    'Bouncy Bomb': 'Grenades explode each time they bounce and are no longer destroyed on impact with enemies. Bounce explosions have halved range and damage.',
    'Compact Grenade': 'Grenades deal triple damage, but the number of ability stacks is halved (rounded up).',
    'Gas Grenade': 'Grenades leave behind a cloud of gas that deals 50% grenade damage continuously.',
    'Gashing Shell': 'Grenades deal 50% more damage to enemies suffering from status effects or that are Stunned, Slowed or Frozen.',
    'Shrapnel': 'Enemies hit by grenades take 25% grenade damage continuously for 3 sec.',
    'Sharp Shell': 'Weakspot hits with grenades make the explosions deal 25% more damage and restores 25% of the cooldown.',

    // Turret
    'Ammo Transfer': '60% chance when the Turret shoots an enemy to reload 1 ammo into your magazine.',
    'Buddy System': 'Lowers the cooldown by 10 sec. and reduces the damage dealt by your Turret. Turrets deal increased damage for each Turret within range.',
    'Drones': 'The Turret now flies, staying in close proximity while shooting nearby enemies.',
    'Teamwork': 'Your Fire Rate is increased by 10% when your Turrets get a kill, and your Turrets\' Fire Rate is increased by 10% when you get a kill.',
    'Sniper Mode': 'Reduce the Turret\'s Fire Rate by 200%, but increase its damage by 500%. All its hits count as Weakspot hits.',
    'Unstable Cores': 'Your Turret explodes and stuns enemies in a 10-meter radius when it spawns.',
    'Spiked Ammunition': 'Projectiles explode on hit and deal 25% additional damage.',
    'Sentinel': 'Increases Turret Fire Rate by 20% for every player within 15 meters.',
    'Persistent': 'Damage is increased by 10% and duration by 50%.',
    'Guiding Bullet': 'You deal 25% more damage to your Turret\'s target.',
    'Ricochet': 'Turret projectiles bounce to another enemy. Ricochets deal 50% less damage.',

    // Ancient Core
    'Bounce Blast': 'The blast from the Ancient Core also bounces to an additional nearby enemy.',
    'Cone Blast': 'The blast from the Ancient Core targets all enemies in a cone instead of the first one.',
    'Gold Blast': 'Enemies killed by the blast from the Ancient Core drop Gold.',
    'Active Reload': 'Getting a kill with the Ancient Core resets its cooldown.',
    'Stun Blast': 'The blast from the Ancient Core also stuns on hit.',
    'Laser Sight': 'Deal up to 50% additional damage the further away the enemy is.',
    'Hunter\'s Mark': 'Enemies hit by the Ancient Core are marked, increasing all Weakspot damage they receive by 25% for 5 sec.',
    'Target Lock': 'Deal 10% more damage each time the Ancient Core hits the same enemy.',
    'Explosive Blast': 'The blast from the Ancient Core explodes on hit, dealing damage to nearby enemies equivalent to 25% of the hit.',
    'Death Strike': 'Deal 50% additional damage to enemies at full Health.',
    'Trigger Happy': 'Increases damage by 50% if the Ancient Core is used within 2 sec of the cooldown refreshing.',
  
    // Smiting Spear
    'Shockwave': 'Spears create shockwaves when sticking and for every 3 hits. Shockwaves deal 40 damage.',
    'Spear Grid': 'Spears that are stuck create a field between them that deals 30 damage to enemies that enter it.',
    'Chain Pulse': 'The pulse from one spear has a 60% chance to cause other spears to pulsate.',
    'Charmed Spear': 'Gain buffs based on your Charms.\n\nCommon: +20% pulse damage.\nRare: +50% duration.\nLegendary: +1 pulse.',
    'Split Spear': 'Throw additional spears diagonally left and right.',
    'Sticking Spear': 'Spears that stick to enemies deal 20% increased pulse damage.',
    'Environmental Spear': 'Spears that stick to the environment Slow nearby enemies and increase their damage taken by 5%.',
    'Enduring Spear': 'If an enemy dies from, or shortly after, being hit by a spear, the spear\'s duration resets.',
    'Fragmenting Spear': 'Spears send a fragment toward a nearby enemy when sticking, dealing 40 damage. Sends additional fragments for every spear stuck in the enemy.',
    'Weakspot Spear': 'Spears that stick on a Weakspot have 25% increased damage and range.',
    'Charged Spear': 'Spears can be charged before being thrown, consuming stacks to increase damage and duration, while decreasing damage intervals, by 50% per stack.'
};
