import {

  useEffect,

  useState,

} from "react";

import type { ReactNode } from "react";

import type { AuthUser } from "../types/AuthUser";

import { AuthContext } from "./AuthContext";

import {

  login as loginService,

  logout as logoutService,

} from "../services/authService";


import {

  onAuthStateChanged,

} from "firebase/auth";

import { auth } from "../firebase/config";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

interface Props {

  children: ReactNode;

}

export default function AuthProvider({

  children,

}: Props) {

  const [

    user,

    setUser,

  ] = useState<AuthUser | null>(null);

  const [

    loading,

    setLoading,

  ] = useState(true);


  useEffect(() => {

    const unsubscribe =

      onAuthStateChanged(

        auth,

        async (firebaseUser) => {

          if (firebaseUser) {
            const userDoc = await getDoc(
              doc(db, "users", firebaseUser.uid)
            );

            if (!userDoc.exists()) {
              setUser(null);
              setLoading(false);
              return;
            }

            const profile = userDoc.data();

            if (profile.active !== true) {
              setUser(null);
              setLoading(false);
              return;
            }

            setUser({
              uid: firebaseUser.uid,
              email: profile.email ?? firebaseUser.email ?? "",
              displayName: profile.fullName ?? "",
              role: profile.role ?? "customer",
            });

          } else {

            setUser(null);

          }

          setLoading(false);

        }

      );

    return unsubscribe;

  }, []);

  async function login(

    email: string,

    password: string

  ) {

    await loginService(

      email,

      password

    );

  }

  async function logout() {

    await logoutService();

  }

  if (loading) {

    return (

      <div className="flex h-screen items-center justify-center">

        <div className="text-lg font-medium">

          Loading...

        </div>

      </div>

    );

  }

  return (

    <AuthContext.Provider

      value={{

        user,

        loading,

        login,

        logout,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}