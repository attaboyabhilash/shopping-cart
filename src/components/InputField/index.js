import React from "react"
import styles from "./InputField.module.scss"

const InputField = ({
  name,
  type,
  label,
  innerRef,
  values,
  errors,
  handleChange,
}) => {
  return (
    <fieldset className={styles.block_field}>
      <input
        name={name}
        ref={innerRef ? innerRef : null}
        type={type ? type : name}
        value={values[name]}
        onChange={handleChange}
        style={
          errors[name] !== ""
            ? {
                borderBottom: "2px solid #c0392b",
              }
            : {}
        }
      />
      <label
        htmlFor={name}
        aria-labelledby={label}
        className={styles.placeholder}
        style={
          values[name] !== ""
            ? {
                opacity: 1,
                color: "#1890ff",
                top: "-13px",
                fontSize: "0.75em",
              }
            : errors[name] !== ""
            ? { color: "#c0392b" }
            : {}
        }
      >
        {label}
      </label>
      {errors[name] !== "" ? (
        <label
          htmlFor="error"
          className={styles.error}
          aria-labelledby={errors[name]}
        >
          {errors[name]}
        </label>
      ) : null}
    </fieldset>
  )
}

export default InputField
