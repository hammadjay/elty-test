"use client";
import PrimaryButton from "@/components/primaryButton/PrimaryButton";
import { useState } from "react";

const OptionsForm = () => {
  const [options, setOptions] = useState([
    {
      title: "Page 1",
      checked: false,
    },
    {
      title: "Page 2",
      checked: true,
    },
    {
      title: "Page 3",
      checked: false,
    },
    {
      title: "Page 4",
      checked: false,
    },
  ]);

  const toggleOption = (index: number) => {
    const newOptions = [...options];
    newOptions[index].checked = !newOptions[index].checked;
    setOptions(newOptions);
  };

  const toggleSelectAll = (value: boolean) => {
    const newOptions = [...options];
    newOptions.forEach((option) => {
      option.checked = value;
    });
    setOptions(newOptions);
  };

  return (
    <form className="form">
      <div className="input-container">
        <label htmlFor="all-pages">All Pages</label>
        <input
          type="checkbox"
          name="all-pages"
          id="all-pages"
          checked={options.every((option) => option.checked)}
          onClick={(e) =>
            toggleSelectAll((e.target as HTMLInputElement).checked)
          }
        />
      </div>
      <div className="divider-container">
        <hr />
      </div>
      <div>
        {options.map((option, index) => (
          <div key={`${option.title}-${index}`} className="input-container">
            <label htmlFor={`${option.title}-${index}`}>{option.title}</label>
            <input
              type="checkbox"
              checked={option.checked}
              name={`${option.title}-${index}`}
              id={`${option.title}-${index}`}
              onClick={() => {
                toggleOption(index);
              }}
            />
          </div>
        ))}
      </div>
      <div className="divider-container">
        <hr />
      </div>
      <div className="button-container">
        <PrimaryButton
          onClick={(e) => {
            e.preventDefault();
            alert("submitted");
          }}
        >
          Submit
        </PrimaryButton>
      </div>
    </form>
  );
};

export default OptionsForm;
