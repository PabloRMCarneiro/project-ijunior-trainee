/*componente criado so para criar musicas no banco de dados (não tem nenhum retorno visual)*/
import CreateSong from '../../Api/CreateSong'
import musicArtist from '../../data/musics_artists.json'

const CreateSongComp = () => musicArtist.map((musics, index) => musics.map((music) => CreateSong(music.title, music.cover_image, index+2, music.genre)))


export default CreateSongComp