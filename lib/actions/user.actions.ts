"use server"



// import { createAdminClient, createSessionClient } from "../appwrite";

// export async function getLoggedInUser() {
//   try {
//     const { account } = await createSessionClient();
//     const result = await account.get();

//     const user = await getUserInfo({ userId: result.$id });

//     return parseStringify(user);
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }



export const signIn = async () => {
    try{

    }
    catch(err){
        console.log('Error', err)
    }
}


export const signUp = async (userData: SignUpParams) => {
    try{
        //Create User account
    }
    catch(err){
        console.log('Error', err)
    }
}
