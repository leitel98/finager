'use client';

import { MOVEMENT_TYPES } from '@/constants';
import { Form, Formik, FormikHelpers } from 'formik';
import Select from '../atoms/Select';

interface NewMovementI {
  type: string;
  category: string;
  amount: number | '';
  date: Date;
}

const NEW_MOVEMENT_INITIAL_VALUES: NewMovementI = {
  type: '',
  category: '',
  amount: '',
  date: new Date(),
};

const NewMovementForm = () => {
  return (
    <Formik
      initialValues={NEW_MOVEMENT_INITIAL_VALUES}
      onSubmit={(
        values: NewMovementI,
        actions: FormikHelpers<NewMovementI>
      ) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ values }) => (
        <Form className='grid grid-cols-2 gap-4 w-60'>
          <Select
            name='type'
            label='movement'
            active={values.type}
            options={MOVEMENT_TYPES}
          />
        </Form>
      )}
    </Formik>
  );
};

export default NewMovementForm;
