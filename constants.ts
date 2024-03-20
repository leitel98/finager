import { SelectOptionsT } from './types';

export const MOVEMENT_TYPES_OPTIONS: SelectOptionsT[] = [
  { label: 'expense', value: 'expense' },
  { label: 'income', value: 'income' },
  { label: 'inversion', value: 'inversion' },
];

const INCOME_CATEGORIES = ['salary', 'bonus', 'gift', 'other'];
const EXPENSES_CATEGORIES = [
  'housing',
  'utilities',
  'car',
  'pets',
  'groceries',
  'pharma',
  'leisure',
  'subscriptions',
  'other',
];

export const INCOME_CATEGORIES_OPTIONS: SelectOptionsT[] =
  INCOME_CATEGORIES.map((category) => ({
    label: category,
    value: category,
  }));

export const EXPENSES_CATEGORIES_OPTIONS: SelectOptionsT[] =
  EXPENSES_CATEGORIES.map((category) => ({
    label: category,
    value: category,
  }));

export const INVERSION_CATEGORIES_OPTIONS: SelectOptionsT[] = [
  { label: 'inversion', value: 'inversion' },
];

export const NEW_MOVEMENT_CATEGORY_OPTIONS: Record<string, SelectOptionsT[]> = {
  income: INCOME_CATEGORIES_OPTIONS,
  expense: EXPENSES_CATEGORIES_OPTIONS,
  inversion: INVERSION_CATEGORIES_OPTIONS,
};

export const INCOME_CATEGORIES_FILTERS: Record<string, boolean> =
  INCOME_CATEGORIES.reduce((acc: Record<string, boolean>, category: string) => {
    acc[category] = true;
    return acc;
  }, {});

export const EXPENSES_CATEGORIES_FILTERS: Record<string, boolean> =
  EXPENSES_CATEGORIES.reduce(
    (acc: Record<string, boolean>, category: string) => {
      acc[category] = true;
      return acc;
    },
    {}
  );
