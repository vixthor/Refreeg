// components/form.js
"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  FormControl,
  Input,
  Select,
  Text,
  Radio,
  RadioGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import Image from "next/image";
import { FormWrapper } from "./formWrapper";
import { pickUpSchema, bookSchema, deliverySchema, imageSchema } from "@/constants/schema";

export const BookDonationForm = ({ control, errors }) => {
  return (<>
    <FormControl isInvalid={!!errors.title}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            id="title"
            placeholder="Enter book title"
            borderBottom="1.5px solid"
            borderColor={errors.title ? "red.500" : "gray.300"}
            outline="none"
            variant={"flushed"}
            {...field}
          />
        )}
      />
      <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
    </FormControl>

    <FormControl isInvalid={!!errors.author}>
      <Controller
        name="author"
        control={control}
        render={({ field }) => (
          <Input
            id="author"
            placeholder="Enter author name"
            borderBottom="1.5px solid"
            borderColor={errors.author ? "red.500" : "gray.300"}
            outline="none"
            variant={"flushed"}
            {...field}
          />
        )}
      />
      <FormErrorMessage>{errors.author?.message}</FormErrorMessage>
    </FormControl>

    <FormControl isInvalid={!!errors.condition}>
      <Controller
        name="condition"
        control={control}
        render={({ field }) => (
          <Select
            id="condition"
            placeholder="Select condition"
            borderBottom="1.5px solid"
            borderColor={errors.condition ? "red.500" : "gray.300"}
            variant={"flushed"}
            {...field}
          >
            <option value="new">New</option>
            <option value="gently used">Gently Used</option>
            <option value="well used">Well Used</option>
          </Select>
        )}
      />
      <FormErrorMessage>{errors.condition?.message}</FormErrorMessage>
    </FormControl>

    <FormControl isInvalid={!!errors.numberOfBooks}>
      <Controller
        name="numberOfBooks"
        control={control}
        render={({ field }) => (
          <Input
            id="numberOfBooks"
            type="number"
            placeholder="Enter number of books"
            borderBottom="1.5px solid"
            borderColor={errors.numberOfBooks ? "red.500" : "gray.300"}
            outline="none"
            variant={"flushed"}
            onChange={(e) => {
              const value = Number(e.target.value);
              field.onChange(value);
            }}
            value={field.value || ""}
          />
        )}
      />
      <FormErrorMessage>{errors.numberOfBooks?.message}</FormErrorMessage>
    </FormControl>
    </>)
}



export const ImageUploadForm = ({ control, errors }) => {
 

  const [imageUploaded, setImageUploaded] = useState(false); // State to track if an image is uploaded

 

  return (
    <>
      <FormControl isInvalid={!!errors.image}>
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange } }) => (
            <Box position="relative">
              {/* Styled upload box */}
              <Box
                width="100%"
                maxWidth="600px" // Keep it responsive
                height="250px" // Adjust box height
                display="flex"
                alignItems="center"
                justifyContent="center"
                className="border border-gray-400 bg-primaryShades-400/10" // Dashed border to indicate drag-and-drop area
                backgroundColor="#F9FAFB" // Soft background for contrast
                borderRadius="8px" // Slightly rounded corners
                position="relative"
                cursor="pointer"
                transition="background-color 0.3s ease"
                _hover={{ backgroundColor: "#F3F4F6" }} // Change background on hover
                onClick={() => document.getElementById("image").click()} // Programmatically open file input
              >
                {/* Invisible input */}
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    // Check if file is being detected
                    onChange(file); // Pass file to react-hook-form
                    if (file) setImageUploaded(true); // Set state to true if file is uploaded
                  }}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                  }}
                />
                {/* Content inside the box centered */}
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Image
                    src={imageUploaded ? "/cloud-full.svg" : "/cloud.svg"} // Change image based on upload state
                    alt="Upload Icon"
                    width={80} // Adjusted icon size
                    height={80} // Adjusted icon size
                  />
                  <Text color="gray.600" mt={2}>
                    {imageUploaded
                      ? "Image uploaded!"
                      : "Click or drag & drop to upload"}
                  </Text>
                  <Text color="gray.400" fontSize="sm">
                    (Max file size: 10MB)
                  </Text>
                </Box>
              </Box>
            </Box>
          )}
        />
        <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};



export const IsDeliveryForm = ({ control, errors }) => {

 
  return (
    <>
      <Controller
        name="deliveryMethod"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <RadioGroup {...field} className=" flex" onChange={field.onChange}>
            <div className=" flex space-x-20">
              <Box textAlign="center">
                <Radio value="dropoff" size="lg">
                  <Image
                    src={"/deliver.svg"}
                    alt="Delivery"
                    width={100}
                    height={100}
                  />
                </Radio>
                <Text>Drop Off</Text>
              </Box>
              <Box textAlign="center">
                <Radio value="pickup" size="lg">
                  <Image
                    src={"/pickup.svg"}
                    alt="Pickup"
                    width={100}
                    height={100}
                  />
                </Radio>
                <Text>Pickup</Text>
              </Box>
            </div>
          </RadioGroup>
        )}
      />
      {errors.deliveryMethod && (
        <Text color="red.500">{errors.deliveryMethod.message}</Text>
      )}
    </>
  );
};

export const PickupDetails = ({ control,errors}) => {


  return (
    <>
      <FormControl isInvalid={!!errors.fullname}>
        <Controller
          name="fullname"
          control={control}
          render={({ field }) => (
            <Input
              id="fullname"
              placeholder="Enter Full name"
              borderBottom="1.5px solid"
              borderColor={errors.fullname ? "red.500" : "gray.300"}
              outline="none"
              variant={"flushed"}
              {...field}
            />
          )}
        />
        <FormErrorMessage>{errors.fullname?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              id="email"
              placeholder="Enter your email"
              borderBottom="1.5px solid"
              borderColor={errors.email ? "red.500" : "gray.300"}
              outline="none"
              variant={"flushed"}
              {...field}
            />
          )}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.phoneNumber}>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <Input
              id="phoneNumber"
              type="number"
              placeholder="Enter your phone number"
              borderBottom="1.5px solid"
              borderColor={errors.phoneNumber ? "red.500" : "gray.300"}
              outline="none"
              variant={"flushed"}
              {...field}
            />
          )}
        />
        <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.pickUpAddress}>
        <Controller
          name="pickUpAddress"
          control={control}
          render={({ field }) => (
            <Input
              id="pickUpAddress"
              placeholder="Pickup Address"
              borderBottom="1.5px solid"
              borderColor={errors.pickUpAddress ? "red.500" : "gray.300"}
              outline="none"
              variant={"flushed"}
              {...field}
            />
          )}
        />
        <FormErrorMessage>{errors.pickUpAddress?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};
