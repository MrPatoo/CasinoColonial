import React from "react";
import CardClients from "./CardClients";

const ListClients = ({
  deleteClients,
  updateClients,
  loading,
  clients,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Clientes
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {clients?.map((client) => (
          <CardClients
            key={client._id}
            client={client}
            deleteClients={deleteClients}
            updateClients={updateClients}
          />
        ))}
      </div>
    </>
  );
};

export default ListClients;