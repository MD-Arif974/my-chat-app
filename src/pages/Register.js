import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import {auth, db,storage} from '../firebaseInit';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {getDownloadURL,uploadBytesResumable,ref} from 'firebase/storage';
import { useState } from "react";
import { setDoc,doc } from "firebase/firestore";

const Register = () => {
  const [error,setError] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
   const res =  createUserWithEmailAndPassword(auth, email, password);
   const storageRef = ref(storage, displayName);
  const uploadTask = uploadBytesResumable(storageRef, file);

// Listen for state changes, errors, and completion of the upload.

     uploadTask.on((error) => {
         setError(true);
     },
     () => {
      
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {

           await updateProfile((await res).user,{
            displayName,
            photoURL:downloadURL
           })
           console.log("res",(await res).user);
           await setDoc(doc(db,"users",(await res).user.email),{
            id:(await res).user.email,
            displayName,
            photoUrl:downloadURL,
            email:(await res).user.email
           })
      });
    }
     
     )
     
    
  }

   




  return (
    <>
    {
    error ? "OOPS SOMETHING WENT WRONG!" :
    
    
      <div className={styles.AuthOuterCont}>
        <div className={styles.authCont}>
          <h1>Chat Application</h1>
          <h3>Register</h3>
          <form onSubmit={handleSignUp}>
            <input type="text" placeholder="Enter Name" required />
            <input type="email" placeholder="Enter Email" required />
            <input type="password" placeholder="Enter Password" required />
            <input type="file" className={styles.file} id="file"/>
             <label htmlFor="file" className={styles.avatarCont}>
              <img src = " https://cdn-icons-png.flaticon.com/128/4904/4904233.png" />
              <span>Add an Avatar</span>
                
             </label>
            <button>Register</button>
          </form>
          <p>Already have an account ? <Link to = "/signin" style={{textDecoration:"none"}}> Login</Link> </p>
        </div>
      </div>
}
    </>
  );
};

export default Register;
