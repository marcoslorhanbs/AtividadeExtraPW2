import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    name: "Marcos Lorhan",
    profession: "Dev FullStack Python",
    avatar: "https://github.com/marcoslorhanbs.png",
    text: `Eae Devs 👋\nAcabei de ministrar o curso de Python Desenvolvendo App Desktop no evento SertaoComp. O que acharam? \n
#Python #Tkinter #sertaocomp`,
    publicationDate: new Date("2023-05-01T10:30:00"),
    comment: [
      {
        name: "Luiza Melo",
        avatar: "https://th.bing.com/th/id/R.e54636afc79ef6ada6dc5c20cb71b09c?rik=vQRd5vD7t6%2bjcQ&riu=http%3a%2f%2fqifinanceiro.com.br%2fwp-content%2fuploads%2f2016%2f05%2fpessoa-pensando.jpg&ehk=NDrhMefotJ7iex4YReP%2f2Kdx3zhH7LMTxIGmIslHLM0%3d&risl=&pid=ImgRaw&r=0",
        text: `Show de Bola Marcos!! 👏👏`,
        publicationDate: new Date(),
        like: 3,
      },
      {
        name: "João Santos",
        avatar: "https://cdn.startupitalia.eu/wp-content/uploads/2020/05/Simone-Maggi-1024x1024.jpg",
        text: `Parabéns!! 👏👏`,
        publicationDate: new Date("2023-05-01T10:30:00"),
        like: 0,
      },
      {
        name: "Joana Barbosa",
        avatar: "https://th.bing.com/th/id/R.a1840794ab6c7a213da2f44655ba827d?rik=Rs2UZPDPR7j1MA&riu=http%3a%2f%2fwdy.h-cdn.co%2fassets%2f17%2f10%2f320x320%2fsquare-1488913836-gettyimages-485208893.jpg&ehk=39iMDwHSAOo3bNLs6guXhJz%2bB99hDQwXv3%2fcWH0DnjE%3d&risl=&pid=ImgRaw&r=0",
        text: `Adorei o minicurso!! 👏👏`,
        publicationDate: new Date("2023-05-01T10:30:00"),
        like: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Marcos Lorhan",
    profession: "Dev FullStack Python",
    avatar: "https://github.com/marcoslorhanbs.png",
    text: `Eae Devs 👋\nAcabei de ministrar o curso de Python Desenvolvendo App Desktop no evento SertaoComp. O que acharam? \n
    #python #Tkinter #sertaocomp`,
    publicationDate: new Date("2023-05-01T10:30:00"),
    comment: [
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}
