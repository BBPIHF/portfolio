const Button = ({text, color}) => {

  return (
    <button className={`bg-secondary text-${color} py-3 px-5 rounded-lg ring-2 font-semibold text-2xl hover:opacity-80 w-full mt-8`}>{text}</button>
  )
}

export default Button
