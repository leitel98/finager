'use client';

import { MOVEMENT_TYPES } from '@/constants';
import { Form, Formik } from 'formik';
import Select from '../atoms/Select';

const NewMovementForm = () => {
  return (
    <Formik
      initialValues={{
        type: '',
        category: '',
        date: new Date(),
        amount: '',
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }) => (
        <Form className='grid grid-cols-2 gap-4 w-60'>
          <Select
            name='type'
            label='movement type'
            active={values.type}
            options={MOVEMENT_TYPES}
          />
        </Form>
      )}
    </Formik>
  );
};

export default NewMovementForm;
