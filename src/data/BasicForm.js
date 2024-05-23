import React, { useState } from "react";

export default function BasicForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/EasfmcOJCle", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setError(
            "Thanks for getting in touch. I will reach out to you soon."
          );
          e.target.reset();
        } else if (response.code === 422) {
          // Field validation failed
          setError("Please check the form, edit the fields and try again.");
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex flex-col max-w-[600px] w-full"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300">
          Get in touch
        </p>
        <p className="py-4 text-gray-300">
          Submit the form below to get in touch with me.
        </p>
      </div>

      <div className="flex flex-1 justify-between items-center"></div>
      <div className="formcarry-block">
        <label htmlFor="name"></label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="First and Last Name"
          className=" bg-[#ccd6f6] p-2"
        />
      </div>

      <div className="formcarry-block">
        <label htmlFor="email"></label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="john@doe.com"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
      </div>

      <div className="formcarry-block">
        <label htmlFor="message"></label>
        <textarea
          value={message}
          name="message"
          rows="10"
          cols={"50"}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Please enter your message..."
          className="bg-[#ccd6f6] p-2"
        ></textarea>
      </div>

      <div className="formcarry-block">
        <button
          type="submit"
          className="text-white border-2 hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-black hover:rounded hover:font-bold py-3 px-4 my-4 w-[300px] items-center"
        >
          Send
        </button>
      </div>

      {error && <p className="text-[#64ffda] font-medium">{error}</p>}
    </form>
  );
}
