import { createContext, useEffect, useState } from "react"
import { collection, getDocs, setDoc, doc } from "firebase/firestore"
import { db, auth, provider } from "../firebase"
import { signInWithPopup } from "firebase/auth"
// import { async } from "@firebase/util";
const MediumContext = createContext();
const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [newPost, setNewpost] = useState({})
  const [currUser, setCurrUser] = useState({});
  const [selectedPost, setSelectedPost] = useState({});
  const [showPostPage, setShowPostPage] = useState(false)
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      const querySpanshot = await getDocs(collection(db, "user"));
      setUsers(
        querySpanshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    };
    getUsers();
  }, []);
  useEffect(() => {
    // console.log(localStorage.getItem('posts')?.length);
    // localStorage.removeItem("posts")
    if(localStorage.getItem('posts')?.length > 2)
  { 

       let localPosts = localStorage.getItem("posts")

        setPosts(JSON.parse(localPosts))
        console.log("localPosts");

        return 
    }
    const getUsers = async () => {
      const querySpanshot = await getDocs(collection(db, "articles"));
      setPosts(
        querySpanshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
      localStorage.setItem("posts",JSON.stringify(posts))
    };
    getUsers();
  }, []);
  const handleUserAuth = async () => {
    if(window.localStorage.getItem("user"))
    {
      // setCurrUser( JSON.parse(window.localStorage.getItem("user")))
      let userr = window.localStorage.getItem("user")
      setCurrUser(JSON.parse(userr))
      return  
    }
    const user = await signInWithPopup(auth, provider);
    setCurrUser(user);
    window.localStorage.setItem( "user", JSON.stringify(user))
  };
  const addPostToDatabase = async (newPost)=>{
    console.log("adding"
    );
    await setDoc(doc(db , "articles", String( Math.random()*999999999 )  ),
    {author : newPost.author,
    authorImage: newPost.authorImage,
    email: newPost.email,
    postLength : newPost.postlenght,
    body : newPost.body,
    bannerImage: newPost.bannerImage,
    title: newPost.title,
    category: newPost.category,
       


} )
  }

  return (
    <MediumContext.Provider
      value={{
        posts,
        users,
        selectedPost,
        setSelectedPost,
        handleUserAuth,
        currUser,
        setCurrUser,
        addPostToDatabase,
        showPostPage,
        setShowPostPage,
        isSubmitButtonClicked , setIsSubmitButtonClicked
      }}
    >
      {children}
    </MediumContext.Provider>
  );
};
export { MediumContext, MediumProvider };
