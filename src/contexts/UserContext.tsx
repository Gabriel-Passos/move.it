import { createContext, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import api from '../services/github.api';

interface GitHubUserData {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
}

interface UserContextData {
  gitHubUserData: GitHubUserData;
  hasUserData: boolean;
  hanldeSignIn: (username: string) => Promise<boolean | void>;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [gitHubUserData, setGitHubUserData] = useState<GitHubUserData>();
  const [hasUserData, setHasUserData] = useState(false);

  const history = useRouter();
  
  async function hanldeSignIn(username: string) {
    event.preventDefault();

    console.log(username);

    const response = await api.get(`users/${username}`);

    console.log(response);

    if (response.data !== null) {
      return (
        setGitHubUserData(response.data),
        userCoookie(response.data),
        setHasUserData(true),
        
        history.push('/home')
      );
    } else {
      return setGitHubUserData(null);
    }
  }

  function userCoookie(data: GitHubUserData) {
    Cookies.set('name', data.name);
    Cookies.set('avatar_url', data.avatar_url);
    Cookies.set('id', String(data.id));
    Cookies.set('login', data.login);
  }

  return (
    <UserContext.Provider value={{
      hanldeSignIn,
      gitHubUserData,
      hasUserData
    }}>
      {children}
    </UserContext.Provider>
  );
}