import reducer, {
  resetAction,
  toggleAction,
  nextAction,
  backAction,
  selectActiveStepIdx,
  selectIsOpen,
} from "./step";
import { RootState } from "../rootReducer";

describe(reducer.name, () => {
  const expectedInitialState = {
    step: { isOpen: true, activeStepIdx: 0 },
  };

  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(expectedInitialState);
  });

  describe(resetAction.name, () => {
    it("can reset.", () => {
      const prevState = { step: { isOpen: false, activeStepIdx: 999 } };
      expect(reducer(prevState, resetAction())).toEqual(expectedInitialState);
    });
  });

  describe(toggleAction.name, () => {
    it("can toggle open to close.", () => {
      const befState = { step: { isOpen: true, activeStepIdx: 0 } };
      const aftState = { step: { isOpen: false, activeStepIdx: 0 } };
      expect(reducer(befState, toggleAction({ isOpen: false }))).toEqual(
        aftState
      );
    });
    it("can toggle close to open.", () => {
      const befState = { step: { isOpen: false, activeStepIdx: 0 } };
      const aftState = { step: { isOpen: true, activeStepIdx: 0 } };
      expect(reducer(befState, toggleAction({ isOpen: true }))).toEqual(
        aftState
      );
    });
  });
  describe(nextAction.name, () => {
    it("can go next.", () => {
      const befState = { step: { isOpen: true, activeStepIdx: 99 } };
      const aftState = { step: { isOpen: true, activeStepIdx: 100 } };
      expect(reducer(befState, nextAction({}))).toEqual(aftState);
    });
  });
  describe(backAction.name, () => {
    it("can go back.", () => {
      const befState = { step: { isOpen: true, activeStepIdx: 100 } };
      const aftState = { step: { isOpen: true, activeStepIdx: 99 } };
      expect(reducer(befState, backAction({}))).toEqual(aftState);
    });
  });
});

describe("Selector of", () => {
  const createRootState = (partialState) =>
    ({ ui: { step: { step: partialState } } } as RootState);
  const rootState = createRootState({ isOpen: true, activeStepIdx: 0 });

  describe(selectActiveStepIdx.name, () => {
    it("can select.", () => {
      expect(selectActiveStepIdx(rootState)).toEqual(0);
    });
  });

  describe(selectIsOpen.name, () => {
    it("can select.", () => {
      expect(selectIsOpen(rootState)).toEqual(true);
    });
  });
});
