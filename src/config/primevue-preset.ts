import Aura from '@primevue/themes/aura';
import { definePreset } from "@primevue/themes";
import colors from './colors';

const CustomPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: colors['50'],
            100: colors['100'],
            200: colors['200'],
            300: colors['300'],
            400: colors['400'],
            500: colors['500'],
            600: colors['600'],
            700: colors['700'],
            800: colors['800'],
            900: colors['900'],
            950: colors['950']
        }
    }
});

export default CustomPreset