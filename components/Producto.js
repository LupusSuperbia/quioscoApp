import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useQuiosco()
  const { nombre, imagen, precio } = producto;

  return (
    <div className="border p-3">
      <Image src={`/assets/img/${imagen}.jpg`}
       alt={`Imagen platillo ${nombre}`}
       width={400}
       height={400} />
       <div className="p-3">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-2xl md:text-3xl text-amber-500">
          {formatearDinero(precio)}
        </p>

        <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 text-white p-1.5 md:p-3 mt-3 w-full text-center"
        onClick={() => {
          handleChangeModal()
          handleSetProducto(producto)}}>Agregar</button>
       </div>
    </div>


  );
};

export default Producto;
