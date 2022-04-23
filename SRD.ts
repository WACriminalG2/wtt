// No content is intentionally included outside the game's SRD.

import {Armor, Mount, Shield, Sourcebook, Ware, Weapon, CP,SP,GP,Roll} from './core';

// PHB construction
var sb : Sourcebook = new Sourcebook("Dungeons & Dragons 5th Edition SRD","SRD").author('Wizards of the Coast');
sb.URL = "https://www.5esrd.com/"

// Ware construction
let weapons = [
new Weapon('Battleaxe','').classify('WX').sell(GP(10)).dmg(8,'Slashing').lb(4).versatile(10).martial(),
new Weapon('Blowgun','').classify('WR').sell(GP(10)).dmg(new Roll().MOD(1),'Piercing').lb(1).ammunition('25/100').loading().martial(),
new Weapon('Club','').classify('WC').sell(SP(1)).light().lb(2).dmgtype('Bludgeoning').dmg(4).simple(),
new Weapon('Crossbow, Hand','').classify('WR0').sell(GP(75)).dmg(6,'Piercing').lb(3).ammunition('30/120').light().loading().martial(),
new Weapon('Crossbow, Heavy','').classify('WR0').sell(GP(50)).dmg(10,'Piercing').lb(18).ammunition('100/400').heavy().loading().twohanded().martial(),
new Weapon('Crossbow, Light','').classify('WR0').sell(GP(25)).dmg(8).dmgtype('Piercing').lb(5).ammunition('80/320').loading().twohanded().simple(),
new Weapon('Dagger','').classify('WB','WT').sell(GP(2)).finesse().light().thrown('20/60').lb(1).dmg(4,'Piercing').simple(),
new Weapon('Dart','').classify('WT').sell(CP(5)).dmg(4).dmgtype('Piercing').lb(0.25).finesse().thrown('20/60').simple(),
new Weapon('Flail','').classify('WC').sell(GP(10)).dmg(8,'Bludgeoning').lb(2).martial(),
new Weapon('Glaive','').classify('WP').sell(GP(20)).dmg(10,'Slashing').lb(6).heavy().reach().twohanded().martial(),
new Weapon('Greataxe','').classify('WX').sell(GP(30)).dmg(12,'Slashing').lb(7).heavy().twohanded().martial(),
new Weapon('Greatclub','').classify('WC').sell(SP(2)).twohanded().lb(10).dmgtype('Bludgeoning').dmg(8).simple(),
new Weapon('Greatsword','').classify('WB').sell(GP(50)).dmg(new Roll().D6(2),'Slashing').lb(6).heavy().twohanded().martial(),
new Weapon('Halberd','').classify('WP').sell(GP(20)).dmg(10,'Slashing').lb(6).heavy().reach().twohanded().martial(),
new Weapon('Handaxe','').classify('WX').sell(GP(5)).dmg(6).dmgtype('Slashing').lb(2).light().thrown('20/60').simple(),
new Weapon('Javelin','').classify('WT').sell(SP(5)).dmg(6).dmgtype('Piercing').lb(2).thrown('30/120').simple(),
new Weapon('Lance','').classify('WP').sell(GP(10)).dmg(12,'Piercing').lb(6).reach().special('You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren’t mounted.').martial(),
new Weapon('Light Hammer', '').classify('WH').sell(GP(2)).dmg(4).dmgtype('Bludgeoning').lb(2).light().thrown('20/60').simple(),
new Weapon('Longbow','').classify('WR0').sell(GP(50)).dmg(8,'Piercing').lb(2).ammunition('150/600').heavy().twohanded().martial(),
new Weapon('Longsword','').classify('WB').sell(GP(15)).dmg(8,'Slashing').lb(3).versatile(10).martial(),
new Weapon('Mace','').classify('WC').sell(GP(5)).dmg(6).dmgtype('Bludgeoning').lb(4).simple(),
new Weapon('Maul','').classify('WC').sell(GP(10)).dmg(new Roll().D6(2),'Bludgeoning').lb(10).heavy().twohanded().martial(),
new Weapon('Morningstar','').classify('WC').sell(GP(15)).dmg(8,'Piercing').lb(4).martial(),
new Weapon('Net','').classify('WT').sell(GP(1)).dmg(new Roll(),'Bludgeoning').lb(3).special('A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.').thrown('5/15').martial(),
new Weapon('Pike','').classify('WP').sell(GP(5)).dmg(10,'Piercing').lb(18).heavy().reach().twohanded().martial(),
new Weapon('Quarterstaff','').classify('WV').sell(SP(2)).dmg(6).dmgtype('Bludgeoning').lb(4).versatile(8).simple(),
new Weapon('Rapier','').classify('WB').sell(GP(25)).dmg(8,'Piercing').lb(2).finesse().martial(),
new Weapon('Scimitar','').classify('WB').sell(GP(25)).dmg(6,'Slashing').lb(3).finesse().light().martial(),
new Weapon('Shortsword','').classify('WB').sell(GP(10)).dmg(6,'Piercing').lb(2).finesse().light().martial(),
new Weapon('Sickle','').classify('WB').sell(GP(1)).dmg(4).dmgtype('Slashing').lb(2).light().simple(),
new Weapon('Shortbow','').classify('WR0').sell(GP(25)).dmg(6).dmgtype('Piercing').lb(2).ammunition('80/320').twohanded().simple(),
new Weapon('Sling','').classify('WR').sell(SP(1)).dmg(4,'Bludgeoning').ammunition('30/120').simple(),
new Weapon('Spear', '').classify('WP').sell(GP(1)).dmg(6).dmgtype('Piercing').lb(3).thrown('20/60').versatile(8).simple(),
new Weapon('Trident','').classify('WP').sell(GP(5)).dmg(6,'Piercing').lb(4).thrown('20/60').versatile(8).martial(),
new Weapon('War Pick','').classify('WZ').sell(GP(5)).dmg(8,'Piercing').lb(2).martial(),
new Weapon('Warhammer','').classify('WH').sell(GP(15)).dmg(8,'Bludgeoning').lb(2).versatile(10).martial(),
new Weapon('Whip','').classify('WZ').sell(GP(2)).dmg(4,'Slashing').lb(3).finesse().reach().martial(),

new Weapon('Crystal',"").sell(10).lb(1).desc('Suitable for use as an Arcane Focus.').classify("WF0"),
new Weapon('Orb','').sell(20).lb(3).desc('Suitable for use as an Arcane Focus.').classify("WF0"),
new Weapon('Rod','').sell(10).lb(2).desc('Suitable for use as an Arcane Focus.').classify("WF0"),
new Weapon('Staff','').sell(5).lb(4).desc('Suitable for use as an Arcane Focus.').classify("WF0"),
new Weapon('Wand','').sell(10).lb(1).desc('Suitable for use as an Arcane Focus.').classify("WF0"),
new Weapon('Sprig of Mistletoe','').sell(1).desc('Suitable for use as a Druidic Focus.').classify("WF1"),
new Weapon('Totem','').sell(1).desc('Suitable for use as a Druidic Focus.').classify("WF1"),
new Weapon('Wooden Staff','').sell(5).lb(4).desc('Suitable for use as a Druidic Focus.').classify("WF1"),
new Weapon('Yew Wand','').sell(10).lb(1).desc('Suitable for use as a Druidic Focus.').classify("WF1"),
new Weapon('Amulet','').sell(5).lb(1).desc('Suitable for use as a Holy Symbol.').classify("WF2"),
new Weapon('Emblem','').sell(5).desc('Suitable for use as a Holy Symbol.').classify("WF2"),
new Weapon('Reliquary','').sell(5).lb(2).desc('Suitable for use as a Holy Symbol.').classify("WF2"),

new Weapon('Arrows','').sell(GP(1).measure("20")).lb(1).classify("WA"),
new Weapon('Blowgun Needles','').sell(GP(1).measure("50")).lb(1).classify("WA"),
new Weapon('Crossbow bolts','').sell(GP(1).measure("20")).lb(1.5).classify("WA"),
new Weapon('Sling bullets','').sell(CP(4).measure("20")).lb(1.5).classify("WA")
]

let armors = [
    new Armor('Leather Armor','','Light').sell(GP(10)).ac(11,'Dexterity').lb(10).classify("AB"),
    new Armor('Padded Armor','','Light').sell(GP(5)).ac(11,'Dexterity').disadvantage('Stealth').lb(8).classify("AB"),
    new Armor('Studded Leather Armor','','Light').sell(45).ac(12,'Dexterity').lb(13).classify("AB"),

    new Armor('Breastplate','','Medium').sell(400).ac(14,'Dexterity',2).lb(20).classify("AC"),
    new Armor('Chain Shirt','','Medium').sell(50).ac(13,'Dexterity',2).lb(20).classify("AC"),
    new Armor('Half Plate Armor','','Medium').sell(750).ac(15,'Dexterity',2).disadvantage('Stealth').lb(40).classify("AC"),
    new Armor('Hide Armor','','Medium').sell(10).ac(12,'Dexterity',2).lb(12).classify("AB"),    
    new Armor('Scale Mail','','Medium').sell(50).ac(14,'Dexterity',2).disadvantage('Stealth').lb(45).classify("AB"), 

    new Armor('Chain Mail','','Heavy').sell(75).ac(16).strReq(13).disadvantage('Stealth').lb(55).classify("AB"),
    new Armor('Plate Armor','','Heavy').sell(1500).ac(18).strReq(15).disadvantage('Stealth').lb(65).classify("AB"),
    new Armor('Ring Mail','','Heavy').sell(30).ac(14).disadvantage('Stealth').lb(40).classify('AB'),
    new Armor('Splint Armor','','Heavy').sell(200).ac(17).strReq(15).disadvantage('Stealth').lb(60).classify("AB"),
    
    new Shield('Shield','').sell(10).bonusAC(2).lb(6).classify("AS"),

    new Armor('Leather Barding','','Light').sell(40).ac(11,'Dexterity').lb(20).classify("AN"),
    new Armor('Padded Barding','','Light').sell(20).ac(11,'Dexterity').disadvantage('Stealth').lb(16).classify("AN"),
    new Armor('Studded Leather Barding','','Light').sell(180).ac(12,'Dexterity').lb(13).classify("AN"),

    new Armor('Chain Barding','','Medium').sell(200).ac(13,'Dexterity',2).lb(40).classify("AN"),
    new Armor('Half Plate Barding','','Medium').sell(3000).ac(15,'Dexterity',2).disadvantage('Stealth').lb(80).classify("AN"),
    new Armor('Hide Barding','','Medium').sell(40).ac(12,'Dexterity',2).lb(24).classify("AN"),    
    new Armor('Scale Barding','','Medium').sell(200).ac(14,'Dexterity',2).disadvantage('Stealth').lb(90).classify("AN"), 

    new Armor('Heavy Chain Barding','','Heavy').sell(300).ac(16).strReq(13).disadvantage('Stealth').lb(110).classify("AN"),
    new Armor('Plate Barding','','Heavy').sell(6000).ac(18).strReq(15).disadvantage('Stealth').lb(130).classify("AN"),
    new Armor('Ring Barding','','Heavy').sell(120).ac(14).disadvantage('Stealth').lb(80).classify('AN'),
    new Armor('Splint Barding','','Heavy').sell(800).ac(17).strReq(15).disadvantage('Stealth').lb(120).classify("AN"),
]

let gear = [
    new Ware("Abacus",'').sell(2).lb(2).classify("TC"),
    new Ware('Acid','').sell(GP(25).measure("vial")).lb(1).classify('PO').desc("As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage."),
    new Ware("Alchemist's Fire",'').sell(GP(50).measure('flask')).lb(1).classify('PO').desc("This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist’s fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames."),
    new Ware('Antitoxin','').sell(GP(50).measure('vial')).classify('ZM').desc("A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs."),
    new Ware("Backpack","").sell(2).lb(5).classify("ZC"),
    new Ware('Ball Bearings','').sell(GP(1).measure('1000')).lb(2).classify('ZT').desc("As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn’t need to make the save."),
    new Ware("Barrel","").sell(2).lb(70).classify("ZC"),
    new Ware('Basket','').sell(SP(4)).lb(2).classify("ZC"),
    new Ware('Bedroll','').sell(1).lb(7).classify('ZS'),
    new Ware('Bell, Small','').sell(1).classify('ZT'),
    new Ware("Blanket","").sell(SP(5)).lb(3).classify("ZS"),
    new Ware('Block and tackle','').sell(1).lb(5).classify('ZT').desc("A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift."),
    new Ware('Book','').sell(25).lb(5).classify('B').desc("A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures."),
    new Ware("Bottle, glass",'').sell(2).lb(2).classify("ZC"),
    new Ware('Bucket','').sell(CP(5)).lb(2).classify("ZC"),
    new Ware('Caltrops','').sell(GP(1).measure('20')).lb(2).classify('ZT').desc("As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage. Taking this damage reduces the creature’s walking speed by 10 feet until the creature regains at least 1 hit point. A creature moving through the area at half speed doesn’t need to make the save."),
    new Ware('Candle','').sell(CP(1)).classify('ZL').desc("For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet."),
    new Ware('Case, Crossbow Bolt','').sell(1).lb(1).classify('TS').desc("This wooden case can hold up to twenty crossbow bolts."),
    new Ware('Case, Map or Scroll','').sell(1).lb(1).classify('TS').desc("This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment."),
    new Ware('Chain','').sell(GP(5).measure('10 feet')).lb(10).classify("ZR").desc("A chain has 10 hit points. It can be burst with a successful DC 20 Strength check."),
    new Ware('Chalk','').sell(CP(1).measure('piece')).classify('TC'),
    new Ware('Chest','').sell(5).lb(25).classify('TS'),
    new Ware("Climber's Kit","").sell(25).lb(12).classify("TK").desc("A climber’s kit includes special pitons, boot tips, gloves, and a harness. You can use the climber’s kit as an action to anchor yourself; when you do, you can’t fall more than 25 feet from the point where you anchored yourself, and you can’t climb more than 25 feet away from that point without undoing the anchor."),
    new Ware('Clothes, common','').sell(SP(5)).lb(3).classify('O'),
    new Ware('Clothes, costume','').sell(5).lb(4).classify('OC'),
    new Ware('Clothes, fine','').sell(15).lb(6).classify('OF'),
    new Ware("Clothes, traveler's",'').sell(2).lb(4).classify('O'),
    new Ware('Component Pouch','').sell(25).lb(2).classify('TS').desc("A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell’s description)."),
    new Ware('Crowbar','').sell(2).lb(5).classify('T').desc("Using a crowbar grants advantage to Strength checks where the crowbar’s leverage can be applied."),
    new Ware('Fishing tackle','').sell(1).lb(4).classify('TK').desc("This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting."),
    new Ware('Flask','').sell(CP(2)).lb(1).classify('ZC'),
    new Ware('Grappling Hook','').sell(2).lb(4).classify('T'),
    new Ware('Hammer','').sell(1).lb(3).classify('T'),
    new Ware('Hammer, sledge','').sell(2).lb(10).classify('T'),
    new Ware('Holy water','').sell(GP(25).measure('flask')).lb(1).classify('MP').desc("As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage. A cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot."),
    new Ware("Healer's Kit","").sell(5).lb(3).classify("TK").desc("This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check."),
    new Ware('Hourglass','').sell(25).lb(1).classify('TN'),
    new Ware('Hunting trap','').sell(5).lb(25).classify('ZT').desc("When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature."),
    new Ware('Ink','').sell(GP(10).measure('oz.')).classify('TC'),
    new Ware('Ink pen','').sell(CP(2)).classify('TC'),
    new Ware('Jug','').sell(CP(2)).lb(4).classify('TS'),
    new Ware('Ladder','').sell(SP(1).measure('10-foot')).lb(25).classify('TN'),
    new Ware('Lamp','').sell(SP(5)).lb(1).classify('TL','ZL').desc("A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."),
    new Ware('Lantern, bullseye','').sell(10).lb(2).classify('TL','ZL').desc("A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."),
    new Ware('Lantern, hooded','').sell(5).lb(2).classify('TL','ZL').desc("A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius."),
    new Ware('Lock','').sell(10).lb(1).classify('TS').desc("A key is provided with the lock. Without the key, a creature proficient with thieves’ tools can pick this lock with a successful DC 15 Dexterity check. Your GM may decide that better locks are available for higher prices."),
    new Ware('Magnifying glass','').sell(100).classify('TC').desc("This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed."),
    new Ware('Manacles','').sell(2).lb(6).classify('ZT').desc("These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves’ tools can pick the manacles’ lock with a successful DC 15 Dexterity check. Manacles have 15 hit points."),
    new Ware('Mess kit','').sell(SP(2)).lb(1).classify('TK').desc("This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl."),
    new Ware('Mirror, steel','').sell(5).lb(0.5).classify('T'),
    new Ware('Oil','').sell(SP(1).measure('flask')).lb(1).classify('PO').desc("Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn."),
    new Ware("Pack, Burglar's",'').sell(16).classify('TK').desc("Includes a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."),
    new Ware("Pack, Diplomat's",'').sell(39).classify('TK').desc("Includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap."),
    new Ware("Pack, Dungeoneer's",'').sell(12).classify('TK').desc("Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."),
    new Ware("Pack, Entertainer's",'').sell(40).classify('TK').desc("Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."),
    new Ware("Pack, Explorer's",'').sell(10).classify('TK').desc("Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."),
    new Ware("Pack, Priest's",'').sell(19).classify('TK').desc("Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin."),
    new Ware("Pack, Scholar's",'').sell(40).classify('TK').desc("Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife."),
    new Ware('Paper','').sell(SP(2).measure('sheet')).classify('TC'),
    new Ware('Parchment','').sell(SP(1).measure('sheet')).classify('TC'),
    new Ware('Perfume','').sell(GP(5).measure('vial')).classify('P'),
    new Ware("Pick, miner's",'').sell(2).lb(10).classify('T'),
    new Ware('Pitcher','').sell(CP(2)).lb(4).classify('TS'),
    new Ware('Piton','').sell(CP(5)).lb(0.25).classify('TN'),
    new Ware('Poison, basic','').sell(GP(100).measure('vial')).classify('PS').desc("You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying."),
    new Ware('Pole','').sell(CP(5).measure('10-foot')).lb(7).classify('TN','ZT'),
    new Ware('Pot, iron','').sell(2).lb(10).classify('FE'),
    new Ware('Potion of healing','').sell(50).lb(0.5).classify('MPP').desc("A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action."),
    new Ware('Pouch','').sell(SP(5)).lb(1).classify('TS').desc("A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things."),
    new Ware('Quiver','').sell(1).lb(1).classify('TS','WA').desc("A quiver can hold up to 20 arrows."),
    new Ware('Ram, portable','').sell(4).lb(35).classify('WG').desc("You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check."),
    new Ware('Rations','').sell(SP(5).measure('day')).lb(2).classify('FP').desc("Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts."),
    new Ware('Robes','').sell(1).lb(4).classify('OO'),
    new Ware('Rope, hempen','').sell(GP(1).measure('50 feet')).lb(10).classify('ZR').desc("Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."),
    new Ware('Rope, silk','').sell(GP(10).measure('50 feet')).lb(5).classify('ZR').desc("Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."),
    new Ware('Sack','').sell(CP(1)).lb(0.5).classify("ZC"),
    new Ware("Scale, merchant's",'').sell(5).lb(3).classify('TC').desc("A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth."),
    new Ware('Sealing wax','').sell(SP(5)).classify('TC'),
    new Ware('Shovel','').sell(2).lb(5).classify('T'),
    new Ware('Signal whistle','').sell(CP(5)).classify('T'),
    new Ware('Signet ring','').sell(5).classify('OJ','TC'),
    new Ware('Soap','').sell(CP(2)).classify('T','Z'),
    new Ware('Spellbook','').sell(50).lb(3).classify('BA').desc("Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells."),
    new Ware('Spikes, iron','').sell(GP(1).measure('10')).lb(5).classify('ZT'),
    new Ware('Spyglass','').sell(1000).lb(1).classify('TN').desc("Objects viewed through a spyglass are magnified to twice their size."),
    new Ware('Tankard','').sell(CP(2)).lb(1).classify('ZC'),
    new Ware('Tent, two-person','').sell(2).lb(20).classify('ZS'),
    new Ware('Tinderbox','').sell(SP(5)).lb(1).classify('TL','ZL').desc("This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch—or anything else with abundant, exposed fuel—takes an action. Lighting any other fire takes 1 minute."),
    new Ware('Torch','').sell(CP(1)).lb(1).classify('TL','ZL').desc("A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage."),
    new Ware('Vial','').sell(1).classify('TS'),
    new Ware('Waterskin (full)','').sell(SP(2)).lb(5).classify('FE','TS','ZC'),
    new Ware('Whetstone','').sell(CP(1)).lb(1).classify('T'),

    new Ware('Bit and bridle','').sell(2).lb(1).classify('T'),
    new Ware('Animal Feed','').sell(CP(5).measure('day')).lb(10).classify('F'),
    new Ware('Saddle, Exotic','').sell(60).lb(40).classify('T'),
    new Ware('Saddle, Military','').sell(20).lb(30).classify('T'),
    new Ware('Saddle, Pack','').sell(5).lb(15).classify('T'),
    new Ware('Saddlebags','').sell(4).lb(8).classify('T'),
    new Ware('Stabling','').sell(SP(5).measure('day')).classify('S')
]

let mounts = [
    new Mount('Camel','',480).speed('50 ft.').sell(50).classify('CB'),
    new Mount('Donkey','',420).speed('40 ft.').sell(8).classify('CB'),
    new Mount('Elephant','',1320).speed('40 ft.').sell(200).classify('CB'),
    new Mount('Horse, draft','',540).speed('40 ft.').sell(50).classify('CB'),
    new Mount('Horse, riding','',480).speed('60 ft.').sell(75).classify('CB'),
    new Mount('Mastiff','',195).speed('40 ft.').sell(25).classify('CB'),
    new Mount('Mule','',420).speed('40 ft.').sell(8).classify('CB'),
    new Mount('Pony','',225).speed('40 ft.').sell(30).classify('CB'),
    new Mount('Warhorse','',540).speed('60 ft.').sell(400).classify('CB')
]

let vehicles = [
    new Mount('Carriage','',0).classify('VO').sell(100).speed('--').lb(600),
    new Mount('Cart','',0).classify('VO').sell(15).speed('--').lb(200),
    new Mount('Chariot','',0).classify('VO').sell(250).speed('--').lb(100),
    new Mount('Galley','',0).classify('VN').sell(30000).speed('4 mph'),
    new Mount('Keelboat','',0).classify('VN').sell(3000).speed('1 mph'),
    new Mount('Longship','',0).classify('VN').sell(10000).speed('3 mph'),
    new Mount('Rowboat','',0).classify('VN').sell(50).speed('1.5 mph').lb(100),
    new Mount('Sailing ship','',0).classify('VN').sell(10000).speed('2 mph'),
    new Mount('Sled','',0).classify('VO').sell(20).speed('--').lb(300),
    new Mount('Wagon','',0).classify('VO').sell(35).speed('--').lb(400),
    new Mount('Warship','',0).classify('VN').sell(25000).speed('2.5 mph')
]

let tools = [
    new Ware("Alchemist's supplies",'').sell(50).lb(8).classify('TK'),
    new Ware("Brewer's supplies",'').sell(20).lb(9).classify('TK'),
    new Ware("Calligrapher's supplies",'').sell(10).lb(5).classify('TK'),
    new Ware("Carpenter's tools",'').sell(8).lb(6).classify('TK'),
    new Ware("Cartographer's tools",'').sell(15).lb(6).classify('TK'),
    new Ware("Cobbler's tools",'').sell(5).lb(5).classify('TK'),
    new Ware("Cook's utensils",'').sell(1).lb(8).classify('TK'),
    new Ware("Disguise kit",'').sell(25).lb(3).classify('TK').desc("This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise."),
    new Ware("Forgery kit",'').sell(15).lb(5).classify('TK').desc("This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document."),
    new Ware("Glassblower's tools",'').sell(30).lb(5).classify('TK'),
    new Ware("Herbalism kit",'').sell(5).lb(3).classify('TK').desc("This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing."),
    new Ware("Jeweler's tools",'').sell(25).lb(2).classify('TK'),
    new Ware("Leatherworker's tools",'').sell(5).lb(5).classify('TK'),
    new Ware("Mason's tools",'').sell(10).lb(8).classify('TK'),
    new Ware("Navigator's tools",'').sell(25).lb(2).classify('TK','TN').desc("This set of instruments is used for navigation at sea. Proficiency with navigator’s tools lets you chart a ship’s course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea."),
    new Ware("Painter's supplies",'').sell(10).lb(5).classify('TK'),
    new Ware("Poisoner's kit",'').sell(50).lb(2).classify('TK').desc("A poisoner’s kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons."),
    new Ware("Potter's tools",'').sell(10).lb(3).classify('TK'),
    new Ware("Smith's tools",'').sell(20).lb(8).classify('TK'),
    new Ware("Thieves' tools",'').sell(25).lb(1).classify('TK').desc("This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks."),
    new Ware("Tinker's tools",'').sell(50).lb(10).classify('TK'),
    new Ware("Weaver's tools",'').sell(1).lb(5).classify('TK'),
    new Ware("Woodcarver's tools",'').sell(1).lb(5).classify('TK'),

    new Ware("Dice set",'').sell(SP(1)).classify('GB'),
    new Ware("Playing card set",'').sell(SP(5)).classify('GC'),

    new Ware("Bagpipes",'').sell(30).lb(6).classify('TM'),
    new Ware("Drum",'').sell(6).lb(3).classify('TM'),
    new Ware("Dulcimer",'').sell(25).lb(10).classify('TM'),
    new Ware("Flute",'').sell(2).lb(1).classify('TM'),
    new Ware("Lute",'').sell(35).lb(2).classify('TM'),
    new Ware("Lyre",'').sell(30).lb(2).classify('TM'),
    new Ware("Horn",'').sell(3).lb(2).classify('TM'),
    new Ware("Pan flute",'').sell(12).lb(2).classify('TM'),
    new Ware("Shawm",'').sell(2).lb(1).classify('TM'),
    new Ware("Viol",'').sell(30).lb(1).classify('TM')
]

let expenses = [
    new Ware('Wretched Lifestyle','').sell(CP(0).measure('day')).classify('SL').desc("You live in inhumane conditions. With no place to call home, you shelter wherever you can, sneaking into barns, huddling in old crates, and relying on the good graces of people better off than you. A wretched lifestyle presents abundant dangers. Violence, disease, and hunger follow you wherever you go. Other wretched people covet your armor, weapons, and adventuring gear, which represent a fortune by their standards. You are beneath the notice of most people."),
    new Ware('Squalid Lifestyle','').sell(SP(1).measure('day')).classify('SL').desc("You live in a leaky stable, a mud-floored hut just outside town, or a vermin-infested boarding house in the worst part of town. You have shelter from the elements, but you live in a desperate and often violent environment, in places rife with disease, hunger, and misfortune. You are beneath the notice of most people, and you have few legal protections. Most people at this lifestyle level have suffered some terrible setback. They might be disturbed, marked as exiles, or suffer from disease."),
    new Ware('Poor Lifestyle','').sell(SP(2).measure('day')).classify('SL').desc("A poor lifestyle means going without the comforts available in a stable community. Simple food and lodgings, threadbare clothing, and unpredictable conditions result in a sufficient, though probably unpleasant, experience. Your accommodations might be a room in a flophouse or in the common room above a tavern. You benefit from some legal protections, but you still have to contend with violence, crime, and disease. People at this lifestyle level tend to be unskilled laborers, costermongers, peddlers, thieves, mercenaries, and other disreputable types."),
    new Ware('Modest Lifestyle','').sell(GP(1).measure('day')).classify('SL').desc("A modest lifestyle keeps you out of the slums and ensures that you can maintain your equipment. You live in an older part of town, renting a room in a boarding house, inn, or temple. You don’t go hungry or thirsty, and your living conditions are clean, if simple. Ordinary people living modest lifestyles include soldiers with families, laborers, students, priests, hedge wizards, and the like."),
    new Ware('Comfortable Lifestyle','').sell(GP(2).measure('day')).classify('SL').desc("Choosing a comfortable lifestyle means that you can afford nicer clothing and can easily maintain your equipment. You live in a small cottage in a middle-class neighborhood or in a private room at a fine inn. You associate with merchants, skilled tradespeople, and military officers."),
    new Ware('Wealthy Lifestyle','').sell(GP(4).measure('day')).classify('SL').desc("Choosing a wealthy lifestyle means living a life of luxury, though you might not have achieved the social status associated with the old money of nobility or royalty. You live a lifestyle comparable to that of a highly successful merchant, a favored servant of the royalty, or the owner of a few small businesses. You have respectable lodgings, usually a spacious home in a good part of town or a comfortable suite at a fine inn. You likely have a small staff of servants."),
    new Ware('Aristocratic Lifestyle','').sell(GP(10).measure('day')).classify('SL').desc("You live a life of plenty and comfort. You move in circles populated by the most powerful people in the community. You have excellent lodgings, perhaps a townhouse in the nicest part of town or rooms in the finest inn. You dine at the best restaurants, retain the most skilled and fashionable tailor, and have servants attending to your every need. You receive invitations to the social gatherings of the rich and powerful, and spend evenings in the company of politicians, guild leaders, high priests, and nobility. You must also contend with the highest levels of deceit and treachery. The wealthier you are, the greater the chance you will be drawn into political intrigue as a pawn or participant."),

    new Ware('Inn Stay (per day)','').sell(CP(7).measure('Squalid')).sell(SP(1).measure('Poor')).sell(SP(5).measure('Modest')).sell(SP(8).measure('Comfortable')).sell(GP(2).measure('Wealthy')).sell(GP(4).measure('Aristocratic')).classify('SL'),
    new Ware('Meals (per day)','').sell(CP(3).measure('Squalid')).sell(CP(6).measure('Poor')).sell(SP(3).measure('Modest')).sell(SP(5).measure('Comfortable')).sell(SP(8).measure('Wealthy')).sell(GP(2).measure('Aristocratic')).classify('SL'),

    new Ware('Coach cab between towns','').sell(CP(3).measure('mile')).classify('SV'),
    new Ware('Coach cab within a city','').sell(CP(1)).classify('SV'),

    new Ware('Hireling, skilled','').sell(GP(2).measure('day')).classify('S'),
    new Ware('Hireling, untrained','').sell(SP(2).measure('day')).classify('S'),
    new Ware('Messenger','').sell(CP(2).measure('mile')).classify('S'),
    new Ware('Road or gate toll','').sell(CP(1)).classify('SV'),
    new Ware("Ship's passage",'').sell(SP(1).measure('mile')).classify('SV')
]

let foods = [
    new Ware('Ale','').sell(SP(2).measure('gallon')).sell(CP(4).measure('mug')).classify('FA'),
    new Ware('Banquet','').sell(GP(10).measure('person')).classify('FP','SL'),
    new Ware('Bread','').sell(CP(2).measure('loaf')).classify('FP00'),
    new Ware('Cheese','').sell(SP(1).measure('hunk')).classify('FD'),
    new Ware('Meat','').sell(SP(3).measure('chunk')).classify('FM'),
    new Ware('Wine, Common','').sell(SP(2).measure('pitcher')).classify('FA'),
    new Ware('Wine, Fine','').sell(GP(10).measure('bottle')).classify('FA')
]

let tradegoods = [
    new Ware('Wheat','').sell(CP(1).measure('lb.')).classify('RF','FG'),
    new Ware('Flour','').sell(CP(2).measure('lb.')).classify('RF','FG'),
    new Ware('Chicken','').sell(CP(2)).classify('RV','CB'),
    new Ware('Salt','').sell(CP(5).measure('lb.')).classify('RF','FS0'),
    new Ware('Iron','').sell(SP(1).measure('lb.')).classify('RM'),
    new Ware('Canvas','').sell(SP(1).measure('sq. yd.')).classify('RT'),
    new Ware('Copper','').sell(SP(5).measure('lb.')).classify('RM'),
    new Ware('Cotton Cloth','').sell(SP(5).measure('sq. yd.')).classify('RT'),
    new Ware('Ginger, Raw','').sell(GP(1).measure('lb.')).classify('RF','FS'),
    new Ware('Goat','').sell(1).classify('CB','RV'),
    new Ware('Cinnamon','').sell(GP(2).measure('lb.')).classify('FS','RF'),
    new Ware('Black Pepper','').sell(GP(2).measure('lb.')).classify('FS','RF'),
    new Ware('Sheep','').sell(2).classify('CB','RV'),
    new Ware('Cloves','').sell(GP(3).measure('lb.')).classify('RF','FS'),
    new Ware('Pig','').sell(3).classify('CB','RV'),
    new Ware('Silver','').sell(GP(5).measure('lb.')).classify('RM'),
    new Ware('Linen','').sell(GP(5).measure('sq. yd.')).classify('RT'),
    new Ware('Silk','').sell(GP(10).measure('sq. yd.')).classify('RT'),
    new Ware('Cow','').sell(10).classify('CB','RV'),
    new Ware('Saffron','').sell(GP(15).measure('lb.')).classify('RF','FS'),
    new Ware('Ox','').sell(15).classify('CB','RV'),
    new Ware('Gold','').sell(GP(50).measure('lb.')).classify('RM'),
    new Ware('Platinum','').sell(GP(500).measure('lb.')).classify('RM')
]

sb.multistock(weapons).multistock(armors).multistock(gear).multistock(mounts).multistock(vehicles).multistock(tools).multistock(expenses).multistock(foods).multistock(tradegoods).write();