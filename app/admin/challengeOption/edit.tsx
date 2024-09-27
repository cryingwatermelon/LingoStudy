import {
  SimpleForm,
  Edit,
  TextInput,
  required,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="Text" validate={[required()]} label="Text" />
        <BooleanInput source="correct" label="Correct option" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput
          source="image_src"
          validate={[required()]}
          label="Image_src"
        />
        <TextInput
          source="audio_src"
          validate={[required()]}
          label="Audio_src"
        />
      </SimpleForm>
    </Edit>
  );
};
