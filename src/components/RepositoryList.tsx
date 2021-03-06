import { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';

interface Repository {
  name: string;
  id: number;
  description: string;
  html_url: string;
  language: string;
}

function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  // useEffect recebe 2 parametros :  o primeiro é a função que eu quero executar o segundo
  // é quando vc quer executar a função
  useEffect(() => {
    fetch('https://api.github.com/users/brunoemferreira/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {
          repositories.map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))
        }
      </ul>
    </section>
  )
}

export default RepositoryList;