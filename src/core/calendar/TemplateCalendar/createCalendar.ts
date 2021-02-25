import { addYears, setMonth, compareAsc } from "date-fns";
import {
  PrivateCollegeCalendar,
  PRIVATE_COLLEGE_CALENDAR_ID,
  PUBLIC_COLLEGE_CALENDAR_ID,
} from "./model";
import { AGE_OF_START_STORY } from "../../../constants/fullcalendar/options";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../../../constants/visa";
import { range } from "../../../lib/util";
import { createPrivateCollegeStory } from "../../story/PrivateCollegeStory/createPrivateCollegeStory";
import { createPublicCollegeStory } from "../../story/PublicCollegeStory/createPublicCollegeStory";
import { BaseStory } from "../../story/BaseStory";
import { TemplateOption } from "../BaseCalendar";

const scopeAges = range(
  AGE_OF_START_STORY,
  WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
);

const shouldViewPast = false;
const now = new Date();

const createStoryList = (
  {
    birth,
    calendarId,
    storyCreater,
  }: {
    birth: Date;
    calendarId: string;
    storyCreater: Function;
  },
  options: TemplateOption
): BaseStory[] => {
  const monthsOfStartSchool = options.monthsOfStartSchool;

  return scopeAges
    .map((num) => addYears(birth, num))
    .filter((date) => {
      if (shouldViewPast) return true;
      const isPastPeriod = compareAsc(now, date) !== -1;
      return !isPastPeriod;
    })
    .flatMap((startDate) => {
      const startDateListInYear = monthsOfStartSchool.map((month) =>
        setMonth(startDate, month - 1)
      );
      return startDateListInYear;
    })
    .map((startDate) => {
      const params = { startDate, calendarId };
      return storyCreater(params, options);
    });
};

export const createPrivateCollegeCalendar = (
  {
    birth,
  }: {
    birth: Date;
  },
  options: TemplateOption
): PrivateCollegeCalendar => {
  const params = {
    birth,
    calendarId: PRIVATE_COLLEGE_CALENDAR_ID,
    storyCreater: createPrivateCollegeStory,
  };
  const stories = createStoryList(params, options);
  return {
    id: PRIVATE_COLLEGE_CALENDAR_ID,
    stories,
  };
};

export const createPublicCollegeCalendar = (
  {
    birth,
  }: {
    birth: Date;
  },
  options: TemplateOption
): PrivateCollegeCalendar => {
  const params = {
    birth,
    calendarId: PUBLIC_COLLEGE_CALENDAR_ID,
    storyCreater: createPublicCollegeStory,
  };
  const stories = createStoryList(params, options);
  return {
    id: PUBLIC_COLLEGE_CALENDAR_ID,
    stories,
  };
};
