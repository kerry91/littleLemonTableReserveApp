import { useField } from "formik";

export function MyTextInput ({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <br />
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="errorMessage">{meta.error}</div>
        ) : null}
      </>
    );
  };

  export function MyRadio ({ children, ...props }) {
    const [field, meta] = useField({ ...props, type: 'radios' });
    return (
      <>
        <label className="radio-input"/>
        <br/>
          <input type="radio" {...field} {...props} />
          {children}
        {meta.touched && meta.error ? (
          <div className="errorMessage">{meta.error}</div>
        ) : null}
      </>
    );
  };

  export function MySelect ({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <br />
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="errorMessage">{meta.error}</div>
        ) : null}
      </>
    );
  };

  export function MyTextArea ({ label, ...props }) {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <br />
        <textarea className="text-area-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="errorMessage">{meta.error}</div>
        ) : null}
      </>
    );
  };
