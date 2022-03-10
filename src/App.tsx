
import React from "react";
import AppContainer from "./AppContainer";
import Header from "./Header";

const formFields = [
  { id: 1, label: "First Name", type:"text" },
  { id: 2, label: "Last Name", type:"text" },
  { id: 3, label: "Email", type:"email" },
  { id: 4, label: "Date of Birth", type: "date"}
];

function App() {
  return (
    <AppContainer>
      <Header
        title={`Welcome to Lesson ${
          4 + 1
        } of #react-typescript with #tailwindcss`}
      />
      <div className="flex flex-col items-center">
        <form>
        {formFields.map((field) => (
          <React.Fragment key={field.id}>
            <span className="w-full text-lg px-2">{field.label}</span>
            <input
              className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
              type={field.type}
              placeholder={field.label}
            />
          </React.Fragment>
        ))}
        <button type="submit" className="btn bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg m-4">Submit</button>
        </form>
      </div>
    </AppContainer>
  );
}

export default App;