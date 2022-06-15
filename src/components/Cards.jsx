import { default as missingImage } from '../assets/images/missing-placeholder.jpg';
import { default as playIcon } from '../assets/icons/icon-play.svg';

function Cards(props) {
  const { results, title, styles } = props;
  console.log(results);
  const imagePath = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className='ml-4'>
      <h1 className='pb-4 text-2xl text-white'>{title}</h1>

      <div className={styles}>
        {results.map(item => {
          return (
            <div
              key={item.id}
              className='py-4 hover:scale-110 hover:ease-out hover:duration-300 '>
              <img
                className='m-auto h-96 '
                src={
                  item.poster_path
                    ? `${imagePath}${item.poster_path} `
                    : missingImage
                }
                alt={item.original_title}
              />
              <img
                src={playIcon}
                alt='play icon'
                className='absolute opacity-0 inset-1/2 hover:opacity-100'
              />
              <p className='absolute text-yellow-50'>
                {!item.poster_path && (item.original_title || item.name)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
