/**     The Waterdeep Trade Taxonomy (WTT) - A collaborative work of classification by the various trade guilds of Waterdeep as
*       a means to standardize transactional records, systems of inventory, and boundaries of interest between different guilds.
*/
export default {
    "A": "Armor",
        "AA": "Arms and Hands",
        "AB": "Full-Body",    
        "AC": "Chest and Torso",
        "AH": "Head and Neck",
        "AL": "Legs and Feet",
        "AN": "Non-Humanoid",
        "AS": "Shields",
        "AW": "Wing and other Appendage",

    "B": "Books and Other Written Materials",
        "BA": "Arcana",
        "BE": "Encyclopedias and Reference Works",
        "BF": "Fiction",
            "BF0": "Children's Stories and Nursery Rhymes",
            "BF1": "Great Literature",
            "BF2": "Drama",
            "BF3": "Tragedy",
            "BF4": "Comedy",
            "BF5": "Horror",
            "BF6": "Speculative Fiction",
            "BF7": "Folklore, Fables, and Mythology",
            "BF8": "Romance",
            "BF9": "Poetry",
        "BG": "Geography",
        "BH": "History",
        "BL": "Linguistics",
        "BM": "Music",
        "BP": "Politics and Law",
        "BR": "Religion and Philosophy",
        "BS": "Science",
        "BT": "Technology and Engineering",
        "BV": "Current Events",

    "C": "Creatures",
        "CA": "Abberation",
        "CB": "Beast",
        "CC": "Celestial",
        "CD": "Dragon",
        "CE": "Elemental",
        "CF": "Fiend",
        "CG": "Giant",
        "CH": "Humanoid",
        "CM": "Monstrosity",
        "CN": "Construct",
        "CO": "Ooze",
        "CP": "Plant",
        "CU": "Undead",
        "CY": "Fey",

    // D currently unassigned

    "E": "Expressive Works",
        "EC": "Carpentry and Woodworking",
        "ED": "Drawing",
        "EP": "Painting",
        "ES": "Sculpture",
        "EW": "Weaving",

    "F": "Foodstuffs",
        "FA": "Alcoholic Drinks",
        "FC": "Fish and Seafood",
        "FD": "Dairy",
        "FE": "Equipment, Dishes, and Utensils",
        "FF": "Fruits",
        "FG": "Grains and Flours",
        "FL": "Non-Alcholic Drinks",
        "FM": "Meat, Game, and Poultry",
        "FN": "Nuts",
        "FP": "Prepared Dishes",
            "FP0": "Baked Goods",
                "FP01": "Baked Goods - Bread",
                "FP02": "Baked Goods - Pies and Pastries",
            "FP1": "Soups and Stews",
                "FP11": "Soups and Stews - Cold",
                "FP12": "Soups and Stews - Hot",
        "FS": "Spices and Seasonings",
            "FS0": "Salts",
        "FV": "Vegetables",

    "G": "Games, Leisure, and Vice",
        "GB": "Game Boards",
        "GC": "Card Games",
        "GD": "Drugs",
        "GG": "Gambling Paraphernalia",
        "GP": "Puzzles",
        "GT": "Toys",

    "H": "Housewares and Furniture",

    // I currently unassigned.

    // J currently unassigned.

    // K currently unassigned.

    "L": "Land and Construction",
        "LC": "Commercial Property",
        "LE": "Empty Land",
        "LR": "Residential Property",

    // M designated as meta-classification for magic items which would otherwise fit in other categories.

    // N currently unassigned.

    "O": "Outfits and Clothing",
        "OB": "Boots and Footwear",
        "OC": "Costuming and Uniforms",
        "OF": "Formal Attire",
        "OG": "Gloves and Handwear",
        "OH": "Headwear",
        "OJ": "Jewelry",
        "OL": "Pants and Legwear",
        "OO": "Outerwear",
        "OS": "Shirts and Tunics",
        "OU": "Undergarments",

    "P": "Alchemical Materials",
        "PE": "Equipment",
        "PI": "Ingredients and Reagents",
        "PO": "Oils",
        "PP": "Potions", // This category should only be used for technically mundane substances; true magic potions should be classified under 'MPP'.
        "PS": "Poisons",
            "PS0": "Ingested Poisons",
            "PS1": "Inhaled Poisons",
            "PS2": "Contact Poisons",

    // Q currently unassigned.

    "R": "Raw Materials and Trade Goods",
        "RC": "Crystals and Gems",
        "RL": "Leathers and Anatomical Materials",
        "RM": "Metals",
        "RS": "Stones",
        "RT": "Textiles",
        "RW": "Woods",

    "S": "Services",
        "SA": "Artistic",
            "SA0": "Performance",
                "SA01": "Performance - Dramatic",
                "SA02": "Performance - Comedic",
                "SA03": "Performance - Dance",
                "SA04": "Performance - Speaking",
                "SA05": "Performance - Musical",
        "SE": "Enchantment and Spellcasting",
        "SI": "Illegal, Illicit, or Taboo",
            "SI0": "Prostitution",
            "SI1": "Clandestine Transportation or Storage",
            "SI2": "Violence",
            "SI3": "Information",
            "SI4": "Theft and Arson",
        "SL": "Lodging, Room and Board",
        "SM": "Medical",
        "SR": "Religious Services and Blessings",
        "SS": "Smithing",
        "ST": "Training and Teaching",
        
    "T": "Tools",
        "TA": "Artisan Tools (Individual)",
        "TB": "Tools of Construction and Destruction",
        "TC": "Clerical Tools",
        "TK": "Tool Kits/Sets",
        "TL": "Lighting and Illumination",
        "TM": "Musical Instruments",
        "TN": "Navigational and Timekeeping Aids",
        "TS": "Storage and Transport",

    // U currently unassigned.

    "V": "Vehicles",
        "VA": "Airborne",
        "VI": "Interplanar",
        "VM": "Multipurpose",
        "VN": "Nautical",
        "VO": "Overland",
        "VU": "Underground",

    "W": "Weaponry",
        "WA": "Ammunition",
        "WB": "Blade Weapons",
            "WB0": "Swords",
            "WB1": "Knives and Daggers",
        "WC": "Clubs and Blunt Weaponry",
        "WF": "Foci and Symbols",
            "WF0": "Arcane Foci",
            "WF1": "Druidic Foci",
            "WF2": "Holy Symbols",
        "WG": "Siege Weaponry",
        "WH": "Hammers",
        "WP": "Polearms",
            "WP0": "Spears and Javelins",
        "WR": "Ranged Weapons",
            "WR0": "Archery",
            "WR1": "Firearms",
        "WT": "Thrown Weapons",
        "WV": "Staves",
        "WW": "Whips",
        "WX": "Axes",
        "WZ": "Placeholder",

    // X designated as meta-classification for futuristic, anachronistic, or otherwise incongruent items which would otherwise fit in other categories.
    // In cases where an item is fit to be meta-classified under both X and M, the proper order is 'MX'.

    // Y currently unassigned.

    "Z": "Adventuring Supplies",
        "ZC": "Containers",
        "ZL": "Lighting and Illumination",
        "ZM": "Medicines",
        "ZR": "Ropes and Chains",
        "ZS": "Sheltering Tools and Materials",
        "ZT": "Traps and Tricks"
}