'use client';

import {
  MOVEMENT_TYPES_OPTIONS,
  NEW_MOVEMENT_CATEGORY_OPTIONS,
} from '@/constants';
import { Form, Formik, FormikHelpers } from 'formik';
import Select from '../atoms/Select';

interface NewMovementI {
  type: 'income' | 'expense' | 'inversion';
  category: string;
  amount: number | '';
  date: Date;
}

const NEW_MOVEMENT_INITIAL_VALUES: NewMovementI = {
  type: MOVEMENT_TYPES_OPTIONS[0].value,
  category:
    NEW_MOVEMENT_CATEGORY_OPTIONS[MOVEMENT_TYPES_OPTIONS[0].value][0].value,
  amount: '',
  date: new Date(),
};

const NewMovementForm = () => {
  const handleSubmit = async (
    values: NewMovementI,
    actions: FormikHelpers<NewMovementI>
  ) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={NEW_MOVEMENT_INITIAL_VALUES}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values }) => (
        <Form className='grid grid-cols-2 gap-4 w-60'>
          <Select
            name='type'
            label='movement'
            active={values.type}
            options={MOVEMENT_TYPES_OPTIONS}
          />
          <Select
            name='category'
            label='category'
            active={values.category}
            options={NEW_MOVEMENT_CATEGORY_OPTIONS[values.type]}
          />
        </Form>
      )}
    </Formik>
  );
};

export default NewMovementForm;
