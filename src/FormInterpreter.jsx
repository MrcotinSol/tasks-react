import { Avatar, Button, Select, SelectItem } from "@heroui/react";
import { capitalize, lowerCase } from "lodash";
import { Accordion, AccordionItem } from "@heroui/react";
import { RiEdit2Fill } from "react-icons/ri";
import { TextInput, LocationInput, DateInput } from "./FormComponants";

const interpretElement = ({ element, data, index }) => {
  switch (element.field_type) {
    case "input":
      switch (element.input_type) {
        case "text":
          return (
            <TextInput
              value={data}
              index={index}
              placeholder={`Enter ${lowerCase(element.field_label)} ...`}
              label={element.field_label}
            />
          );
      }
    case "location":
      return <LocationInput element={element} data={data} index={index} />;
    case "datepicker":
      return <DateInput element={element} data={data} index={index} />;
    case "select":
      return (
        <Select
          selectedKeys={[data]}
          size="sm"
          label={capitalize(element.field_label)}
          className="!text-zinc-200"
        >
          {element.select_options &&
            element.select_options.map((option) => (
              <SelectItem key={option.label} className="text-zinc-200">
                {option.label}
              </SelectItem>
            ))}
        </Select>
      );
    case "picturepicker":
      return (
        <div className="flex flex-col">
          <p className="text-xs mb-1   text-zinc-400 p-0">
            {element.field_label || element.field_key} :
          </p>
          <div className="flex gap-4 p-2 justify-between w-fit bg-zinc-100  rounded-xl">
            <Avatar
              src="https://media.istockphoto.com/id/469538141/fr/photo/jeune-plant.jpg?s=612x612&w=0&k=20&c=YusPoy6PHk7ai5y4iMzgx_RpVJjcmvyVelmfUBkUSKk="
              size="lg"
              radius="lg"
            />
            <Button color="default" isDisabled size="sm" className="h-auto">
              <RiEdit2Fill className="size-4" />
            </Button>
          </div>
        </div>
      );
    case "sections":
      return (
        <div className="flex flex-col" key={index}>
          <p className="text-xs mb-1  text-zinc-400 p-0">
            {element.field_label || element.field_key} :
          </p>
          <Accordion className="!px-0" isCompact>
            {data.map((section, i) => {
              const sectionForm = element.field_children.find(
                (e) => e.field_label == data[i].$label
              );
              return (
                <AccordionItem title={data[i].$label}>
                  <div className="flex gap-2 flex-col">
                    {sectionForm.field_children.map((sectionElement) =>
                      interpretElement({
                        element: sectionElement,
                        data: data[i][sectionElement.field_key],
                        index: i,
                      })
                    )}
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      );
  }
};

export const FormInterpreter = ({ form, data }) => {
  return (
    <div className="flex h-full gap-2  flex-col">
      {form.form.map((element, index) =>
        interpretElement({ element, data: data[element.field_key], index })
      )}
    </div>
  );
};
