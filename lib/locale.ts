// tslint:disable:object-literal-sort-keys
export type Lang = 'fr' | 'en';

export const _default = {
    'player.skill': 'Skill',
    'player.stamina': 'Stamina',
    'player.luck': 'Luck',
    adventureSheet: 'Adventure__sheet)', // because "Barbarian" font
    'player.magic': 'Magic',
    'player.spells': 'Magic Spells',
    'player.items': 'Items',
    'player.gold': 'Gold',
    'monster.skill': 'Skill',
    'monster.stamina': 'Stamina',
    'monster.name': 'Monster',
};

export type LocaleType = { readonly [lang in Lang]: Readonly<typeof _default> };

const Locale: LocaleType = {
    fr: {
        'player.skill': 'Habileté',
        'player.stamina': 'Endurance',
        'player.luck': 'Chance',
        adventureSheet: `Feuille__d_aventure)`,
        'player.magic': 'Magie',
        'player.spells': 'Sortillèges',
        'player.items': 'Inventaire',
        'player.gold': 'Or',
        'monster.skill': 'Habileté',
        'monster.stamina': 'Endurance',
        'monster.name': 'Monstre',
    },
    en: _default,
};

export default Locale;
