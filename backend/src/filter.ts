const words = [
  "@$$",
  "*damn",
  "*dyke",
  "*fuck*",
  "*shit*",
  "ahole",
  "amcik",
  "andskota",
  "anus",
  "arschloch",
  "arse*",
  "ash0le",
  "ash0les",
  "asholes",
  "Ass Monkey",
  "ass",
  "ass",
  "Assface",
  "assh0le",
  "assh0lez",
  "asshole",
  "asshole",
  "assholes",
  "assholz",
  "assrammer",
  "asswipe",
  "ayir",
  "azzhole",
  "b!+ch",
  "b!tch",
  "b00b*",
  "b00bs",
  "b17ch",
  "b1tch",
  "bassterds",
  "bastard",
  "bastard",
  "bastards",
  "bastardz",
  "basterds",
  "basterdz",
  "bi+ch",
  "bi7ch",
  "Biatch",
  "bitch",
  "bitch",
  "bitch*",
  "bitches",
  "Blow Job",
  "blowjob",
  "boffing",
  "boiolas",
  "bollock*",
  "boobs",
  "breasts",
  "buceta",
  "butt-pirate",
  "butthole",
  "buttwipe",
  "c0ck",
  "c0ck",
  "c0cks",
  "c0k",
  "cabron",
  "Carpet Muncher",
  "cawk",
  "cawk",
  "cawks",
  "cazzo",
  "chink",
  "chraa",
  "chuj",
  "cipa",
  "clit",
  "Clit",
  "clits",
  "cnts",
  "cntz",
  "cock-head",
  "cock-sucker",
  "cock",
  "cock",
  "Cock*",
  "cockhead",
  "cocks",
  "CockSucker",
  "crap",
  "cum",
  "cum",
  "cunt",
  "cunt",
  "cunt*",
  "cunts",
  "cuntz",
  "d4mn",
  "daygo",
  "dego",
  "dick",
  "dick*",
  "dike*",
  "dild0",
  "dild0s",
  "dildo",
  "dildo",
  "dildos",
  "dilld0",
  "dilld0s",
  "dirsa",
  "dominatricks",
  "dominatrics",
  "dominatrix",
  "dupa",
  "dyke",
  "dziwka",
  "ejackulate",
  "ejakulate",
  "Ekrem*",
  "Ekto",
  "enculer",
  "enema",
  "f u c k e r",
  "f u c k",
  "faen",
  "fag",
  "fag*",
  "fag1t",
  "faget",
  "fagg1t",
  "faggit",
  "faggot",
  "fagit",
  "fags",
  "fagz",
  "faig",
  "faigs",
  "fanculo",
  "fanny",
  "fart",
  "fatass",
  "fcuk",
  "feces",
  "feg",
  "Felcher",
  "ficken",
  "fitt*",
  "Flikker",
  "flipping the bird",
  "foreskin",
  "Fotze",
  "Fu(*",
  "fuck",
  "fuck",
  "fucker",
  "fuckin",
  "fucking",
  "fucks",
  "Fudge Packer",
  "fuk",
  "fuk",
  "fuk*",
  "Fukah",
  "Fuken",
  "fuker",
  "Fukin",
  "Fukk",
  "Fukkah",
  "Fukken",
  "Fukker",
  "Fukkin",
  "futkretzn",
  "fux0r",
  "g00k",
  "gay",
  "gay",
  "gayboy",
  "gaygirl",
  "gays",
  "gayz",
  "God-damned",
  "gook",
  "guiena",
  "h00r",
  "h0ar",
  "h0r",
  "h0re",
  "h4x0r",
  "hell",
  "hells",
  "helvete",
  "hoar",
  "hoer",
  "hoer*",
  "honkey",
  "hoor",
  "hoore",
  "hore",
  "Huevon",
  "hui",
  "injun",
  "jackoff",
  "jackoff",
  "jap",
  "japs",
  "jerk-off",
  "jisim",
  "jism",
  "jiss",
  "jizm",
  "jizz",
  "jizz",
  "kanker*",
  "kawk",
  "kike",
  "klootzak",
  "knob",
  "knobs",
  "knobz",
  "knulle",
  "kraut",
  "kuk",
  "kuksuger",
  "kunt",
  "kunts",
  "kuntz",
  "Kurac",
  "kurwa",
  "kusi*",
  "kyrpa*",
  "l3i+ch",
  "l3itch",
  "lesbian",
  "Lesbian",
  "lesbo",
  "Lezzian",
  "Lipshits",
  "Lipshitz",
  "mamhoon",
  "masochist",
  "masokist",
  "massterbait",
  "masstrbait",
  "masstrbate",
  "masterbaiter",
  "masterbat*",
  "masterbat3",
  "masterbate",
  "masterbates",
  "masturbat*",
  "masturbate",
  "merd*",
  "mibun",
  "mofo",
  "monkleigh",
  "Motha Fucker",
  "Motha Fuker",
  "Motha Fukkah",
  "Motha Fukker",
  "Mother Fucker",
  "Mother Fukah",
  "Mother Fuker",
  "Mother Fukkah",
  "Mother Fukker",
  "mother-fucker",
  "motherfucker",
  "mouliewop",
  "muie",
  "mulkku",
  "muschi",
  "Mutha Fucker",
  "Mutha Fukah",
  "Mutha Fuker",
  "Mutha Fukkah",
  "Mutha Fukker",
  "n1gr",
  "nastt",
  "nazi",
  "nazis",
  "nepesaurio",
  "nigga",
  "nigger;",
  "nigger",
  "nigger*",
  "nigur;",
  "niiger;",
  "niigr;",
  "nutsack",
  "orafis",
  "orgasim;",
  "orgasm",
  "orgasum",
  "oriface",
  "orifice",
  "orifiss",
  "orospu",
  "p0rn",
  "packi",
  "packie",
  "packy",
  "paki",
  "pakie",
  "paky",
  "paska*",
  "pecker",
  "peeenus",
  "peeenusss",
  "peenus",
  "peinus",
  "pen1s",
  "penas",
  "penis-breath",
  "penis",
  "penus",
  "penuus",
  "perse",
  "Phuc",
  "phuck",
  "Phuck",
  "Phuk",
  "Phuker",
  "Phukker",
  "picka",
  "pierdol*",
  "pillu*",
  "pimmel",
  "pimpis",
  "piss*",
  "pizda",
  "polac",
  "polack",
  "polak",
  "Poonani",
  "poontsee",
  "poop",
  "porn",
  "pr0n",
  "pr1c",
  "pr1ck",
  "pr1k",
  "preteen",
  "pula",
  "pule",
  "pusse",
  "pusse",
  "pussee",
  "pussy",
  "pussy",
  "puta",
  "puto",
  "puuke",
  "puuker",
  "qahbeh",
  "queef*",
  "queer",
  "queers",
  "queerz",
  "qweers",
  "qweerz",
  "qweir",
  "rautenberg",
  "recktum",
  "rectum",
  "retard",
  "s.o.b.",
  "sadist",
  "scank",
  "schaffer",
  "scheiss*",
  "schlampe",
  "schlong",
  "schmuck",
  "screw",
  "screwing",
  "scrotum",
  "semen",
  "sex",
  "sexy",
  "sh!+",
  "sh!t",
  "Sh!t",
  "sh!t*",
  "sh1t",
  "sh1ter",
  "sh1ts",
  "sh1tter",
  "sh1tz",
  "sharmuta",
  "sharmute",
  "shemale",
  "shi+",
  "shipal",
  "shit",
  "shit",
  "shits",
  "shitter",
  "Shitty",
  "Shity",
  "shitz",
  "shiz",
  "Shyt",
  "Shyte",
  "Shytty",
  "Shyty",
  "skanck",
  "skank",
  "skankee",
  "skankey",
  "skanks",
  "Skanky",
  "skribz",
  "skurwysyn",
  "slut",
  "slut",
  "sluts",
  "Slutty",
  "slutz",
  "smut",
  "son-of-a-bitch",
  "sphencter",
  "spic",
  "spierdalaj",
  "splooge",
  "suka",
  "teets",
  "teez",
  "testical",
  "testicle",
  "testicle*",
  "tit",
  "tits",
  "titt",
  "titt*",
  "turd",
  "twat",
  "va1jina",
  "vag1na",
  "vagiina",
  "vagina",
  "vaj1na",
  "vajina",
  "vittu",
  "vullva",
  "vulva",
  "w00se",
  "w0p",
  "wank",
  "wank*",
  "wetback*",
  "wh00r",
  "wh0re",
  "whoar",
  "whore",
  "whore",
  "wichser",
  "wop*",
  "xrated",
  "xxx",
  "yed",
  "zabourah",
];

export function hasBadWord(message: string) {
  return words.some((word) => {
    // regex from https://stackoverflow.com/a/35478115/567983
    const w = word.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    return new RegExp(`\\b(${w})\\b`).test(message);
  });
}
