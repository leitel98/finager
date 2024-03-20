import { SelectOptionsT } from '@/types';
import { ErrorMessage, Field } from 'formik';
import { FC } from 'react';

interface SelectI {
  options: SelectOptionsT[];
  active: any;
  name: string;
  label: string;
}

const Select: FC<SelectI> = ({ options, active, name, label }) => {
  return (
    <div className='flex flex-col'>
      <label className='capitalize whitespace-nowrap' htmlFor={name}>
        {label}
      </label>
      <Field
        as='select'
        id={name}
        name={name}
        className='border border-slate-700 px-3 py-1.5 rounded-md cursor-pointer capitalize focus:outline-none'
      >
        {options.map((type) => (
          <option
            key={type.value}
            value={type.value}
            className={`${
              active === type.value && 'bg-emerald-600 text-white'
            } capitalize`}
          >
            {type.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component='div'
        className='text-red-500 text-sm'
      />
    </div>
  );
};

export default Select;
