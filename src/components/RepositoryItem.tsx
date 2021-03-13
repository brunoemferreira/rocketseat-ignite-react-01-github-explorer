interface RepositoryItemProps {
  repository: {
    name: String;
    description: string;
    html_url: string;
    language: string;
  }
}

function RepositoryItem(props: RepositoryItemProps) {
  return (
    <div className="container">
      <li className="li-repository-item">
        <div className="left">
          <a href={props.repository.html_url}> <strong>{props.repository.name}</strong></a>
          <p>{props.repository.description}</p>
          <p id="language">{props.repository.language}</p>
        </div>
        <div className="right">
          <a className="star"> ⭐ Star</a>
          <p>Updated 2 days ago</p>
        </div>
      </li>
      <hr />
    </div>
  );
}

export default RepositoryItem;