// tslint:disable:object-literal-sort-keys
export type Lang = 'fr' | 'en';

export const _default = {
    'player.skill': 'Skill',
    'player.stamina': 'Stamina',
    'player.luck': 'Luck',
    adventureSheet: 'Adventure Sheet',
};

export type LocaleType = { readonly [lang in Lang]: Readonly<typeof _default> };

const Locale: LocaleType = {
    fr: {
        'player.skill': 'Habileté',
        'player.stamina': 'Endurance',
        'player.luck': 'Chance',
        adventureSheet: `Feuille d'Aventure`,
    },
    en: _default,
};

export default Locale;
