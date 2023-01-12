import { createContext } from 'react';
import { defaultConfig } from '../config/api';

export const AppConfigContext = createContext(defaultConfig);
AppConfigContext.displayName = 'AppConfigContext';