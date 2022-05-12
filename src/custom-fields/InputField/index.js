import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { errors, touched } = form;
  const { name } = field;

  const showError = errors[name] && touched[name];

  //   const { name, value, onChange, onBlur } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        // value={value}
        // placeholder="Eg: Wow nature ..."
        // onChange={onChange}
        // onBlur={onBlur}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        invalid={showError}
      />

      {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputField;
