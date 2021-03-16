import { useEffect, useState } from 'react';
import { api } from '../services/api';
import '../styles/sidebar.scss';
import { Button } from '../components/Button';
import { App } from '../App';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface props {
  value : string,
  setValue : (value: string) => void;
}

export function SideBar(props: props) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    props.setValue(id.toString());
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.value === genre.id.toString()}
          />
        ))}
      </div>

    </nav>
  )
}