import React from 'react';
import { FaStripe, FaLocationArrow } from 'react-icons/fa';
import { BiMessageRounded, BiCopyright } from 'react-icons/bi';

// let's have an exception here, and do some logic and UI mixing. it's not considered mixing
// it's only some icons.

const INIT_BRAND = [
    {
        type: 'logo',
        src: <FaStripe className="icon" />,
    },
    {
        type: 'location',
        icon: <FaLocationArrow className="icon" />,
        currentLocation: 'Romania',
        allCountries: [
            { country: '', flag: '' },
            { country: '', flag: '' },
            { country: '', flag: '' },
            { country: '', flag: '' },
            { country: '', flag: '' },
            { country: '', flag: '' },
            { country: '', flag: '' },
        ],
    },
    {
        type: 'language',
        icon: <BiMessageRounded className="icon" />,
        currentLanguage: 'English',
        allLanguages: [
            { abbr: '', language: '' },
            { abbr: '', language: '' },
            { abbr: '', language: '' },
            { abbr: '', language: '' },
            { abbr: '', language: '' },
            { abbr: '', language: '' },
        ],
    },
    {
        type: 'commerce',
        icon: <BiCopyright className="icon" />,
        text: 'Stripe, Inc.',
    },
];

export default INIT_BRAND;
