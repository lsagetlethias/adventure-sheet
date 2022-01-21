import { createContext } from 'react';
import { _default } from './locale';

export const LocaleContext = createContext(_default);
export const LocaleConsumer = LocaleContext.Consumer;
export const LocaleProvider = LocaleContext.Provider;
