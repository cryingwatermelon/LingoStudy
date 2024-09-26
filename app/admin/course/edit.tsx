import { SimpleForm, Edit, TextInput, required } from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id" validate={[required()]} disabled />
        <TextInput source="title" label="Title" validate={[required()]} />
        <TextInput source="imageSrc" label="Image" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
