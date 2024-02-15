"use client";

import React, { useState } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { cn } from "@nextui-org/react";

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Checkbox
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center",
          " w-full max-w-[800px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          // `data-[selected=true]:${props.borderColor} `
          {
            "data-[selected=true]:border-success": props.color == "success",
            "data-[selected=true]:border-danger": props.color == "danger",
          }
        ),
      }}
    >
      {children}
    </Checkbox>
  );
};

export default function McqCard({
  question_text,
  correct_answer,
  choice1,
  choice2,
  choice3,
  choice4,
  id,
}) {
  const [selected, setSelected] = useState([""]);

  const handleChange = (value) => {
    const lastItem = value[value.length - 1];
    setSelected([lastItem]);
  };

  return (
    <div className="flex flex-col gap-3 bg-foreground-100/50 sm:p-5 py-5 px-2 rounded-xl">
      <CheckboxGroup
        label={id + ". " + question_text}
        value={selected}
        onValueChange={handleChange}
        size="sm"
        className="text-3xl"
      >
        <CustomRadio
          value={choice1}
          color={correct_answer === "choice1" ? "success" : "danger"}
        >
          {choice1}
        </CustomRadio>
        <CustomRadio
          value={choice2}
          color={correct_answer === "choice2" ? "success" : "danger"}
        >
          {choice2}
        </CustomRadio>
        <CustomRadio
          value={choice3}
          color={correct_answer === "choice3" ? "success" : "danger"}
        >
          {choice3}
        </CustomRadio>
        <CustomRadio
          value={choice4}
          color={correct_answer === "choice4" ? "success" : "danger"}
        >
          {choice4}
        </CustomRadio>
      </CheckboxGroup>
      <p className={cn("text-default-500 text-small")}>Selected: {selected}</p>
    </div>
  );
}
