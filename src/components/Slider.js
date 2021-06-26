export const Slider = (props) => {
  const { numero, setPaginas } = props;

  return (
    <li onClick={() => setPaginas(numero)} className="col bg-dark text-white ">
      {numero}
    </li>
  );
};
