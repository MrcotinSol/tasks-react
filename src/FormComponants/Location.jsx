import { Button } from "@heroui/react";
import { TextInput } from ".";
import { FaLocationDot } from "react-icons/fa6";

const FormLocation = ({ element, data, index }) => {
  return (
    <div key={index} className="flex flex-col">
      <p className="text-xs mb-1  text-zinc-400 p-0">
        {element.field_label || element.field_key} :
      </p>
      <div className="flex gap-2">
        <TextInput
          value={data.latitude}
          placeholder="Enter latitude ..."
          label="Latitude"
        />
        <TextInput
          value={data.longitude}
          placeholder="Enter longitude ..."
          label="Longitude"
        />
        <Button color="primary" isDisabled size="sm" className="h-auto">
          <FaLocationDot className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default FormLocation;
