import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';

/*fields: Games.
name, email, password, age, country
*/

const useDataClients = () => {

    const ApiClients="https://casinocolonial.onrender.com/api/clients";
 
    const [activeTab, setActiveTab] = useState("list");
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [age, setAge] = useState("");
      const [country, setCountry] = useState("");
      const [errorClients, setError] = useState(null);
      const [success, setSuccess] = useState(null);
      const [loading, setLoading] = useState(false);
      const [clients, setClients] = useState([]);
    
      const cleanData = () => {
        setName("");
        setEmail("");
        setPassword("");
        setAge("");
        setCountry("");
        setId("");
      };
    
      //funcion para guardar los datos del usuario
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (
          !name ||
          !email ||
          !password ||
          !age || !country
        ) {
          setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
          return;
        }
    
        try {

            //para hacer POST ***********************************
          const newClient = {
            name,
            email,
            password,
            age,
            country,
          };
    
          console.log(newClient, "datos nuevo");
    
          const response = await fetch(ApiClients, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newClient),
          });
    
          if (!response.ok) {
            throw new Error("Hubo un error al registrar el empleado");
          }
    
          const data = await response.json();
            toast.success('registrado');
          setClients(data);
          setSuccess("registrado correctamente");
          cleanData();
          fetchData();
        } catch (error) {
          setError(error.message); // Capturar cualquier error
          console.error("Error:", error);
          alert("Error", "Ocurrió un error al registrar el producto");
            toast.error('Ocurrió un error al registrar el producto');
        } finally {
          setLoading(false);
        }
      };
    
      //para el GET*************************
      const fetchData = async () => {
        try {
          const response = await fetch(ApiClients);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(data);
          setClients(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    


      //para DELETE*******************************************
      const deleteClients = async (id) => {
        try {
          const response = await fetch(
            `${ApiClients}/${id}`,
            { 
              method: "DELETE",
              body: JSON.stringify(deleteClients),
            }
          );
    
          if (!response.ok) {
            throw new Error("Failed to delete product");
          }
    
          const result = await response.json();
          console.log("Deleted:", result);
    toast.success('Producto eliminado');
          // Actualizar la lista después de borrar
          //setEmployees((prev) => prev.filter(emp => emp._id !== id));
          fetchData();
        } catch (error) {
          console.error("Error deleting employee sfs:", error);
        }
      };
    
      //para el UPDATE ****************************************************************
      const updateClients = async (dataClient) => {
        setId(dataClient._id);
        setName(dataClient.name);
        setEmail(dataClient.email);
        setPassword(dataClient.password);
        setAge(dataClient.age);
        setCountry(dataClient.country);

        setError(null);
        setSuccess(null);
        setActiveTab("form");
      };
    
      const handleUpdate = async (e) => {
        console.log("update funcional")

        e.preventDefault();
    
        try {
            //producto ya actualizado
          const updateClients = {
            name,
            email,
            password,
            age,
            country,
          };
    
          const response = await fetch(
            `${ApiClients}/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateClients),
            }
          );
    
          if (!response.ok) {
            throw new Error("Error al actualizar el producto");
          }
    
          toast.success('producto actualizado');
          setSuccess("producto actualizado correctamente");
          cleanData();
          setId(""); // Limpiar el ID
          setActiveTab("list");
          fetchData(); // Volver a cargar la lista


        } catch (error) {
          setError(error.message);
          alert("Error al actualizar el empleado");
          console.error("Error:", errorProduct);
        } finally {
          setLoading(false);
        }
      };



return {
    activeTab,
    setActiveTab,

    //elementos de la tabla////////
    id,
    setId,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    age,
    setAge,
    country, setCountry,
   //////////////////////////////

    errorClients,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    clients,
    setClients,
    cleanData,
    handleSubmit,
    fetchData,
    deleteClients,
    updateClients,
    handleUpdate,
};

  };


export default useDataProducts;
