"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";

import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";

import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";

import { ChallengeList } from "./challenge/list";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";

import { ChallengeOptionList } from "./challengeOption/list";
import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        create={CourseCreate}
        list={CourseList}
        edit={CourseEdit}
        recordRepresentation="title"
      />
      <Resource
        name="units"
        create={UnitCreate}
        list={UnitList}
        edit={UnitEdit}
        recordRepresentation="title"
      />
      <Resource
        name="lessons"
        create={LessonCreate}
        list={LessonList}
        edit={LessonEdit}
        recordRepresentation="title"
      />
      <Resource
        name="challenges"
        create={ChallengeCreate}
        list={ChallengeList}
        edit={ChallengeEdit}
        recordRepresentation="question"
      />
      <Resource
        name="challengeOptions"
        create={ChallengeOptionCreate}
        list={ChallengeOptionList}
        edit={ChallengeOptionEdit}
        recordRepresentation="text"
        options={{ label: "Challenge Options" }}
      />
    </Admin>
  );
};

export default App;
