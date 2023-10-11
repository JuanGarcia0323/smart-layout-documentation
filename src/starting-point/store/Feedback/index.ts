import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnswer, InitialStateFeedback } from '@sp-interfaces';

const initialState: InitialStateFeedback = {
  value: undefined,
  loading: false,
  error: '',
  show: false,
  answers: {},
};

const Feedback = createSlice({
  name: 'Feedback',
  initialState: initialState,
  reducers: {
    setShowFeedback: (state, { payload }: PayloadAction<boolean>) => {
      state.show = payload;
    },
    insertFeedBack: (state) => {
      state.value = {
        topic: 'general-feedback',
        questions: [{ title: 'What do you think?' }],
      };
      state.show = true;
      state.loading = false;
    },
    updateAnswer: (state, { payload }: PayloadAction<IAnswer>) => {
      state.answers[payload.title] = payload;
    },
  },
});
export const { insertFeedBack, setShowFeedback, updateAnswer } =
  Feedback.actions;
export default Feedback.reducer;
