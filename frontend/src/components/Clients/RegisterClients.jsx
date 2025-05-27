import React from "react";
import Button from "../Button";
//
const registerClient = ({
  id,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  age,
  setAge,
  country,
  setCountry,

  handleSubmit,
  handleUpdate,
}) => {
  return (
    <>
      <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mb-5">
        <h1 className="text-2xl hidden">Id a modificar {id}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="tambo"
            />
          </div>



          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lastName"
            >
              Email
            </label>
            <input
              type="email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="tambo de gas grande"
            />
          </div>


          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
                Password
            </label>
            <input
              type="password"
              id="email"
              name="email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="$20"
            />
          </div>


          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Age
            </label>
            <input
              type="number"
              id="password"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              name="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="100"
            />
          </div>


          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
                Country
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="$20"
            />
          </div>
          

        {id ? (
            <Button 
            type="submit"
            label={"editar info"}
            actionButton={(e) => {
              handleUpdate(e); console.log("funciona editar")
              }}/>
         
        ) : (
          <Button
          type="submit"
          label={"registrar"}
          actionButton={(e) => {
            handleSubmit(e); console.log("funciona registrar")
            alert("algo")
          }}/>
        )}
        </div>
      </form>
    </>
  );
};

export default registerClient;