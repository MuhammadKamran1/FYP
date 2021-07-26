import React, {useState, createContext} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async ( email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            await AsyncStorage.setItem('Email',email) 
          } catch (e) {
            alert(e);
          }
        },

        forgotPassword: async (email)=>{
          try {
            await auth().sendPasswordResetEmail(email);
            alert('Check Your Email')
          } catch (e) {
            alert(e);
          }
        },

        signup: async (email, password)=>{
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            await AsyncStorage.setItem('Email', email)
          } catch (e) {
            alert(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },

      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
