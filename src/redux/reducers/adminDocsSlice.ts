import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
    cardNumber: string;
    cardType: string;
    id: string;
    location: string;
    nameOnDoc: string;
    orgDocument: string;
    phoneEMail: string;
    reqDocument: string;
}

const initialState: MyState = {
    cardNumber: "",
    cardType: "",
    id: "",
    location: "",
    nameOnDoc: "",
    orgDocument: "",
    phoneEMail: "",
    reqDocument: "",
};

const orgFetchDocsSlice = createSlice({
    name: "orgDocsSlice",
    initialState,
    reducers: {
        setCardNumber: (state, action: PayloadAction<string>) => {
            state.cardNumber = action.payload;
        },
        setCardType: (state, action: PayloadAction<string>) => {
            state.cardType = action.payload;
        },
        setId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        setNameOnDoc: (state, action: PayloadAction<string>) => {
            state.nameOnDoc = action.payload;
        },
        setOrgDocument: (state, action: PayloadAction<string>) => {
            state.orgDocument = action.payload;
        },
        setPhoneEMail: (state, action: PayloadAction<string>) => {
            state.phoneEMail = action.payload;
        },
        setReqDocument: (state, action: PayloadAction<string>) => {
            state.reqDocument = action.payload;
        },
        setCompleteDoc: (state, action) => {
            state.cardNumber = action.payload;
            state.cardType = action.payload;
            state.id = action.payload;
            state.location = action.payload;
            state.nameOnDoc = action.payload;
            state.orgDocument = action.payload;
            state.phoneEMail = action.payload;
            state.reqDocument = action.payload;
        }
    },
});

export const {
    setCardNumber,
    setCardType,
    setId,
    setLocation,
    setNameOnDoc,
    setOrgDocument,
    setPhoneEMail,
    setReqDocument,
    setCompleteDoc
} = orgFetchDocsSlice.actions;

export default orgFetchDocsSlice.reducer;


