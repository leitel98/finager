const INCOME_CATEGORIES = ['salary', 'bonus', 'gift', 'other'];

export const INCOME_CATEGORIES_FILTERS: Record<string, boolean> =
  INCOME_CATEGORIES.reduce((acc: Record<string, boolean>, category: string) => {
    acc[category] = true;
    return acc;
  }, {});
