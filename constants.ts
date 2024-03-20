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
