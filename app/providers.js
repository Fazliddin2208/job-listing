"use client";

import Header from "@/Components/Header/Header";
import { initializeStore } from "@/redux/configureStore";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }) {
  const { store, persistor } = initializeStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        {children}
        </PersistGate>
    </Provider>
  );
}
