import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  NumberField,
  BooleanField,
} from "react-admin";

export const ChallengeOptionList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challenges" />
        <TextField source="image_src" />
        <TextField source="audio_src" />
      </Datagrid>
    </List>
  );
};
