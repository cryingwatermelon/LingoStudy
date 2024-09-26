import { SimpleForm, Create, TextInput, required } from "react-admin";

export const CourseCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="Title" validate={[required()]} />
        <TextInput source="imageSrc" label="Image" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};
