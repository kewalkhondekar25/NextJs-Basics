import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import client from "@/db"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: { label: 'Email', type: 'text', placeholder: 'Your Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Your Password' },
            },
            async authorize(credentials: any) {
                const username = credentials.username;
                const password = credentials.password;
                const user = await client.user.findUnique({
                    where: {
                        username: username,
                        password: password
                    }
                });
                console.log(credentials);
                
                if(!user){
                    return null
                }
                return {
                    id: `${user?.id}`
                };
            },
        })
    ]
});

export {handler as GET, handler as POST}