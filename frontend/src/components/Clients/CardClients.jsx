import React from "react";
import Button from "../Button";

const CardClients = ({ client, deleteClient, updateClient }) => {
  if (!client) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {client.name} 
        </h2>

        <p className="text-gray-600">
          <span className="font-semibold">email:</span> {client.email}
        </p>


        <p className="text-gray-600">
          <span className="font-semibold">password:</span> {client.password}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">age:</span> {client.age}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">country:</span> {client.country}
        </p>
       
        <p>id: {product._id}</p>


        <Button 
        type="button"
        label={"Eliminar"}
        actionButton={() =>{deleteClient(client._id), console.log("funciona delete")} }
        />

                        <Button 
                        type="button"
        label={"Editar Información"}
        actionButton={() =>{updateClient(client);console.log("funciona update")} }
        colorClass={"warning"}
        />


               


      </div>
    </div>
  );
};

export default CardClients;