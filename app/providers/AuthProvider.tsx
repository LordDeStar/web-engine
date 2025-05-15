'use client'

import { createContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import { userStore, UserStore } from "../stores/user-store";

export const AuthContext = createContext<{ userStore: null | UserStore }>({
    userStore: null
});


export const AuthProvider = ({ children }: any) => {
    const store = useLocalObservable(() => ({ userStore }));

    return (
        <AuthContext.Provider value={store}>
            {children}
        </AuthContext.Provider>
    );
}