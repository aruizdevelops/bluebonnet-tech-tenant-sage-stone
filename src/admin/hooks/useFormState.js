'use client';

import { useState, useCallback, useRef } from 'react';

/**
 * Lightweight form state management hook with validation and dirty tracking.
 *
 * @param {Object} initialValues - Initial form values
 * @param {Function} validate - Validation function: (values) => { fieldName: 'Error message' } or {}
 * @returns {Object} Form state and handlers
 */
export function useFormState(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const initialRef = useRef(initialValues);

  const isDirty = JSON.stringify(values) !== JSON.stringify(initialRef.current);

  const handleChange = useCallback((field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear field error on change
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const handleBlur = useCallback((field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  const handleSubmit = useCallback((onSubmit) => {
    const validationErrors = validate ? validate(values) : {};
    setErrors(validationErrors);
    // Mark all fields as touched
    const allTouched = {};
    for (const key of Object.keys(values)) {
      allTouched[key] = true;
    }
    setTouched(allTouched);

    if (Object.keys(validationErrors).length === 0) {
      return onSubmit(values);
    }
    return null;
  }, [values, validate]);

  const reset = useCallback((newValues) => {
    const vals = newValues || initialRef.current;
    setValues(vals);
    setErrors({});
    setTouched({});
    initialRef.current = vals;
  }, []);

  const setFormValues = useCallback((newValues) => {
    setValues(newValues);
    initialRef.current = newValues;
    setErrors({});
    setTouched({});
  }, []);

  return {
    values,
    errors,
    touched,
    isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFormValues,
  };
}
