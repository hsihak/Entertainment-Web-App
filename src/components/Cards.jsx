import { default as missingImage } from '../assets/images/missing-placeholder.jpg';

function Cards(props) {
  const { results, title, styles } = props;
  // Filter undefined poster
  // Object.entries(results)
  //   .map(item => {
  //     return item[1];
  //   })
  //   .filter(item =>
  //     console.log(item.poster_path !== null || item.profile_path !== null)
  //   );
  const imagePath = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className='mx-4 cards'>
      <h1 className='pb-4 text-2xl text-white'>{title}</h1>
      <div className={styles}>
        {results.map(item => {
          return (
            <div key={item.id} className=''>
              <img
                className='h-96'
                src={
                  item.poster_path
                    ? `${imagePath}${item.poster_path} `
                    : missingImage
                }
                alt={item.original_title}
              />
              <p>{item.original_title || item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
