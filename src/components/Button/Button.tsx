import "./button.module.css"

export const Button = ({children, className, ...rest} : any) => {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}