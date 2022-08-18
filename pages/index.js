import Seo from "../components/Seo";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

//const API_KEY ="cdb8382d319ee2d3230abca55d55fe13";
//api_key를 숨기기 위해 config.js로 옮김

export default function Home({results}) {
    const router = useRouter();
    const onClick = (id, title) => {
      //  router.push(`/movies/${id}`)
        router.push({
            pathname:`/movies/${id}`,
            query: {
                title,
            }
    }, `/movies/${id}`)
    }
    const [movies, setMovies ] = useState();
    useEffect(() => {
        (async() => {
            const {results} = await(
                await fetch (`/api/movies`
                    //api_key를 숨기기 위해 config.js로 옮김
                )
            ).json();
            setMovies(results);
        })();
    }, []);
    return (
        <>
        <Seo title="Home"/>
        <div className="container">
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div className="movie" key={movie.id} onClick={() => onClick(movie.id,movie.original_title)}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>
                        <Link href={{
                                pathname:`/movies/${movie.id}`,
                                query: {
                                    title:movie.original_title,
                                },
                            }}
                              as={`/movies/${movie.id}`}
                        >
                            <a>{movie.original_title}</a>
                        </Link>
                    </h4>
                </div>
            ))}
            <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
        </div>
        </>
    );
}



/* Next JS는 해당 페이지가 서버 사이드 렌더링만 할 것인지를 선택할 수 있게 해준다. */
/* 로딩 같은 것을 할 수도 있지만   */
/* 서버에서 모두 렌더 하고 로딩 없이 보여줄 수도 있다 */
/* 데이터가 들어옴과 동시에 렌더를 하는 것 */

/*
export async function getServerSideProps(){
    // 서버에서만 작동하는 함수임
    const {results} = await(
        await fetch (`http://localhost:3000/api/movies`
            //api_key를 숨기기 위해 config.js로 옮김
        )
    ).json();
    return {
        //서버에서 무엇을 리턴하든지, 그 내용을 props 키를 통해 home 페이지에 전달한다.
        props:{
           results,
        }
   }
   // home component의 moveis를 results 로 변경해 주어야 한다.
}*/
